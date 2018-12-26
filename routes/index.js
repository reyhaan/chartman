const app = module.exports = require('express')();
var express = require("express");

app.use(express.static('dist'));

app.use(express.static('app'));
 
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/dist/css'));
app.use('/js', express.static(__dirname + '/dist/js'));
app.use('/images', express.static(__dirname + '/dist/images'));

// default route
app.get('/', (req, res) => res.send('Hello World!'));

// middlewares
app.use('/api/products', require('./products'));
app.use('/api/list', require('./products'));

// all other routes
app.all('*', (req, res) => {
  res.status(404).send("Not found bro!");
})