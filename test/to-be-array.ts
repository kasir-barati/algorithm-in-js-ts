import * as ErrorCodes from '../src/error-codes.json';

export function toBeArray(
  receivedArray: number[],
  expectedArray: number[],
) {
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
    message: () => `Received array is equal to expected array.`,
  };
}
