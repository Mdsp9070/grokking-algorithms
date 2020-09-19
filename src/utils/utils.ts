// sort number arrays
export const sort = (x: ReadonlyArray<number>): ReadonlyArray<number> =>
  [...x].sort((a, b) => a - b);

export const avg = (a: number, b: number): number => (a + b) / 2;

export const head = (arr: ReadonlyArray<number>): number => arr[0];
