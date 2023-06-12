var data =  require("./Teste1/database/fakeData");

module.exports =  function(req, res) {
    const { id } = req.params;
    const { name, job } = req.body;

    if (name === "" || name === undefined) {
        return res.status(400).send("Invalid name");
    }

    if (job === "" || job === undefined) {
        return res.status(400).send("Invalid job");
    }
    
    if (id === undefined || id < 1 || isNaN(id)) {
        return res.status(400).send("Invalid id");
    }

    const user = data.find(user => user.id.toString() === id);
    
    if (user === undefined) {
        return res.status(404).send("User not found");
    }

    user.name = name;
    user.job = job;

    data[id -1] = user;
    return res.status(200).send(data)
};