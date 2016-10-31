// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

// Assuming that all triangles will be right-angle triangles
function RightTriangle(side1, side2, base) {
  this.side1 = side1;
  this.side2 = side2;
  this.base = base;

// grrr... MATH is hard
  this.area = function () {
    var height = (this.side1 <= this.side2) ? this.side1 : this.side2;
    return .5 * height * base;
  };

  this.perimeter = function () {
    return this.side1 + this.side2 + this.base;
  }
}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
var triangle1 = new RightTriangle(3, 3, 4.24);
var triangle2 = new RightTriangle(5.2, 3, 6);

console.log(triangle1.area(), triangle1.perimeter());
console.log(triangle2.area(), triangle2.perimeter());
