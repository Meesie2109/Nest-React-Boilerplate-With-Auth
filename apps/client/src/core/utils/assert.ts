export class AssertionError extends Error {
    constructor(message: string) {
      super(`AssertionError: ${message}`);
    }
  }
  
  export function isAssertionError(value: unknown): value is AssertionError {
    return value instanceof AssertionError;
  }
  
  export function assert<T>(value: T | null | undefined): asserts value is T {
    if (value == null || value === "")
      throw new AssertionError("Value is nullish.");
  }