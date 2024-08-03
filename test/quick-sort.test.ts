import {
  quickSortMethod1,
  quickSortMethod2,
} from '../src/divide-and-conquer/quick-sort';
import { toBeArray } from './to-be-array';

const sortedArrayOfNumbers = [0, 1, 2, 3, 4, 5, 6];
const arrayOfNumbers1 = [4, 6, 9, 7, 2, 3, 0];
const arrayOfNumbers2 = [123, 1, 0, 45, 65, -98, 78, -122];

expect.extend({ toBeArray });

// FIXME: failed
describe('quick sort - method #1', () => {
  test('sort-array-of-numbers-1', () => {
    const result = quickSortMethod1(arrayOfNumbers1);
    console.log(result);
    expect(result).toBeArray([0, 2, 3, 4, 6, 7, 9]);
  });

  test('sort-array-of-numbers-2', () => {
    const result = quickSortMethod1(arrayOfNumbers2);
    console.log(result);
    expect(result).toBeArray([-122, -98, 0, 1, 45, 65, 78, 123]);
  });

  test('sorted-array-of-numbers', () => {
    const result = quickSortMethod1(sortedArrayOfNumbers);
    console.log(result);
    expect(result).toBeArray([0, 1, 2, 3, 4, 5, 6]);
  });
});

describe('quick sort - method #2', () => {
  test('sort-array-of-numbers-1', () => {
    const result = quickSortMethod2(arrayOfNumbers1);
    expect(result).toBeArray([0, 2, 3, 4, 6, 7, 9]);
  });

  test('sort-array-of-numbers-2', () => {
    const result = quickSortMethod2(arrayOfNumbers2);
    expect(result).toBeArray([-122, -98, 0, 1, 45, 65, 78, 123]);
  });

  test('sorted-array-of-numbers', () => {
    const result = quickSortMethod2(sortedArrayOfNumbers);
    expect(result).toBeArray([0, 1, 2, 3, 4, 5, 6]);
  });
});
