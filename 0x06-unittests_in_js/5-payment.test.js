const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment')


describe('sendPaymentRequestToAPI', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should test with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');

    sinon.assert.calledOnce(consoleLogSpy);
  });

  it('should log "The total is: 20" for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');

    sinon.assert.calledOnce(consoleLogSpy);
  });
});
