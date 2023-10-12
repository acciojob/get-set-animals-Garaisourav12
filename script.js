//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Create instances of the Cat and Dog classes
const cat = new Cat("Siamese");
const dog = new Dog("Golden Retriever");

// Make sounds
cat.purr(); // Outputs: purr
cat.makeSound();
dog.bark(); // Outputs: woof
dog.makeSound();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
