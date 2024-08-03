/**
 * Formula:
 * Compare numbers in couple with each other from the index zero, whenever you reach the end of array
 * you found the smallest number, Then switch it with the index zero. Now we will start the same
 * process but this time start comparing from index 1 and the same story repeats & repeats until
 * we reach the latest index of array
 * Worst-case performance: O(n^2)
 *   n + (n -1) + (n - 2) + ... + 1
 *   n(n + 1)/2
 *   (n^2 + n)/2
 *   n^2/2 + n/2
 * Best-case performance: Ω(n^2)
 */

import * as ErrorCodes from '../error-codes.json';

export function selectionSort(
  arrayOfNumbers: number[],
): number[] | never {
  const result = [...arrayOfNumbers];
  let smallestNumberIndex: number;

  for (let i = 0; i < result.length; i++) {
    if (typeof result[i] !== 'number') {
      throw new Error(
        ErrorCodes.passed_parameter_should_be_number.message,
      );
    }
    smallestNumberIndex = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[smallestNumberIndex]) {
        smallestNumberIndex = j;
      }
    }

    [result[smallestNumberIndex], result[i]] = [
      result[i],
      result[smallestNumberIndex],
    ];
  }

  return result;
}
