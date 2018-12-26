var expect = require('chai').expect;
var jsonResponseHandler  = require('../services/jsonResponseHandlerService');

describe('Json processing methods', () => {
  it('readResponse()', () => {
    var result = jsonResponseHandler.readResponse('response.json');
    result.then(response => {
      response = JSON.parse(response);
      expect(response[0].quantity).to.be.equal(261);
      expect(response[1].quantity).to.be.equal(292);
      expect(response[2].quantity).to.be.equal(211);
    }).catch(err => {
      console.log("error from: readResponse() \n");
      console.log(err);
    });
  });
});