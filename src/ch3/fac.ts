// FACTORIAL

// given a number
// calculates the factorial
// with an accumulator
export function factorial(n: number, a = 1): number {
  n < 1 ? a : factorial(n - 1, n * a);
}
