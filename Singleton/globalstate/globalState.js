
class GlobalState {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

decrement() {
    this.count--;
  }

  getCount() {
    return this.count;
  }
}


const singletonGlobalState = (function () {
  let instance;

  function createInstance() {
    return new GlobalState();
  }

  function getInstance() {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  }

  // Return an object with the getInstance method only
  return {
    getInstance: getInstance,
  };
})();

Object.freeze(GlobalState);

// In a Singleton pattern, we want to ensure there's only one instance of a class. Object.freeze is used to "lock" or "freeze" the instance, making it unchangeable. This protects the instance's properties from being modified, ensuring that the singleton's state remains consistent and preventing any accidental or intentional changes from outside the singleton. Essentially, Object.freeze helps maintain the integrity of the singleton instance by keeping it safe from unwanted alterations.

// Example usage
const globalState = singletonGlobalState.getInstance();



// explain why i use object.freeze here?

// Here GlobalState refer to singletonGlobalState. right? so that singletonGlobalState returned getInstance directly. so there is so many possible way to modify it.
/**
 //Example usage
const globalState = singletonGlobalState.getInstance();

globalState.increment(); // Modify the count property
console.log(globalState.getCount()); // Output: 1

globalState.count = 10; // Directly modify the count property
console.log(globalState.getCount()); // Output: 10

globalState.decrement(); // Modify the count property
console.log(globalState.getCount()); // Output: 9
 */

//As you can see, without using Object.freeze(), the user can access and modify the count property of the globalState object, which goes against the intention of maintaining a singleton instance with controlled access.


//To prevent such modifications and ensure the immutability of the globalState object, we can use Object.freeze() as follows:

//ex

/**
// Example usage
const globalState = Object.freeze(singletonGlobalState.getInstance());

globalState.increment(); // Attempt to modify the count property, but it has no effect
console.log(globalState.getCount()); // Output: 0

globalState.count = 10; // Attempt to directly modify the count property, but it has no effect
console.log(globalState.getCount()); // Output: 0

globalState.decrement(); // Attempt to modify the count property, but it has no effect
console.log(globalState.getCount()); // Output: 0

 */