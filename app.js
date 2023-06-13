const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// middleware
const adminValidation = require("./middlewares/adminValidation");

// Aqui ficam as rotas dos testes dos requisitos
const teste1 = require("./teste1");
const teste2 = require("./teste2");
const teste3 = require("./teste3");
const teste4 = require("./teste4");
const teste5 = require("./teste5");

// Criei essa variavel pois ela faz o controle completo de todas as rotas de usuario (get, post, delete, put)
// const UserController = require("./Teste1/controller/userController");

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

// Modifiquei algumas rotas, mas a funcionalidade continua a mesma
app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2)
app.delete("/users/:name", adminValidation, teste3)
app.put("/users/:id", adminValidation, teste4)
app.get("/users/access/:name", teste5);

// Para a variavel que eu creiei, fiz outras rotas que fazem o mesmo que as rotas acima, mas de uma forma mais organizada
// app.get("/user/:name", UserController.getUser); // Teste1
// app.get("/users", UserController.getUsers); // Teste1
// app.post("/users", UserController.addUser); // Teste2
// app.delete("/users/:name", adminValidation, UserController.deleteUser); // Teste3
// app.put("/users/:id", adminValidation, UserController.updateUser); // Teste4
// app.get("/users/access/:name", UserController.getUserAccess); // Teste5

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});