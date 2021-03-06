import { List } from "../src/utils.ts";
import { countA, countL } from "../src/ch4/count.ts";
import { assertStrictEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("countA function", () => {
  const arrs: readonly number[][] = [[], [1], [1, 2], [1, 2, 3, 4, 5, 6]];
  const results = [0, 1, 2, 6];

  const counts = arrs.map((arr) => countA(arr));

  counts.forEach((c, i) => assertStrictEquals(c(), results[i]));
});

Deno.test("countL function", () => {
  const xs = List.toList([]);
  const ys = List.toList([1]);
  const ws = List.toList([1, 2]);
  const zs = List.toList([1, 2, 3, 4, 5, 6]);

  assertStrictEquals(countL(xs)(), 0);
  assertStrictEquals(countL(ys)(), 1);
  assertStrictEquals(countL(ws)(), 2);
  assertStrictEquals(countL(zs)(), 6);
});
