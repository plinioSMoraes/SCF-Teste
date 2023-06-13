const UserService = require('../service/index');

const getUser = (req, res) => {
    let { name } = req.params;
    let { type, message } = UserService.getUser(name);

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
};

const deleteUser = (req, res) => {
    const { name } = req.params;
    const { type, message } = UserService.deleteUser(name);
    if (type === "error") {
        return res.status(400).send({ message: message });
    }
    return res.status(202).send(message[0]);
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    const { type, message } = UserService.updateUser(id, newUser);
    if (type === "error") {
        return res.status(400).send({ message: message });
    }
    return res.status(200).send(message[0]);
};

const getUserAccess = (req, res) => {
    const { name } = req.params;
    const { type, message } = UserService.getUserAccess(name);
    if (type === "error") {
        return res.status(400).send({ message: message });
    }
    return res.status(200).send({message});
};

module.exports = {
    getUser,
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    getUserAccess,
};