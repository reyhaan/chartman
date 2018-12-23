const app = module.exports = require('express')();
const jsonResponseHandler = require('../services/jsonResponseHandlerService');

app.get('/', (req, res) => {
  jsonResponseHandler.readResponse('response.json').then(response => {
    res.send(JSON.parse(response));
  })
  .catch(err => {
    res.status('500').send(err);
  });
  
});