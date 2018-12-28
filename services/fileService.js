const fs = require('fs');
var path = require('path');

const fileHandler = {
  
  readResponse: function(file) {
    return new Promise((resolve, reject) => {
      var jsonPath = path.join(__dirname, '..', 'data_files', file);
      fs.readFile(jsonPath, function(err, contents) {
        if (err) reject(err);
        resolve(contents);
      });
    });
  },
  
  writeResponse: function(data) {
    return new Promise((resolve, reject) => {
      data = JSON.stringify(data);
      var jsonPath = path.join(__dirname, '..', 'data_files', 'output.json');
      fs.writeFile(jsonPath, data, (err) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
}

module.exports = fileHandler;