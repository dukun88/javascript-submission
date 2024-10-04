import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("Fungsi Berjalan Dengan Baik", () => {
  //Arrange
  const numberA = 2;
  const numberB = 2;

  //Action
  const actualValue = sum(numberA, numberB);

  //Assert
  const expectValue = 4;
  assert.equal(actualValue, expectValue);
});
test("Terdapat Kesalahan ketika Menjalankan fungsi", () => {
  const potentialError = () => {
    // Arrange
    const numA = "8";
    const numB = 8;

    // Action
    sum(numA, numB);
  };

  // Assert
  assert(potentialError, Error);
});
