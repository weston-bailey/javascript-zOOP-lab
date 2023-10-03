class Animal {
    constructor(name, species, age, gender) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.gender = gender;
    }

    describe() {
        console.log(`Name: ${this.name}, Species: ${this.species}, Age: ${this.age}, Gender: ${this.gender}`);
    }

    feed() {
        console.log(`${this.name} is eating`);
    }

    makeSound() {
        console.log(`${this.name} is making a sound`);
    }

    move() {
        console.log(`${this.name} is moving`);
    }
}

class Mammal extends Animal {
    constructor(name, species, age, gender, furColor) {
        super(name, species, age, gender);
        this.furColor = furColor;
    }

    describe() {
        super.describe();
        console.log(`Fur Color: ${this.furColor}`);
    }

    feed() {
        super.feed();
        console.log(`${this.name} is drinking milk`);
    }

    makeSound() {
        super.makeSound();
        console.log(`${this.name} is growling`);
    }

    move() {
        console.log(`${this.name} is walking`);
    }
}

class Zoo {
    constructor() {
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    displayAnimals() {
        this.animals.forEach(animal => animal.describe());
    }

    feedAnimals() {
        this.animals.forEach(animal => animal.feed());
    }

    listenToAnimals() {
        this.animals.forEach(animal => animal.makeSound());
    }

    watchAnimals() {
        this.animals.forEach(animal => animal.move());
    }
}

// Bonus: Additional child classes
class Bird extends Animal {
    constructor(name, species, age, gender, wingspan) {
        super(name, species, age, gender);
        this.wingspan = wingspan;
    }

    describe() {
        super.describe();
        console.log(`Wingspan: ${this.wingspan}`);
    }

    feed() {
        super.feed();
        console.log(`${this.name} is drinking nectar`);
    }

    makeSound() {
        super.makeSound();
        console.log(`${this.name} is chirping`);
    }

    move() {
        console.log(`${this.name} is flying`);
    }
}

class Reptile extends Animal {
    constructor(name, species, age, gender, scaleColor) {
        super(name, species, age, gender);
        this.scaleColor = scaleColor;
    }

    describe() {
        super.describe();
        console.log(`Scale Color: ${this.scaleColor}`);
    }

    feed() {
        super.feed();
        console.log(`${this.name} is eating insects`);
    }

    makeSound() {
        super.makeSound();
        console.log(`${this.name} is hissing`);
    }

    move() {
        console.log(`${this.name} is slithering`);
    }
}

// Example Usage
const zoo = new Zoo();
const lion = new Mammal("Simba", "Lion", 5, "Male", "Golden");
const parrot = new Bird("Polly", "Parrot", 3, "Female", "25cm"); // Bonus bird
const snake = new Reptile("Kaa", "Snake", 4, "Female", "Green"); // Bonus reptile

zoo.addAnimal(lion);
zoo.addAnimal(parrot); // Bonus
zoo.addAnimal(snake); // Bonus

zoo.feedAnimals();
zoo.listenToAnimals();
zoo.watchAnimals();
