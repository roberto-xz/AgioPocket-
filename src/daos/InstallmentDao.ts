
import * as SQLite from 'expo-sqlite';
import queries from "../sql/queries";
import DBConnection from '../infra/DBconnection';
import InstallmentModel from '../models/InstallmentModel';

export default class InstallmentDao {
    private database: SQLite.SQLiteDatabase;

    constructor() {
        this.database = DBConnection.getInstance().getConnection();
        this.database.execSync(queries.create_installment_table);
    }

    insert(installment: InstallmentModel): boolean {
        try {
            const result = this.database.runSync(
                queries.insert_installment,
                installment.getLoanId,installment.getPartNum,
                installment.getValue,installment.getStatus,
                installment.getDueDate
            );
            return ( result.changes > 0 )
        }
        catch(error){return false;}
    }

    removeAllByLoanId(id: number): boolean {
        const result = this.database.runSync("DELETE FROM installments WHERE loanId = ?",id);
        return (result.changes > 0);
    }
}
