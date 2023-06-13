const accessedData = require("./Teste1/database/accessedData");
const data = require("./Teste1/database/fakeData");

module.exports = function(req, res){
    let { name } = req.params;
    const index = data.findIndex( user => user.name === name ) + 1;

    if (index === -1) {
        return res.status(404).send({ message: "User not found"});
    }

    if (accessedData[index] === undefined) {
        return res.status(200).send({ message: "Nunca foi acessado"});
    }

    const message = `O usuário ${name} foi lido ${accessedData[index]} vezes.`
    
    return res.status(200).send({ message });
};