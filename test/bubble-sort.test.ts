import { toBeArray } from './to-be-array';
import { bubbleSort } from '../src/brute-force/bubble-sort';

const sortedArrayOfNumbers = [0, 1, 2, 3, 4, 5, 6];
const arrayOfNumbers1 = [4, 6, 9, 7, 2, 3, 0];
const arrayOfNumbers2 = [123, 1, 0, 45, 65, -98, 78, -122];

expect.extend({ toBeArray });

test('sort-array-of-numbers-1', () => {
  expect(bubbleSort(arrayOfNumbers1)).toBeArray([
    0, 2, 3, 4, 6, 7, 9,
  ]);
});

test('sort-array-of-numbers-2', () => {
  expect(bubbleSort(arrayOfNumbers2)).toBeArray([
    -122, -98, 0, 1, 45, 65, 78, 123,
  ]);
});

test('sorted-array-of-numbers', () => {
  expect(bubbleSort(sortedArrayOfNumbers)).toBeArray([
    0, 1, 2, 3, 4, 5, 6,
  ]);
});
