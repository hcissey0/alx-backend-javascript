const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', () => {
  it('should resolve the promise', () => {
    getPaymentTokenFromAPI(true)
    .then((res) => {
        assert.equal(res.data, 'Successful response from the API');
        done();
    })
    .catch((error) => done(error));
  });
});
