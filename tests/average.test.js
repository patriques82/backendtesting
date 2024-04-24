import { average } from "../utils/for_testing";

test("single number should be same", () => {
  const result = average([5]);

  expect(result).toBe(5);
});

test("[1,2,3,4,5,6] should be 3.5", () => {
  const result = average([1, 2, 3, 4, 5, 6]);

  expect(result).toBe(3.5);
});

test("should be zero when empty", () => {
  const result = average([]);

  expect(result).toBe(0);
});
