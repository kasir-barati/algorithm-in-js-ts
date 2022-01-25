import { toBeArray } from './to-be-array';
import { selectionSort } from '../src/brute-force/selection-sort';

const arrayOfNumbers1 = [4, 6, 9, 7, 2, 3, 0];
const arrayOfNumbers2 = [123, 1, 0, 45, 65, -98, 78, -122];

expect.extend({ toBeArray });

test('sort-array-of-numbers-1', () => {
    expect(selectionSort(arrayOfNumbers1)).toBeArray([
        0, 2, 3, 4, 6, 7, 9,
    ]);
});

test('sort-array-of-numbers-2', () => {
    expect(selectionSort(arrayOfNumbers2)).toBeArray([
        -122, -98, 0, 1, 45, 65, 78, 123,
    ]);
});
