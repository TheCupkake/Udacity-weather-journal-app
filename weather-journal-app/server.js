// Setup empty JS object to act as endpoint for all routes
projectData = {};

//setup a variably to hold the port number we're going to use
const port = 3000;

// Require Express to run server and routes

const express = require('express');

//require body parser
const bodyParser = require('body-parser');

// require Cors
const cors = require('cors');

// Start up an instance of app

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, function(){
	console.log('server is running properly on port %s', port);
});

//establishing the get route endpoint to retrieve the object projectData for the client side
app.get('/getdata', function(req,res){
	res.send(projectData);
})


//establishing the post route to add the data posted by the user to the object projectData
app.post('/postdata', function(req,res){
	projectData.temp = req.body.temp;
	projectData.content = req.body.content;
	projectData.date = req.body.date;
	res.send();
});