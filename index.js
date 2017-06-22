const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/public', express.static('public'));

var list = [{todo: "Wash the car", yetTodo: true}];
const data = {todos: list};

app.get("/", function(req, res){
  res.render('home', { todos: list });
});

app.post("/tasks", function(req, res){
  list.push("<button type=submit action='/' method='post'>Mark complete</button>" + req.body.new);
  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
