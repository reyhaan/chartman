const app = module.exports = require('express')();
const fileHandler = require('../services/fileService');
const utils = require('../services/utils');

app.post('/', (req, res) => {
	var data = req.body.data;
	data = utils.process(data);
	fileHandler.writeFile(data).then(response => {
		res.send(response);
	})
	.catch(err => {
		res.status('500').send(err);
	});
});

app.get('/file', (req, res) => {
  fileHandler.readFile('response.json').then(response => {
    fileHandler.writeFile(response).then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status('500').send(err);
    });
  })
  .catch(err => {
    res.status('500').send(err);
  });
});

app.get('/output', (req, res) => {
  fileHandler.readFile('output.json').then(response => {
     res.send(response);
  })
  .catch(err => {
    res.status('500').send(err);
  });
});