import * as ErrorCodes from '../src/error-codes.json';
import { selectionSort } from '../src/brute-force/selection-sort';

const arrayOfNumbers1 = [4, 6, 9, 7, 2, 3, 0];
const arrayOfNumbers2 = [123, 1, 0, 45, 65, -98, 78, -122];

expect.extend({
    toBeArray(receivedArray: number[], expectedArray: number[]) {
        if (receivedArray.length !== expectedArray.length) {
            throw new Error(ErrorCodes.wrong_length.message);
        }

        for (let tempNumber of expectedArray) {
            if (typeof tempNumber !== 'number') {
                throw new Error(
                    ErrorCodes.passed_parameter_should_be_number.message,
                );
            }
        }

        for (let tempNumber of receivedArray) {
            if (typeof tempNumber !== 'number') {
                throw new Error(
                    ErrorCodes.passed_parameter_should_be_number.message,
                );
            }
        }

        for (let i = 0; i < expectedArray.length; i++) {
            if (receivedArray[i] !== expectedArray[i]) {
                return {
                    pass: false,
                    message: () =>
                        `Received array (${receivedArray}) is expected array (${expectedArray})`,
                };
            }
        }

        return {
            pass: true,
            message: () =>
                `Received array is equal to expected array.`,
        };
    },
});

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
