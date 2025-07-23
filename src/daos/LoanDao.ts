
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

    insert(loan: LoanModel): number | null {
        try {
            const result = this.database.runSync(
                queries.insert_loan,
                loan.getClientId,loan.getValue,loan.getDate,
                loan.getPercentual,loan.getLoans,loan.getLoansPrices
            );

            return (result.changes > 0 ) ? result.lastInsertRowId : null;
        }
        catch(error) {return null;}
    }

    selectByClientId(id: number):LoanModel[] | null {
        let data:LoanModel[] = [];
        try {
            const allRows:any = this.database.getAllSync('SELECT * FROM loans WHERE client_id = ?',id);
            for (const row of allRows) {
                let loan = new LoanModel(id,row.value,row.date,row.percentual, row.loans,row.loansPrices);
                loan.setId = row.id;
                data.push(loan);
            }
            return (data.length > 0 ) ? data : null;
        }
        catch(error) { return null}
    }

    remove(id: number): boolean {
        const result = this.database.runSync("DELETE FROM loans WHERE id = ?",id);
        return (result.changes > 0);
    }
}
