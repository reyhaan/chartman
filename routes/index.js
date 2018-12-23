const app = module.exports = require('express')();

// default route
app.get('/', (req, res) => res.send('Hello World!'));

// middlewares
app.use('/products', require('./products'));

// all other routes
app.all('*', (req, res) => {
  res.status(404).send("Not found bro!");
})