const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const calculateNumberSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.equal(true);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.equal(true);
    expect(calculateNumberSpy.calledOnce).to.equal(true);
    expect(calculateNumberSpy.calledWith('The total is: 10')).to.equal(true);
  });
});
