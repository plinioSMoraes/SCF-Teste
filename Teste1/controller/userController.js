const UserService = require('../service/index');

const getUser = (req, res) => {
    let { email } = req.body;
    let { type, message } = UserService.getUser(email);

    if (type === "error") {
        return res.status(400).send({ message: message });
    }
    if (message === undefined) {
        return res.status(404).send({ message: "User not found"});
    }
    return res.status(200).send(message);
};

const getUsers = (req, res) => {
    let { type, message } = UserService.getUsers();
    if (type === "error") {
        return res.status(404).send({ message: message });
    }
    return res.status(200).send(message);
};

const addUser = (req, res) => {
    const newUser = req.body;
    const { type, message } = UserService.addUser(newUser);
    if (type === "error") {
        return res.status(400).send({ message: message });
    }
    return res.status(201).send(message);
}

module.exports = {
    getUser,
    getUsers,
    addUser,
};