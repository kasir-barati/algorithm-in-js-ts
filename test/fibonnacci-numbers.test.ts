import { getTheFibonacciNumber } from '../src/divide-and-conquer/fibonacci-number';

test('fibonacci-6-is-8', () => {
    expect(getTheFibonacciNumber(6)).toBe(8);
});

test('fibonacci-17-is-1597', () => {
    expect(getTheFibonacciNumber(17)).toBe(1597);
});
