var data =  require("./Teste1/database/fakeData");

module.exports = function(req, res){
    const { name, job } = req.body;
    
    if (name === undefined || job === undefined || name === "" || job === "") {
        return res.status(400).send({ message: "Invalid data"});
    }

    let newUser = {
        name: name,
        job: job,
    }
    
    const getUser = data.find(user => user.name === name);
    if (getUser) {
        return res.status(409).send({ message: "User already exists"});
    }

    if (data.includes(newUser)) {
        return res.status(409).send({ message: "User already exists"});
    }

    data.push(newUser)
    
    return res.status(200).send({ message: "User created successfully"});
};