

import * as SQLite from 'expo-sqlite';
import queries from "../sql/queries";
import ClientModel from '../models/ClientModel';
import DBConnection from '../infra/DBconnection';

export default class ClientDao{
    private database: SQLite.SQLiteDatabase;

    constructor() {
        this.database = DBConnection.getInstance().getConnection();
        this.database.execSync(queries.create_client_table);
    }

    insert(client: ClientModel): boolean {
        const result = this.database.runSync(
            queries.insert_client,
            client.getName, client.getLast,
            client.getCpf,  client.getBirthDay,
            client.getCity, client.getNeighborhood,
            client.getStreet,client.getHomeNumber,
            client.getEmail, client.getPhoneNumber
        );
        return ( result.changes > 0 )
    }

    selectAll():ClientModel[] | null{
        let data:ClientModel[] = [];
        const allRows:any = this.database.getAllSync('SELECT * FROM clients');

        for (const r of allRows) {
            let client = new ClientModel (
                r.name,r.last,r.cpf,r.birthDay,r.city,
                r.neighborhood,r.street,r.homeNumber,
                r.email,r.phoneNumber
            );
            client.setId = r.id;
            data.push(client);
        }
        return (data.length > 0 ) ? data : null;
    }
}
