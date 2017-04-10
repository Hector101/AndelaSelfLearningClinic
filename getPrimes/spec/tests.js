
describe("Determine if a valule", function() {
  describe("is a positive integer", function(){
    it('should return [] for 0', function () {
      expect(getPrimes(0)).toEqual([]);
    });

    it('should return [2, 3, 5, 7] for 10', function () {
      expect(getPrimes(10)).toEqual([2, 3, 5, 7]);
    });

    it('should return [2, 3, 5, 7, 11, 13, 17, 19] for 20', function () {
      expect(getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });

  describe('Check for negative and invalid arguments', function () {

    it('should return [] for -1', function () {
      expect(getPrimes(-1)).toEqual("invalid argument");
    });

    it('should return `invalid argument` for `b`', function () {
      expect(getPrimes('b')).toEqual('invalid argument');
    });
  });
});