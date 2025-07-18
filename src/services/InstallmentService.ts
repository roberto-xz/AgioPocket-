
import InstallmentDao from "../daos/InstallmentDao";
import InstallmentModel from "../models/InstallmentModel";

export default class InstallmentService {
    private installmentDao: InstallmentDao;

    constructor() {
        this.installmentDao = new InstallmentDao()
    }

    create(installment: InstallmentModel): boolean {
        return this.installmentDao.insert(installment);
    }
}
