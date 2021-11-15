/**
 * Worse-case performance:
 * Best-case performance:
 */

export function mergeSort(arrayOfNumbers: number[]): number[] {
    if (arrayOfNumbers.length === 1) {
        return arrayOfNumbers;
    } else {
        const sortedLeftHalfOfArray = mergeSort(
            arrayOfNumbers.slice(0, arrayOfNumbers.length / 2),
        );
        const sortedRightHalfOfArray = mergeSort(
            arrayOfNumbers.slice(
                arrayOfNumbers.length / 2,
                arrayOfNumbers.length,
            ),
        );
        let result: number[] = [];

        while (
            sortedLeftHalfOfArray.length !== 0 ||
            sortedRightHalfOfArray.length !== 0
        ) {
            if (sortedLeftHalfOfArray.length === 0) {
                result.push(sortedRightHalfOfArray.shift() as number);
            } else if (sortedRightHalfOfArray.length === 0) {
                result.push(sortedLeftHalfOfArray.shift() as number);
            } else if (
                sortedLeftHalfOfArray[0] < sortedRightHalfOfArray[0]
            ) {
                result.push(sortedLeftHalfOfArray.shift() as number);
            } else if (
                sortedLeftHalfOfArray[0] > sortedRightHalfOfArray[0]
            ) {
                result.push(sortedRightHalfOfArray.shift() as number);
            }
        }

        return result;
    }
}
