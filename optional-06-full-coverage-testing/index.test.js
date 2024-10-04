import { describe, it } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("Sum", () => {
  // Mengetest fungsi agar berjalan dengan baik
  it("Fungsi berjalan dengan baik", () => {
    // Arrange
    const numA = 1;
    const numB = 1;

    // Action
    const actualValue = sum(numA, numB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });
  //Mengetest masukan pada parameter bukan berupa angka (number/int)
  it("Menampilkan error jika input parameter bukan number", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const numA = "8";
      const numB = "8";

      // Action
      sum(numA, numB);
    };

    // Assert
    assert(potentialErrorToBeThrew, Error);
  });
  //Mengetest masukan pada parameter bernilai negatif
  it("Menampilkan error jika input parameter bernilai negatif", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const numA = -3;
      const numB = -4;

      // Action
      sum(numA, numB);
    };

    // Assert
    assert(potentialErrorToBeThrew, Error);
  });
});
