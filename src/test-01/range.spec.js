const { expect } = require('chai');
/* eslint-disable no-undef */

const testCases = [
  {
    input: [
      [2, 3],
      [3, 5],
    ],
    expected: false,
  },
  {
    input: [
      [2, 3],
      [4, 5],
    ],
    expected: true,
  },
  {
    input: [
      [2, 5],
      [4, 5],
    ],
    expected: false,
  },
  {
    input: [
      [3, 5],
      [4, 5],
    ],
    expected: false,
  },
  {
    input: [
      [5, 6],
      [4, 5],
    ],
    expected: false,
  },
  {
    input: [
      [6, 7],
      [4, 5],
    ],
    expected: true,
  },
];

function isNotOverlap(a, b) {
  if (a[0] <= b[0]) {
    return (a[1] < b[0] && a[0] < b[1]);
  }
  return (b[1] < a[0] && b[0] < a[1]);
}

describe('isNotOverlap', () => {
  testCases.forEach((testCase, index) => {
    it(`should find overlap for test case ${index}`, () => {
      const { input, expected } = testCase;
      expect(isNotOverlap(input[0], input[1])).to.equal(expected);
      expect(isNotOverlap(input[1], input[0])).to.equal(expected);
    });
  });
});
