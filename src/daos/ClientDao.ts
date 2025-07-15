

import * as SQLite from 'expo-sqlite';
import queries from "../sql/queries";

export default class ClientDao{
    private database: SQLite.SQLiteDatabase;
    private dataname: string = "agiopocket.db";

    constructor() {
        this.database = SQLite.openDatabaseSync(this.dataname);
        //this.database.execSync(queries.drop_user_table);
        this.database.execSync(queries.create_client_table);
    }
}
