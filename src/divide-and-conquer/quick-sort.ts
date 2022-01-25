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
    const pivotIndex = Math.round(array.length / 2);
    const pivot = array[pivotIndex];
    [array[array.length - 1], array[pivotIndex]] = [
        array[pivotIndex],
        array[array.length - 1],
    ];
    let i = -1;

    for (let j = 0; j <= array.length; j++) {
        const temp = array[j];
        if (temp > pivot) {
            continue;
        } else if (temp < pivot) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
        }
    }
    [array[i], array[array.length - 1]] = [
        array[array.length - 1],
        array[i],
    ];

    // numbers lower than pivot
    const leftSide = i > 1 ? array.slice(0, i) : [];
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

export function quickSortMethod3(unsortedArray: number[]): number[] {
    const array = [...unsortedArray];
    const pivotIndex = Math.round(array.length / 2);
    const pivot = array[pivotIndex];
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex !== rightIndex) {
        while (array[leftIndex] < pivot && leftIndex !== pivotIndex) {
            leftIndex++;
        }
        while (
            array[rightIndex] > pivot &&
            rightIndex !== pivotIndex
        ) {
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            [array[leftIndex], array[rightIndex]] = [
                array[rightIndex],
                array[leftIndex],
            ];
        } else if (array[leftIndex] > pivot) {
            // move element after pivot
        } else if (array[rightIndex] < pivot) {
            // move element before pivot
        }
    }
}
