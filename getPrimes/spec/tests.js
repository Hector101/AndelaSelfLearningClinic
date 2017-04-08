
  describe("Determine if a valule", function() {

    it("Is an integer value", function() {

      expect(getPrimes("hello")).toBe("Invalid input value");

    });
    it("should return `[ 1, 3, 5, 9, 15 ] if 45 is passed as a value", function() {

      expect(getPrimes(45)).toBe([ 1, 3, 5, 9, 15 ]);

    });
    it("should return `Negative value is invalid` for negative values", function() {

      expect(getPrimes(-2)).toBe("Negative value is invalid");

    });
    it("should return `[]` for when 0 is passed as a value", function() {

      expect(getPrimes(0)).toBe([ ]);

    });
    it("should return `[ 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45 ]` for a value of 90", function() {

      expect(getPrimes(90)).toBe([1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45]);

    });
  });