var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');
var cors = require('cors');
var path = require('path');


var Route = require('./contactlist/routes/route');


// connect to mongodb
mongoose.connect('mongodb://localhost/Restaurant' , { useMongoClient: true });
var db = mongoose.connection;


// Check DB connection
db.once('open', function(){
	console.log('Connected to MongoDB @ mongodb://localhost/Restaurant');
});

// Check for DB errors
db.on('error', function(err){
	console.log('MongoDB connection error: ' + 'err');
});




// port number
var port = 5500;

// Adding Middleware
app.use(cors());
app.use(bodyParser.json());

// Static file for the client side in public folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api', Route);


// Testing Server
app.get('/', function (req, res){
	res.send('himalayan !');
});



app.listen(port, ()=>{
	console.log('Application is running on port ' + port);
});