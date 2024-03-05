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

    expect(calculateNumberStub.calledOnce).to.equal(true);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.equal(true);

    expect(consoleLogSpy.calledOnce).to.equal(true);
    expect(consoleLogSpy.calledWith('The total is: 10')).to.equal(true);
  });

});
