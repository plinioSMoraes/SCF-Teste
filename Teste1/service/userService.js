const UserModel = require('../model/index');

function validateEmail(email) {
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

const getUser = (email) => {
    if (email === undefined) {
        return { type: "error", message: "email is required"};
    }
    if (email === "") {
        return { type: "error", message: "email is required"};
    }
    if (!validateEmail(email)) {
        return { type: "error", message: "email is invalid"};
    }
    let user = UserModel.getUser(email);
    return {type: null, message: user};
}

const getUsers = () => {
    let users = UserModel.getUsers();
    if (users.length === 0) {
        return { type: "error", message: "No users found"};
    }
    return {type: null, message: users};
}

module.exports = {
    getUser,
    getUsers,
}