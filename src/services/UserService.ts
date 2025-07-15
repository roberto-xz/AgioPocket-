
import UserDao from "../daos/UserDao";
import UserModel from "../models/UserModel";

export default class UserService {
    private userDao: UserDao;

    constructor() {
        this.userDao = new UserDao();
    }

    create(name: string,last: string,money: number): boolean {
        if (name || last || money ) {
            const userMdl = new UserModel(name, last, money);
            return this.userDao.insert(userMdl);
        }
        return false;
    }

    getUser(): UserModel | null {
        return this.userDao.select();
    }
}

