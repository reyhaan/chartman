var expect = require('chai').expect;
var jsonResponseHandler  = require('../services/jsonResponseHandlerService');

describe('Json processing methods', () => {
  it('jsonResponseHandler()', () => {
    var result = jsonResponseHandler();
    expect(result).to.be.equal(1);
  });
});