import { linearSearch } from '../src/brute-force/linear-search';

const arrayOfNumbers = [1, 3, 90, 45, 74, 23, 15];

test('45-is-in-array', () => {
  expect(linearSearch(arrayOfNumbers, 45)).toBeTruthy();
});

test('666-is-not-in-array', () => {
  expect(linearSearch(arrayOfNumbers, 666)).toBeFalsy();
});
