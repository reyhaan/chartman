const app = module.exports = require('express')();
const jsonHandler = require('../services/jsonService');

app.post('/', (req, res) => {
	var data = req.body.data;
	jsonHandler.writeResponse(data).then(response => {
		res.send(response);
	})
	.catch(err => {
		res.status('500').send(err);
	});
});

app.get('/file', (req, res) => {
  jsonHandler.readResponse('response.json').then(response => {
    var parsedResponse = JSON.parse(response);
    
    for (var i = 0; i < parsedResponse.length; i++) {
      parsedResponse[i].supplier = parsedResponse[i].supplier.toUpperCase();
    }
    
    jsonHandler.writeResponse(parsedResponse).then(response => {
      res.send(parsedResponse);
    })
    .catch(err => {
      res.status('500').send(err);
    });
    
  })
  .catch(err => {
    res.status('500').send(err);
  });
});