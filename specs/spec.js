describe('validTriangle', function() {
  it('is a triangle if the sum of two sides are greater than or equal to a third', function() {
    isValid(5,4,2).should.equal(true);
  });

  it('is not a triangle if the sum of two sides are less than the third', function () {
    isValid(2,2,5).should.equal(false);
  });
});

describe('isEquilateral', function() {
  it('finds that it is an equilateral triangle because all sides are equal', function() {
    isEquilateral(5,5,5).should.equal(true);
  });

  it('finds that it is not an equilateral triangle because all sides are not equal', function() {
    isEquilateral(5,6,5).should.equal(false);
  });
});

describe('isIsosceles', function() {
  it('finds that it is an isosceles triangle because just two sides are equal', function() {
    isIsosceles(3,3,5).should.equal(true);
  });

  it('finds that it is not isosceles because no two sides are equal', function () {
    isIsosceles(2,8,7).should.equal(false);
  });
});

describe('isScalene', function() { 
  it('finds that it is a scalene triangle because no sides are equal', function() {
    isScalene(3,4,5).should.equal(true);
  });

  it('finds that it is not a scalene triangle because two or more sides are equal', function() {
    isScalene(3,3,5).should.equal(false);
  });
});

describe('triangleType', function() {
  it('tells that it is an equilateral triangle if the sides are equal', function() {
    triangleType(5,5,5).should.equal("equilateral");
  });

  it('tells that it is an isosceles triangle if two sides are equal', function() {
    triangleType(3,3,5).should.equal("isosceles");
  });

  it('tells that it is a scalene triangle if no sides are equal', function() {
    triangleType(4,5,6).should.equal("scalene");
  });
});