


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
