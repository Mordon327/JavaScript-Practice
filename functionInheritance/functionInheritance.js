//The base to inherit from
function Animal() {
  this.sound = "What does the fox say?";
  this.legs = 4;
  this.mammel = true;
  this.name = "Critter";
  this.native = true;
  this.printAttributes = function() {
    console.log("Animal name: " + this.name);
    console.log("Animal sound: " + this.sound);
    console.log("Number of legs: " + this.legs);
    console.log("Is it a mammel: " + this.mammel);
    console.log("Is it native: " + this.native);
  }
}

//the sub base that inherits
function Horse() {
  this.sound = "Nyeh";
  this.name = "Horse";
}

//the sub base that inherits
function Bird() {
  this.sound = "Chirp";
  this.name = "Birdy";
  this.legs = 2;
  this.mammel = false;
}

function Cat() {
  this.sound = "Meow";
  this.name = "Cat";
}

// using prototype to inherit
Horse.prototype = new Animal();

// inherit class creates itself a new function
Horse.prototype.saySound = function() {
  console.log(this.sound);
}

Bird.prototype = new Animal();

// using prototype to inherit
Cat.prototype = new Animal();

var pony = new Horse();
var critter = new Animal();
var cat = new Cat();
var birdy = new Bird();
console.log("This is the original base class called 'Animal'.");
critter.printAttributes();
console.log(" ");
// pony.saySound();
console.log("These are the subclasses that use prototype to inherit from the Animal class:");
pony.printAttributes();
console.log(" ");
birdy.printAttributes();
console.log(" ");
cat.printAttributes();