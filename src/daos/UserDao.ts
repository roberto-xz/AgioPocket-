

import UserModel from "../models/UserModel";
import * as SQLite from 'expo-sqlite';
import queries from "../sql/queries";

export default class UserDao {
    private database: SQLite.SQLiteDatabase;
    private dataname: string = "agiopocket.db";

    constructor() {
        this.database = SQLite.openDatabaseSync(this.dataname);
        this.database.execSync(queries.create_user_table);
        this.database.closeSync();
    }

    public insert(user: UserModel): boolean {
        if (this.open_data()) {
            const result = this.database.runSync(
                queries.insert_user,user.getName,user.getLast,user.getBalance
            );

            this.close_data();
            return ( result.changes > 0 )
        }
        return false;
    }

    public select(): UserModel | null {
        if (this.open_data()) {
            const rows: any =  this.database.getFirstSync("SELECT * FROM users");
            if (rows) {
                let user = new UserModel(rows.name, rows.last, rows.balance);
                user.setId = rows.id;
                this.close_data();
                return user;
            }
        }
        return null;
    }

    private open_data(): boolean {
        try {
            this.database = SQLite.openDatabaseSync(this.dataname);
            return true;
        }catch(e){return false;}
    }
    private close_data() {this.database.closeSync();}

}
