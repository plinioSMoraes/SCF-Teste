let data =  require("./Teste1/database/fakeData");
let accessedData = require("./Teste1/database/accessedData");

const getUser = ( req, res, next ) => {
    let { name } = req.body;

    if (name === undefined) {
        return res.status(400).send({ message: "name is required"});
    }

    let user = data.find( user => user.name === name );

    if (user === undefined) {
        return res.status(404).send({ message: "User not found"});
    }

    if (accessedData[user.id] === undefined) {
        accessedData[user.id] = 0;
    }
    accessedData[user.id] += 1;
    return res.status(200).send(user);
};

const getUsers = ( req, res, next ) => {
    if (data.length === 0) {
        return res.status(404).send({ message: "No users found"});
    }
    return res.status(200).send({ data })
};

module.exports = {
    getUser,
    getUsers
};