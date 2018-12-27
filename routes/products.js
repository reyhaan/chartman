const app = module.exports = require('express')();
const jsonHandler = require('../services/jsonService');

app.post('/', (req, res) => {
	var data = req.body.data;
	for (var i = 0; i < data.length; i++) {
		data[i].supplier = data[i].supplier.toUpperCase();
	}
// 	res.status('500').send("err");
	res.send(data);
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