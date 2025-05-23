import { reverse } from "../utils/for_testing";

test("reverse of a", () => {
  const result = reverse("a");

  expect(result).toBe("a");
});

test("reverse of react", () => {
  const result = reverse("react");

  expect(result).toBe("tcaer");
});

test("reverse of releveler", () => {
  const result = reverse("Releveler");

  expect(result).toBe("releveleR");
});
