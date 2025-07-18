
import UserDao from "../daos/UserDao";
import UserModel from "../models/UserModel";

export default class UserService {
    private userDao: UserDao;

    constructor() {
        this.userDao = new UserDao();
    }

    create(name: string,last: string): boolean {
        if (name && last ) {
            const userMdl = new UserModel(name, last, 0.00);
            return this.userDao.insert(userMdl);
        }
        return false;
    }

    getUser(): UserModel | null {
        return this.userDao.select();
    }
}

