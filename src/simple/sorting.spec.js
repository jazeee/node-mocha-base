const { expect } = require('chai');
/* eslint-disable no-undef */

const testCases = [
  {
    input: [],
    expected: [],
  },
  {
    input: [''],
    expected: [''],
  },
  {
    input: [-1],
    expected: [-1],
  },
  {
    input: ['abc'],
    expected: ['abc'],
  },
  {
    input: ['abc', 'def', 'ABC'],
    expected: ['ABC', 'abc', 'def'],
  },
  {
    input: [1, 2, 3, 0],
    expected: [0, 1, 2, 3],
  },
  {
    input: [1, 2, 3, 1, 2, 3],
    expected: [1, 1, 2, 2, 3, 3],
  },
  {
    input: [3, 3, 2, 2, 1, 1],
    expected: [1, 1, 2, 2, 3, 3],
  },
  {
    input: [3, 3, 2, 2, 1],
    expected: [1, 2, 2, 3, 3],
  },
];

const mergeSort = (input) => {
  const { length } = input;
  if (length <= 1) {
    return input;
  }
  if (input.length === 2) {
    const [a, b] = input;
    return a <= b ? [a, b] : [b, a];
  }
  // divide
  const left = input.splice(0, Math.floor(length / 2));
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(input);
  // reassemble
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    const leftValue = sortedLeft[leftIndex];
    const rightValue = sortedRight[rightIndex];
    if (leftValue <= rightValue) {
      result.push(leftValue);
      leftIndex += 1;
    } else {
      result.push(rightValue);
      rightIndex += 1;
    }
  }
  result.push(...sortedLeft.slice(leftIndex));
  result.push(...sortedRight.slice(rightIndex));
  return result;
};

describe('merge sort', () => {
  testCases.forEach((testCase) => {
    const { input, expected } = testCase;
    const sorted = mergeSort([...input]);
    it(`${sorted} should equal ${expected}`, () => {
      expect(sorted).to.deep.equal(expected);
    });
  });
});

/* eslint-disable no-param-reassign */
const partition = (input, low, high) => {
  const pivot = input[high];
  let i = low - 1;
  let j = low;
  for (; j < high; j += 1) {
    if (input[j] < pivot) {
      i += 1;
      const temp = input[i];
      input[i] = input[j];
      input[j] = temp;
    }
  }
  input[high] = input[i + 1];
  input[i + 1] = pivot;
  return i + 1;
};

const quickSort = (input, low, high) => {
  if (low < high) {
    partitionIndex = partition(input, low, high);
    quickSort(input, low, partitionIndex - 1);
    quickSort(input, partitionIndex + 1, high);
  }
  return input;
};

describe('quick sort', () => {
  testCases.forEach((testCase) => {
    const { input, expected } = testCase;
    const array = [...input];
    quickSort(array, 0, array.length - 1);
    it(`${array} should equal ${expected}`, () => {
      expect(array).to.deep.equal(expected);
    });
  });
});
