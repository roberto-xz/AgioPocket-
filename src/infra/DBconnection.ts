
import * as SQLite from 'expo-sqlite';

export default class DBConnection {
    private static instance: DBConnection;
    private connection: SQLite.SQLiteDatabase;

    private constructor() {
        this.connection = SQLite.openDatabaseSync("agiopocket.db");
    }

    public static getInstance(): DBConnection {
        if (!DBConnection.instance) {
            DBConnection.instance = new DBConnection();
        }
        return DBConnection.instance;
    }

    public getConnection(): SQLite.SQLiteDatabase {
        return this.connection;
    }
}

// const db = DBConnection.getInstance().getConnection();

