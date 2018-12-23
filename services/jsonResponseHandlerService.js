const fs = require('fs');
var path = require('path');

const jsonResponseHandler = {
  
  readResponse: function(file) {
    return new Promise((resolve, reject) => {
      var jsonPath = path.join(__dirname, '..', 'data_files', file);
      fs.readFile(jsonPath, function(err, contents) {
        if (err) {
          reject(err);
        }
        resolve(contents);
      });
    });
  }
  
}

module.exports = jsonResponseHandler;