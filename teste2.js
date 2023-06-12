var data =  require("./Teste1/database/fakeData");

module.exports = function(req, res){
  
    var name =  req.body.name;
    var job =  req.body.job;
    
    var newUser = {
        name: name,
        job: job,
    }

    data.push(newUser)
    
    res.send(newUser);

};