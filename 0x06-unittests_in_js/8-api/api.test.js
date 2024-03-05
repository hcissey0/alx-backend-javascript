const request = require('request');
const { expect } = require('chai');

describe('Index page tests', () => {
  it('should reutnr status code 200', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct results', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
