//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log('Sound');
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
const cat = new Cat("Domestic Cat");
const dog = new Dog("German Shepherd");

// Access the species using the getter
console.log(`Cat species: ${cat.species}`);
console.log(`Dog species: ${dog.species}`);

// Make sounds
cat.purr(); // Outputs: purr
dog.bark(); // Outputs: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
