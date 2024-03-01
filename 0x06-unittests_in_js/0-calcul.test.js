const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
const { should } = require('chai');

describe('calculateNumber', () => {
  it('should round a', () => {
    assert.equal(calculateNumber(2.2, 1), 3);
    assert.equal(calculateNumber(2.5, 1), 4);
    assert.equal(calculateNumber(2.7, 1), 4);
  });

  it('should round b', () => {
    assert.equal(calculateNumber(1, 2.2), 3);
    assert.equal(calculateNumber(1, 2.5), 4);
    assert.equal(calculateNumber(1, 2.7), 4);
  });

  it('should round a and b', () => {
    assert.equal(calculateNumber(2.2, 2.2), 4);
    assert.equal(calculateNumber(2.5, 2.5), 6);
    assert.equal(calculateNumber(2.7, 2.7), 6);
  });
  it('should round numbers and return their sum', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});

