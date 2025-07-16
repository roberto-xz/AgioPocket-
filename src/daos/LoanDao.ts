
import * as SQLite from 'expo-sqlite';
import queries from "../sql/queries";
import DBConnection from '../infra/DBconnection';
import LoanModel from '../models/LoanModel';

export default class LoanDao {
    private database: SQLite.SQLiteDatabase;

    constructor() {
        this.database = DBConnection.getInstance().getConnection();
        this.database.execSync(queries.create_loan_table);
    }

    insert(loan: LoanModel): boolean {
        try {
            const result = this.database.runSync(
                queries.insert_loan,loan.getClientId,
                loan.getValue, loan.getFirstInstallmentDate, loan.getPercentual,
                loan.getInstallmentsCount
            );
            return ( result.changes > 0 )
        }
        catch(error){return false;}
    }
}
