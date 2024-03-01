const assert = require('assert');
const calculateNumber = require('./1-calcul.js');
const { should } = require('chai');

describe('calculateNumber rounding', () => {
  it('should round a', () => {
    assert.equal(calculateNumber('SUM', 2.2, 1), 3);
    assert.equal(calculateNumber('SUM', 2.5, 1), 4);
    assert.equal(calculateNumber('SUM', 2.7, 1), 4);
  });

  it('should round b', () => {
    assert.equal(calculateNumber('SUM', 1, 2.2), 3);
    assert.equal(calculateNumber('SUM', 1, 2.5), 4);
    assert.equal(calculateNumber('SUM', 1, 2.7), 4);
  });

  it('should round a and b', () => {
    assert.equal(calculateNumber('SUM', 2.2, 2.2), 4);
    assert.equal(calculateNumber('SUM', 2.5, 2.5), 6);
    assert.equal(calculateNumber('SUM', 2.7, 2.7), 6);
  });

  it('should round numbers and return their sum', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
});

describe('calculateNumber with SUM', () => {
    it('should sum the a and b with SUM', () => {
        assert.equal(calculateNumber('SUM', 2.4, 5.2), 7);
    });
});

describe('calculate with SUBTRACT', () => {
    it('should subtract b from a', () => {
        assert.equal(calculateNumber('SUBTRACT', 4.3, 2.1), 2);
    });
});

describe('calculate with DIVIDE', () => {
    it('should divide a by b', () => {
        assert.equal(calculateNumber('DIVIDE', 4.2, 2.3), 2);
    });
    it('should return Error', () => {
        assert.equal(calculateNumber('DIVIDE', 34.32, 0.3), 'Error');
    });
});

describe('calculate with INVALID', () => {
    it('should return undefined', () => {
        assert.equal(calculateNumber('INVALID', 2, 5), undefined);
    });
});
