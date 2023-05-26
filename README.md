# Design Patterns in JavaScript

This repository contains implementations of various Design Patterns in JavaScript.

## Design Patterns Included

1. **Singleton**: The Singleton pattern ensures that only one instance of a class is created throughout the application.

2. **Factory**: The Factory pattern provides an interface for creating objects without specifying the exact class of the object to be created.

3. **Prototype**: The Prototype pattern specifies the kind of objects to create using a prototypical instance and creates new objects by copying that prototype.

4. **Builder**: The Builder pattern separates the construction of complex objects from their representation, allowing the same construction process to create various representations.

5. **Observer**: The Observer pattern enables efficient communication between objects by establishing a one-to-many dependency. It involves a Subject (object of interest), Observers (objects that want to be notified), and notifications (updates sent by the Subject to Observers when a change occurs). It's like people registering with a weather station to automatically receive weather updates instead of checking manually. 

6. **MVC**: The MVC (Model-View-Controller) pattern separates an application into three components: the model (data and business logic), the view (presentation layer), and the controller (handles user input and updates the model/view), enabling modularity, maintainability, and separation of concerns.

## Folder Structure

- `Singleton/`: Contains the implementation of the Singleton pattern.
  - `Singleton.js`: Example , usage and explanation how singleton pattern works.
  - `databaseConnection.js`: contains a code implementation of a Database Connection class using the Singleton pattern.
  - `globaleState/`: Implementation globalState based on singleton pattern .
  - `caching/`: Implementation caching and storing from API call based on singleton pattern .
  

- `Factory/`: Contains the implementation of the Factory pattern.
  - `Factory.js`: Example usage of the Factory pattern in JavaScript. here I include basic of factory pattern , some real life usage and so on. 

- `Prototype/`: Contains the implementation of the Prototype pattern.
  - `Prototype.js`: Example usage of the Prototype pattern in JavaScript.

- `Builder/`: Contains the implementation of the Builder pattern.
  - `Builder.js`: Example how builder pattern works with example.
  - `ApiReq.js`: Implement Builder pattern for Api Request.
  - `MongoQuery.js`: Implement Builder pattern for query from mongodb Database.
  - `UserBuilder.js`: Implement Builder pattern to create a user.
  
- `Observer/`: Contains the implementation of the Observer pattern.
  - `README.md`: Example usage of the Observer pattern in JavaScript.

- `MVC/`: Contains the implementation of the MVC pattern.
  - `README.md`: Example usage of the MVC pattern in JavaScript.

## Usage

Each design pattern folder contains a JavaScript file demonstrating the usage of the respective design pattern. You can directly run the code samples in your JavaScript environment to see the patterns in action.


## Resources
https://www.patterns.dev/
https://php.howtocode.dev/design-patterns