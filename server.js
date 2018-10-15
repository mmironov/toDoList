var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/toDoListModel'),
    controller = require('./api/controllers/toDoListController')
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/toDoListRoutes');
routes(app);

app.listen(port);

console.log('toDoList REST API started on prot: ' + port);
