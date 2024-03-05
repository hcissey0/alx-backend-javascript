const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.equal(true);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.equal(true);

    calculateNumberSpy.restore();
  });
});
