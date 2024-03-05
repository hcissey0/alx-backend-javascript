const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber rounding', () => {
  it('should round a', () => {
    expect(calculateNumber('SUM', 2.2, 1)).to.equal(3);
    expect(calculateNumber('SUM', 2.5, 1)).to.equal(4);
    expect(calculateNumber('SUM', 2.7, 1)).to.equal(4);
  });

  it('should round b', () => {
    expect(calculateNumber('SUM', 1, 2.2)).to.equal(3);
    expect(calculateNumber('SUM', 1, 2.5)).to.equal(4);
    expect(calculateNumber('SUM', 1, 2.7)).to.equal(4);
  });

  it('should round a and b', () => {
    expect(calculateNumber('SUM', 2.2, 2.2)).to.equal(4);
    expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
    expect(calculateNumber('SUM', 2.7, 2.7)).to.equal(6);
  });

  it('should round numbers and return their sum', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
});

describe('calculateNumber with SUM', () => {
    it('should sum the a and b with SUM', () => {
        expect(calculateNumber('SUM', 2.4, 5.2)).to.equal(7);
    });
});

describe('calculate with SUBTRACT', () => {
    it('should subtract b from a', () => {
        expect(calculateNumber('SUBTRACT', 4.3, 2.1)).to.equal(2);
    });
});

describe('calculate with DIVIDE', () => {
    it('should divide a by b', () => {
        expect(calculateNumber('DIVIDE', 4.2, 2.3)).to.equal(2);
    });
    it('should return Error', () => {
        expect(calculateNumber('DIVIDE', 34.32, 0.3)).to.equal('Error');
    });
});

describe('calculate with INVALID', () => {
    it('should return undefined', () => {
        expect(calculateNumber('INVALID', 2, 5)).to.be.undefined;
    });
});
