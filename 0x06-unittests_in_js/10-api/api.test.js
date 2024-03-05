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

describe('Test for the card id', () => {
  it('should return status code 200 when id is a number', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should reutnr status code 404 when id is not a number', (done) => {
    request('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return correct result', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
});

describe('Test suite for login', () => {
  it('should return welcome message for POST request', (done) => {
    const opitons = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Betty'
      }
    };
    request(opitons, (err, res, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Testing available payments', () => {
  it('should return payment methods', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
