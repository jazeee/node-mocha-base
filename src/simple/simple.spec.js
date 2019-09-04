const { expect } = require('chai');
/* eslint-disable no-undef */

const testCases = [
  {
    input: '',
    expected: '',
  },
];

describe('simple test', () => {
  testCases.forEach((testCase) => {
    const { input, expected } = testCase;
    it(`${input} should equal ${expected}`, () => {
      expect(input).to.equal(expected);
    });
  });
});
