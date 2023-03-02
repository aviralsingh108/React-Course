import { sum } from "../sum";
test("Testing sum of 2 positive numbers", () => {
  expect(sum(2, 5)).toBe(7);
});
