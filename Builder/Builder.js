//The Builder pattern is a design pattern that helps you create complex objects step by step. It allows you to construct an object by providing a clear and intuitive interface.

//Imagine you want to build a house. Instead of directly building the entire house, the Builder pattern suggests breaking down the construction process into smaller steps. You have a blueprint or plan (the builder) that guides you through each step, from laying the foundation to adding walls, windows, and doors.


// usage
//Imagine you have a restaurant application where you need to create different types of burgers with various toppings and condiments. Instead of creating each burger manually with all possible combinations of ingredients, you can use the Builder pattern to simplify the process.


class Burger {
  constructor() {
    this.size = null;
    this.cheese = false;
    this.tomato = false;
    this.lettuce = false;
    this.pickle = false;
  }

  setSize(size) {
    this.size = size;
  }

  addCheese() {
    this.cheese = true;
  }

  addTomato() {
    this.tomato = true;
  }

  addLettuce() {
    this.lettuce = true;
  }

  addPickle() {
    this.pickle = true;
  }

  // Other methods for preparing and serving the burger...
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  withSize(size) {
    this.burger.setSize(size);
    return this;
  }

  withCheese() {
    this.burger.addCheese();
    return this;
  }

  withTomato() {
    this.burger.addTomato();
    return this;
  }

  withLettuce() {
    this.burger.addLettuce();
    return this;
  }

  withPickle() {
    this.burger.addPickle();
    return this;
  }

  build() {
    return this.burger;
  }
}

// Usage:
const burger = new BurgerBuilder()
  .withSize("large")
  .withCheese()
  .withTomato()
  .withLettuce()
  .build();

console.log(burger);
