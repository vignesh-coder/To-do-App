var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();
var port = 80; //port number

//set up view engine
app.set('view engine','ejs');

//set static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to a port
app.listen(port);

console.log('The app is listening to the port '+port+'...');
