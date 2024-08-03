/**
 * Formula:
 * f0 = 0
 * f1 = 1
 * f(n) = f(n-1) + f(n-2)
 * Cons:
 *   1. If we wanna resolve this problem with divide & conquer algorithm,
 *      we have to recalculate the same sub problems multiple times
 *      (Efficiency principle won't be satisfied)
 *   2. For bigger numbers we will fall into stack overflow problem.
 *      (This one will break the Generality principle)
 * Pros: It's solution is Easy to understand
 *
 * Worst-case performance: O(log n)
 * Best-case performance: Ω
 * Average-case performance: Ө
 */

import * as ErrorCodes from '../error-codes.json';

export function getTheFibonacciNumber(n: number): number {
  let result: number | null = null;

  if (typeof n !== 'number') {
    throw new Error(
      ErrorCodes.passed_parameter_should_be_number.message,
    );
  }

  switch (n) {
    case 0:
      result = 0;
      break;
    case 1:
      result = 1;
      break;
  }

  if (result !== null) {
    return result;
  }
  return getTheFibonacciNumber(n - 1) + getTheFibonacciNumber(n - 2);
}
