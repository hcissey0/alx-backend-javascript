const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);

    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);

    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
  });

});
