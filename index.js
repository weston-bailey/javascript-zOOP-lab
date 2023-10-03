class Animal {

    constructor(name, species, age, gender) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.gender = gender;
    }

    describe() {
        console.log(`This animal is a ${this.gender} ${this.age} year old ${this.species} named ${this.name}`)
    }

    feed() {
        console.log(`${this.name} is eating.`)
    }

    makeSound() {
        console.log(`${this.name} is making a sound.`)
    }

    move() {
        console.log(`${this.name} is moving.`)
    }
}

class Mammal extends Animal {
    constructor(name, species, age, gender, furColor) {
        super(name, species, age, gender);
        this.furColor = furColor;
    }

    feed() {
        console.log(`${this.name} is drinking milk.`)
    }

    makeSound() {
        console.log(`${this.name} is growling.`)
    }

    move() {
        console.log(`${this.name} is walking.`)
    }
}

class Bird extends Animal {
    constructor(name, species, age, gender, wingSpan) {
        super(name, species, age, gender);
        this.wingSpan = wingSpan;
    }

    feed() {
        console.log(`${this.name} is drinking nectar.`)
    }

    makeSound() {
        console.log(`${this.name} is chirping.`)
    }

    move() {
        console.log(`${this.name} is flying.`)
    }
}

class Reptile extends Animal {
    constructor(name, species, age, gender, scaleColor) {
        super(name, species, age, gender);
        this.scaleColor = scaleColor;
    }

    feed() {
        console.log(`${this.name} is eating insects.`)
    }

    makeSound() {
        console.log(`${this.name} is hissing.`)
    }

    move() {
        console.log(`${this.name} is slithering.`)
    }
}

class Invertebrates extends Animal {
    constructor(name, species, age, gender, legs) {
        super(name, species, age, gender);
        this.legs = legs;
    }

    feed() {
        console.log(`${this.name} is eating flies.`)
    }

    makeSound() {
        console.log(`${this.name} is silent.`)
    }

    move() {
        console.log(`${this.name} is crawling.`)
    }
}

class Zoo {
    constructor() {
        // Create an array to store the instances of animals (mammal, reptile, etc)
        this.animals = [];
    }
    addAnimal(animal) {
        // add the animal to the array
        this.animals.push(animal);
    }
    displayAnimals() {
        console.log(this.animals);
    }
    feedAnimals() {
        for (const animalFeed of this.animals) {
            animalFeed.feed();
        }
    }
    listenToAnimals() {
        for (const animalSound of this.animals) {
            animalSound.makeSound();
        }
    }
    watchAnimals() {
        for (const animalWatch of this.animals) {
            animalWatch.move();
        }
    }
}
//const zoo = new Zoo();


const myAnimal = new Mammal('John','lion','2','male', 'brown');

const yourAnimal = new Mammal('Paul', 'Tiger', '5', 'female', 'orange');

const reptilianAnimal = new Reptile('George', 'Crocodile', '12', 'male', 'dark green');

const birdAnimal = new Bird('Ringo', 'Robin', '1', 'male', '25 cm');

const invertebrateAnimal = new Invertebrates('Peter', 'Spider', '0.1', 'male', '8');

const sandiego = new Zoo();

sandiego.addAnimal(invertebrateAnimal);
sandiego.addAnimal(myAnimal);
sandiego.addAnimal(yourAnimal);
sandiego.addAnimal(reptilianAnimal);
sandiego.addAnimal(birdAnimal);

sandiego.displayAnimals();
sandiego.feedAnimals();
sandiego.listenToAnimals();
sandiego.watchAnimals();