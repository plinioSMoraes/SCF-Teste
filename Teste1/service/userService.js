const UserModel = require('../model/index');

function validateEmail(email) {
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

function validateUser(user) {
    const { name, job, age, email, department } = user;
    if (name === undefined) {
        return { type: "error", message: "name is required"};
    }
    if (job === undefined) {
        return { type: "error", message: "job is required"};
    }
    if (age === undefined) {
        return { type: "error", message: "age is required"};
    }
    if (email === undefined) {
        return { type: "error", message: "email is required"};
    }
    if (!validateEmail(email)) {
        return { type: "error", message: "email is invalid"};
    }
    if (department === undefined) {
        return { type: "error", message: "department is required"};
    }
    return { type: null, message: "User is valid"};
}

const getUser = (name) => {
    if (name === undefined) {
        return { type: "error", message: "name is required"};
    }
    if (name === "") {
        return { type: "error", message: "name is required"};
    }
    // if (!validateEmail(email)) {
    //     return { type: "error", message: "email is invalid"};
    // }
    let user = UserModel.getUser(name);
    return {type: null, message: user};
}

const getUsers = () => {
    let users = UserModel.getUsers();
    if (users.length === 0) {
        return { type: "error", message: "No users found"};
    }
    return {type: null, message: users};
}

const addUser = (newUser) => {
    const allUsers = UserModel.getUsers();
    const user = UserModel.getUser(newUser.email);
    if (user !== undefined) {
        return { type: "error", message: "User already exists"};
    }
    const id = allUsers.length + 1;
    const validations = validateUser(newUser);
    if (validations.type === "error") {
        return validations;
    }
    const addedUser = UserModel.addUser({id, ...newUser});
    return {type: null, message: addedUser};
}

const deleteUser = (name) => {
    if (name === undefined || name === "") {
        return { type: "error", message: "name is required"};
    }
    const user = UserModel.getUser(name);

    if (user === undefined) {
        return { type: "error", message: "User not found"};
    }

    const deletedUser = UserModel.deleteUser(name);
    return {type: null, message: deletedUser};
}

const updateUser = (id, newUser) => {
    const { email } = newUser;
    if (email === undefined || email === "") {
        return { type: "error", message: "email is required"};
    }
    
    if (!validateEmail(email)) {
        return { type: "error", message: "email is invalid"};
    }

    const user = UserModel.getUser(name);
    if (user === undefined) {
        return { type: "error", message: "User not found"};
    }

    const validations = validateUser(newUser);
    if (validations.type === "error") {
        return validations;
    }

    const updatedUser = UserModel.updateUser(id, newUser);
    return {type: null, message: updatedUser};
}

const getUserAccess = (name) => {
    if (name === undefined || name === "") {
        return { type: "error", message: "name is required"};
    }

    const user = UserModel.getUser(name);
    if (user === undefined) {
        return { type: "error", message: "User not found"};
    }

    const userAccess = UserModel.getUserAccess(name);
    if (userAccess === undefined) {
        return { type: "error", message: "User access not found"};
    }
    return {type: null, message: userAccess};
}

module.exports = {
    getUser,
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    getUserAccess,
}