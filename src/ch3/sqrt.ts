import { avg } from '../utils/utils';

export const sqrt = (n: number, a = n / 2, margin = 0.000001): number =>
  Math.abs(a - avg(a, n / a)) < margin ? avg(a, n / a) : sqrt(n, avg(a, n / a));