

import UserService from "../services/UserService";

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    login(userName, userPass) {
        if (!userName || !userPass) {
            throw new Error("Username and password are required");
        }
        return this.userService.login(userName, userPass);
    }
}

export default UserController;
