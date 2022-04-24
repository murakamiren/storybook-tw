import sum from "../utils/sum"

const testSum = sum

test("1 + 4 should be = 5", () => {
  expect(testSum(1, 4)).toBe(5)
})
