var data =  require("./Teste1/database/fakeData");

module.exports = function(req, res) {
    let { name } = req.params;

    const index = data.findIndex( user => user.name === name );

    if (index === -1) {
        return res.status(404).send({ message: "User not found"});
    }

    data.splice(index, 1);

    return res.status(200).send({ message: "User deleted"});
};