

import UserModel from "../models/UserModel";
import * as SQLite from 'expo-sqlite';
import queries from "../sql/queries";
import DBConnection from "../infra/DBconnection";

export default class UserDao {
    private database: SQLite.SQLiteDatabase;

    constructor() {
        this.database = DBConnection.getInstance().getConnection();
        this.database.execSync(queries.create_user_table);
    }

    public insert(user: UserModel): boolean {
        try {
            const result = this.database.runSync(
                queries.insert_user,user.getName,user.getLast,user.getBalance
            );
            return ( result.changes > 0 )
        }
        catch(error) {return false;}
    }

    public select(): UserModel | null {
        const rows: any =  this.database.getFirstSync("SELECT * FROM users");
        if (rows) {
            let user = new UserModel(rows.name, rows.last, rows.balance);
            user.setId = rows.id;
            return user;
        }
        return null;
    }
}
