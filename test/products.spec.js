var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
var fileHandler  = require('../services/fileService');
var server = require('../server');

chai.use(chaiHttp);

describe('File handling methods', () => {
  it('readFile()', () => {
    var result = fileHandler.readFile('response.json');
    result.then(response => {
      expect(response.ProductCollection[0].Quantity).to.be.equal(10);
      expect(response.ProductCollection[1].Quantity).to.be.equal(20);
      expect(response.ProductCollection[2].Quantity).to.be.equal(10);
    }).catch(err => {
      console.log("error from: readFile() \n");
      console.log(err);
    });
  });
});

describe('/api/products/output', () => {
  it('should return output file contents', () => {
		chai.request("http://localhost")
			.get('/api/products/output')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.hasOwnProperty("ProductCollection").to.be.equal(true);
				done();
		});
  });
});


