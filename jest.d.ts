declare global {
    namespace jest {
        interface Matchers<R> {
            toBeArray(expectedArray: number[]): R;
        }
    }
}

export {};
