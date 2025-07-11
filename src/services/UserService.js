

class UserService {
    constructor() {}

    login(userName, userPass) {
        if (userName === "admin" && userPass === "admin") {
            return true
        }

        return true;
    }
}

export default UserService;
