var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var todos = [{todo:'do coding'},{todo:'call to ck'},{todo:'check social media'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

//establish database connection
mongoose.connect('mongodb://root:vicky123@ds125821.mlab.com:25821/todomaster',{useNewUrlParser: true});
mongoose.Promise = global.Promise;

//create a schema
var todoSchema = new mongoose.Schema({
  todo:String
});

var Todo = mongoose.model('Todo',todoSchema);

module.exports = function(app){

  app.get('/todo',function(req,res){
    Todo.find({},function(err,data){
      res.render('todo',{todos:data});
    });
  });

  app.post('/todo',urlencodedParser,function(req,res){
    Todo(req.body).save(function(err,data){
      res.json(data);
    });
  });

  app.delete('/todo/:item',function(req,res){
    Todo.find({todo: req.params.item.replace(/\-/g,' ')}).deleteOne(function(err,data){
      res.json(data);
    });
  });
};
