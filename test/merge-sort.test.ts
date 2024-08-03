import { toBeArray } from './to-be-array';
import { mergeSort } from '../src/divide-and-conquer/merge-sort';

const arrayOfNumbers1 = [4, 6, 9, 7, 2, 3, 0, 8];
const arrayOfNumbers2 = [123, 1, 0, 45, 65, -98, 78, -122];
const arrayOfNumbersWithOddLength = [1, 0, 45, -56, 4];

expect.extend({ toBeArray });

test('sort-array-of-numbers-1', () => {
  expect(mergeSort(arrayOfNumbers1)).toBeArray([
    0, 2, 3, 4, 6, 7, 8, 9,
  ]);
});

test('sort-array-of-numbers-2', () => {
  expect(mergeSort(arrayOfNumbers2)).toBeArray([
    -122, -98, 0, 1, 45, 65, 78, 123,
  ]);
});

test('sort-array-of-numbers-with-odd-length', () => {
  expect(mergeSort(arrayOfNumbersWithOddLength)).toBeArray([
    -56, 0, 1, 4, 45,
  ]);
});
