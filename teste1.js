let data =  require("./Teste1/database/fakeData");

const getUser = ( req, res, next ) => {
    let { email } = req.body;

    if (email === undefined) {
        return res.status(400).send({ message: "email is required"});
    }

    let user = data.find( user => user.email === email );

    if (user === undefined) {
        return res.status(404).send({ message: "User not found"});
    }

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