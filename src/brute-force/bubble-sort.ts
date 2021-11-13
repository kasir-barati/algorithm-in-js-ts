/**
 * Formula
 * Worse-case performance: O(n^2)
 *   (n - 1) * (n - 1)
 *   n^2 - 1n - 1n  + 1
 *   n^2 - 2n  + 1
 * Best-case performance: Ω(n)
 */
import * as ErrorCodes from '../error-codes.json';

export function bubbleSort(
    arrayOfNumbers: number[],
): number[] | never {
    const result = [...arrayOfNumbers];
    let wasThereAnySwap = false;

    for (let i = 1; i < result.length; i++) {
        for (let j = 0; j < result.length - i; j++) {
            if (
                typeof result[j] !== 'number' ||
                typeof result[j + 1] !== 'number'
            ) {
                throw new Error(
                    ErrorCodes.passed_parameter_should_be_number.message,
                );
            }

            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [
                    result[j + 1],
                    result[j],
                ];
                wasThereAnySwap = true;
            }
        }

        /**
         * to prevent running bubble sort on a sorted array we check if there was any swap we will continues the
         * comparison, unless we had no swap therefore we can say that array is already sorted and there is no more
         * need to continued the same process again and again.
         */
        if (!wasThereAnySwap) {
            return result;
        }
    }

    return result;
}
