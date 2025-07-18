
import LoanDao from "../daos/LoanDao";
import LoanModel from "../models/LoanModel";

export default class LoanService {
    private loanDao: LoanDao;

    constructor() {
        this.loanDao = new LoanDao();
    }

    public create(loan:LoanModel): number | null  {
        return this.loanDao.insert(loan);
    }
}
