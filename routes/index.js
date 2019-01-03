let express = require("express");
const app = express();
let bodyParser = require("body-parser");

app.use(function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	next(); 
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// default route
app.get('/', (req, res) => res.send('Hello World!'));

// middlewares
app.use('/api/products', require('./products'));
app.use('/api/list', require('./products'));

// all other routes
app.all('*', (req, res) => {
  res.status(404).send("Not found bro!");
});

module.exports = app;