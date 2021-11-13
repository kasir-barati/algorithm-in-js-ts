/**
 * Linear search or Sequential search
 * Formula: start from left and go to right or vice versa
 * if you found it return it, else throw an error
 * Worst-case performance: O(n)
 * Best-case performance: Ω(1)
 */
import * as ErrorCodes from '../error-codes.json';

export function linearSearch(
    numbers: number[],
    searchNumber: number,
): boolean {
    if (typeof searchNumber !== 'number') {
        throw new Error(
            ErrorCodes.passed_parameter_should_be_number.message,
        );
    }

    for (let tempNumber of numbers) {
        if (typeof tempNumber !== 'number') {
            throw new Error(
                ErrorCodes.passed_parameter_should_be_number.message,
            );
        }
        if (searchNumber === tempNumber) {
            return true;
        }
    }
    return false;
}
