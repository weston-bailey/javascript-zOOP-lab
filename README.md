# JavaScript ZOOP Lab

In this lab, you will be building a simulation of a virtual zoo using object-oriented programming (OOP) principles in JavaScript. The goal of this lab is to practice defining base and derived classes, using constructors, and method overriding.

## Getting Started

* Fork and clone this repo, cd into the new folder.
* Use `index.js` to complete the assignment.
* After working on your code use `node index.js` to test it!

## Instructions

### Base `Animal` Class

Create a base `Animal` class that has the following properties:

* name
* species
* age
* gender

Add the following methods:

* `describe` -- prints out all information about the animal
* `feed` -- prints out `"<animalName> is eating"`
* `makeSound` -- prints out `"<animalName> is making a sound"`
* `move` -- prints out `"<animalName> is moving"`

### Extending the Base `Animal` Class

Create the following child class that derives from the base `Animal` class, adding properties and
using method override when needed:

* `Mammal` -- has a `furColor` property that is printed out in its description
  * drinks milk when feeding
  * walks when moving
  * growls when making a sound

Create a `Zoo` class with an `animals` property that is a list of all of the animals in the zoo. 

### Creating a `Zoo` Class

The `Zoo` class should keep track of all the of the animals in the zoo using an array.

The `Zoo` class should have the following methods:

* `addAnimal` -- adds an animal to the array of animals 
* `displayAnimals` -- displays information for all animals
* `feedAnimals` -- feeds all animals
* `listenToAnimals` -- listens to all the animals
* `watchAnimals` -- watches the animals move around

### Bonus

Create additional child classes to populate your zoo!

* `Bird` -- has a `wingspan` property that is printed out in its description
  * drinks nectar when feeding
  * flies when moving
  * chirps when making a sound
* `Reptile` -- has a `scaleColor` property that is printed out in its description
  * eats insects when feeding
  * slithers when moving
  * hisses when making a sound

### Example Code

Example code:

```javascript
const zoo = new Zoo();

const lion = new Mammal("Simba", "Lion", 5, "male", "golden");
const snake = new Reptile("Kaa", "Snake", 4, "female", "green"); // example bonus reptile

lion.makeSound();
// > Simba is making a sound
// > Simba is growling

zoo.addAnimal(lion);
zoo.addAnimal(snake);
zoo.feedAnimals();
// > Simba is eating
// > Simba is drinking milk
// > Kaa is eating
// > Kaa is eating insects
```

Write similar code chunks to test your zoo's methods and the various
animals you create.

## Further Reading

This lab asks you to implement what is referred to as the [Composite](https://en.wikipedia.org/wiki/Composite_pattern), which is a object oriented [Design Pattern](https://en.wikipedia.org/wiki/Software_design_pattern) made famous by the [Gang of Four Design Patterns Book](https://en.wikipedia.org/wiki/Design_Patterns), a seminal software engineering text on OOP. More info about the Strategy Pattern can be found [here](https://www.geeksforgeeks.org/strategy-pattern-set-1/#).

MDN contains a [wonderfully complete tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_Classes) on JS Classes containing even more than we have covered together.