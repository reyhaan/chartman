const utils = {
  
  process: function(data) {
    return JSON.parse(JSON.stringify(data).toUpperCase());
  }
	
}

module.exports = utils;