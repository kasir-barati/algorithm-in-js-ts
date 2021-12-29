/**
 * Formula:
 * In this algorithm we assume we have a pivot, And all the elements in the right side are bigger than
 * the pivot and all the elements in the left side are less than our pivot.
 * At the beginning we get the last element as the pivot
 * Worse-case performance: O(n^2)
 * Best-case performance: Ω(n log n)
 * Average-case performance: Ө(?)
 */

// FIXME: failed
export function quickSortMethod1(unsortedArray: number[]): number[] {
    const array = [...unsortedArray];
    const pivot = array[array.length - 1];
    let i = -1;

    for (let j = 0; j <= array.length - 2; j++) {
        if (array[j] > pivot) {
            continue;
        } else if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    i++;
    for (let j = array.length - 1; j > i; j--) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }

    // numbers lower than pivot
    const leftSide =
        i === 1 ? array.slice(0, i) : array.slice(0, i - 1);
    // numbers bigger than pivot
    const rightSide = array.slice(i + 1);

    return [
        ...(leftSide.length > 1 ? quickSortMethod1(leftSide) : []),
        array[i],
        ...(rightSide.length > 1 ? quickSortMethod1(rightSide) : []),
    ];
}

export function quickSortMethod2(unsortedArray: number[]): number[] {
    const array = [...unsortedArray];
    const pivotIndex = Math.round(array.length / 2);
    const pivot = array[pivotIndex];
    // numbers bigger than pivot
    const rightSide: number[] = [];
    // numbers lower than pivot
    const leftSide: number[] = [];

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];

        if (pivot === currentValue) {
            continue;
        } else if (pivot > currentValue) {
            leftSide.push(currentValue);
        } else if (pivot < currentValue) {
            rightSide.push(currentValue);
        }
    }

    return [
        ...(leftSide.length > 1
            ? quickSortMethod2(leftSide)
            : leftSide),
        pivot,
        ...(rightSide.length > 1
            ? quickSortMethod2(rightSide)
            : rightSide),
    ];
}
