

import * as SQLite from 'expo-sqlite';
import queries from "../sql/queries";
import ClientModel from '../models/ClientModel';
import DBConnection from '../infra/DBconnection';
import fakeData from '../sql/fakeData';

export default class ClientDao{
    private database: SQLite.SQLiteDatabase;

    constructor() {
        this.database = DBConnection.getInstance().getConnection();
        this.database.execSync(queries.create_client_table);
    }

    insert(client: ClientModel): boolean {
        try {
            //this.database.runSync(fakeData.clientes);
            const result = this.database.runSync(
                queries.insert_client,
                client.getName,
                client.getLast,
                client.getEmail,
                client.getPhoneNumber,
                client.getSendEmail
            );
            return ( result.changes > 0 )
        }catch(error){return false;}
    }

    update(client: ClientModel) : boolean {
        try {
            const result = this.database.runSync(
                    queries.update_client,
                    client.getName,
                    client.getLast,
                    client.getEmail,
                    client.getPhoneNumber,
                    client.getSendEmail,
                    client.getId
            );
            return ( result.changes > 0 )
        }catch(error){ console.log(error); return false;}
    }

    selectAll():ClientModel[] | null {
        let data:ClientModel[] = [];
        const allRows:any = this.database.getAllSync('SELECT * FROM clients');

        for (const row of allRows) {
            let sendEmail = (row.sendEmails == "Y") ? true : false;
            let client = new ClientModel(row.name, row.last, row.email, row.phoneNumber,sendEmail);

            client.setId = row.id;
            data.push(client);
        }
        return (data.length > 0 ) ? data : null;
    }

    selectById(id:number):ClientModel | null {
        try {
            const row:any = this.database.getFirstSync('SELECT * FROM clients WHERE id = ?',id);
            if (row) {
                let sendEmail = (row.sendEmails == "Y") ? true : false;
                let client = new ClientModel(row.name, row.last, row.email, row.phoneNumber,sendEmail);
                client.setId = row.id;
                return client;
            }
            return null;
        }catch(err){return null;}
    }


    searchClients(searchTerm: string): ClientModel[] | null {
        let data: ClientModel[] = [];
        const query = `SELECT * FROM clients WHERE name LIKE ? OR last LIKE ? OR phoneNumber LIKE ?`;
        const wildcardTerm = `${searchTerm}%`;


        const allRows: any = this.database.getAllSync(query, [wildcardTerm, wildcardTerm, wildcardTerm]);

        for (const row of allRows) {
            let sendEmail = (row.sendEmails === "Y") ? true : false;
            let client = new ClientModel(row.name, row.last, row.email, row.phoneNumber, sendEmail);
            client.setId = row.id;
            data.push(client);
        }

        return (data.length > 0) ? data : null;
    }

    remove(id: number): boolean {
        const result = this.database.runSync("DELETE FROM clients WHERE id = ?",id);
        return (result.changes > 0);
    }
}
