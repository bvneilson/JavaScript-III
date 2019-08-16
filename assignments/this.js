/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" refers to the global object (window/console)
* 2. "this" refers to whatever is calling from the left side of the dot
* 3. "this" refers to a specific instance of a created object
* 4. "this" is explicitly defined while using JavaScript's call or apply methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayFavoriteFood(food) {
  console.log(this)
  return food;
}
sayFavoriteFood('Hot Pockets');

// Principle 2

// code example for Implicit Binding
const bestSport = {
  name: 'basketball',
  isTheBest: true,
  everyoneAgrees: true,
  declareBestSport: function() {
    console.log(`The best sport in the world is ${this.name}!`);
    if (this.everyoneAgrees) {
      console.log(`Yes, and everyone agrees!`);
    }
  }
}
bestSport.declareBestSport();

// Principle 3

// code example for New Binding
function Sport(info) {
  this.name = info.name;
  this.isTheBest = info.isTheBest;
  this.brag = function() {
    if (this.isTheBest) {
      console.log(`${this.name} is the best! Yay!`);
    } else {
      console.log(`${this.name} is not the best! Sorry!`);
    }
  }
}
const basketball = new Sport({
  name: 'Basketball',
  isTheBest: true
});
const baseball = new Sport({
  name: 'Baseball',
  isTheBest: false
})
basketball.brag();
baseball.brag();

// Principle 4

// code example for Explicit Binding
basketball.brag.call(baseball);
baseball.brag.apply(basketball);
