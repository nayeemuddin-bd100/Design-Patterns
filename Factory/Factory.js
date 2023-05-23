// Let's talk about how factory patterns works?
// Assume there is shop where selling various kind of ice-cream like vanilla , strawberry and so on. Now I purchased an ice-cream but here the thing is i don't know how the ice cream make it or what is the process of making ice-cream.It's totally hide from me. Yes this is the concept of factory pattern.


/*=============================================
=            Implement this concept            =
=============================================*/


// IceCream interface
class IceCream {
  constructor(flavor) {
    this.flavor = flavor;
  }
  prepare() {
    console.log(`Preparing ${this.flavor} ice cream...`);
  }
  freeze() {
    console.log(`Freezing ${this.flavor} ice cream...`);
  }
  serve() {
    console.log(`Serving ${this.flavor} ice cream...`);
  }
}

// IceCreamFactoryPattern
class IceCreamFactory {
  createIceCream(flavor) {
    return new IceCream(flavor);
  }
}

// Client code
const factory = new IceCreamFactory();

const vanillaIceCream = factory.createIceCream("Vanilla");
vanillaIceCream.prepare(); // Output: Preparing Vanilla ice cream...
vanillaIceCream.freeze(); // Output: Freezing Vanilla ice cream...
vanillaIceCream.serve(); // Output: Serving Vanilla ice cream...

const strawberryIceCream = factory.createIceCream("Strawberry");
strawberryIceCream.prepare(); // Output: Preparing Strawberry ice cream...
strawberryIceCream.freeze(); // Output: Freezing Strawberry ice cream...
strawberryIceCream.serve(); // Output: Serving Strawberry ice cream...

// The client code uses the factory to create instances of ice cream objects without directly knowing the IceCream classes. The factory creates instances based on the flavor specified by the client.
// The Factory Pattern allows us to write custom logic in the prepare, freeze, or serve methods of the IceCream class. However, this logic is completely hidden from both the client code and the IceCreamFactory class itself. The client can only interacts with the factory instance method and receives the desired result. The internal implementation details of these methods are encapsulated and inaccessible to the client. Therefore, we can indeed classify this code as an example of the Factory Pattern.



/*=====  End of IceCreamFactory Pattern Section  ======*/





//let's talk about another example.
// I went to a shop and ordered a pizza. I got the pizza but i don't know how the chef make it for me. It's totally hidden. Okey it can be the great example of factory pattern .

// let's implement


/*=============================================
=     Implement Pizza Factory Pattern     =
=============================================*/

// Pizza interface
class Pizza {
  constructor() {
    this.pizzaName = "";
    this.ingredients = [];
  }
  prepare() {
    //   console.log('Preparing pizza...');

    return `Preparing ${this.pizzaName}...`;
  }
  bake() {
    console.log("Baking pizza...");
  }
  cut() {
    console.log("Cutting pizza...");
  }
  box() {
    console.log("Packaging pizza...");
  }
}

// ChickenPizza concrete class
class ChickenPizza extends Pizza {
  constructor() {
    super();
    this.pizzaName = "ChickenPizza";
    this.ingredients = ["Tomato Sauce", "Mozzarella Cheese", "Chicken"];
  }
}

// VeggiePizza concrete class
class VeggiePizza extends Pizza {
  constructor() {
      super();
      this.pizzaName = "VeggiePizza";
    this.ingredients = [
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Mixed Vegetables",
    ];
  }
}

// PizzaFactory
class PizzaFactory {
  createPizza(type) {
    switch (type) {
      case "chicken":
        return new ChickenPizza();
      case "veggie":
        return new VeggiePizza();
      default:
        throw new Error(`Invalid pizza type: ${type}`);
    }
  }
}

// Client code
const pizzaFactory = new PizzaFactory();

const chickenPizza = pizzaFactory.createPizza("chicken");
console.log(chickenPizza.prepare()); // Preparing ChickenPizza..
// chickenPizza.prepare(); // Output: Preparing pizza...
chickenPizza.bake(); // Output: Baking pizza...
chickenPizza.cut(); // Output: Cutting pizza...
chickenPizza.box(); // Output: Packaging pizza...

const veggiePizza = pizzaFactory.createPizza("veggie");
console.log(veggiePizza.prepare()); // Output: Preparing VeggiePizza...
veggiePizza.prepare(); 
veggiePizza.bake(); // Output: Baking pizza...
veggiePizza.cut(); // Output: Cutting pizza...
veggiePizza.box(); // Output: Packaging pizza...





/*=====  End of Implement Pizza Factory Pattern  ======*/



/*=============================================
=   Various db connection on factory pattern  =
=============================================*/

// DatabaseConnection interface
class DatabaseConnection {
  constructor() {
    this.host = '';
    this.username = '';
    this.password = '';
  }

  connect() {
    console.log('Connecting to the database...');
    // ... connection logic
  }

  query(sql) {
    console.log(`Executing SQL query: ${sql}`);
    // ... query execution logic
  }

  disconnect() {
    console.log('Disconnecting from the database...');
    // ... disconnection logic
  }
}

// MySQLConnection concrete class
class MySQLConnection extends DatabaseConnection {
  constructor() {
    super();
    // ... MySQL specific connection properties
  }
}

// PostgreSQLConnection concrete class
class PostgreSQLConnection extends DatabaseConnection {
  constructor() {
    super();
    // ... PostgreSQL specific connection properties
  }
}

// MongoDBConnection concrete class
class MongoDBConnection extends DatabaseConnection {
  constructor() {
    super();
    // ... MongoDB specific connection properties
  }
}

// DatabaseConnectionFactory
class DatabaseConnectionFactory {
  createConnection(databaseType) {
    switch (databaseType) {
      case 'mysql':
        return new MySQLConnection();
      case 'postgresql':
        return new PostgreSQLConnection();
      case 'mongodb':
        return new MongoDBConnection();
      default:
        throw new Error(`Invalid database type: ${databaseType}`);
    }
  }
}

// Client code
const connectionFactory = new DatabaseConnectionFactory();

const mysqlConnection = connectionFactory.createConnection('mysql');
mysqlConnection.connect();
mysqlConnection.query('***');
mysqlConnection.disconnect();

const mongodbConnection = connectionFactory.createConnection('mongodb');
mongodbConnection.connect();
mongodbConnection.query('db.collection.find({})');
mongodbConnection.disconnect();


/*=====  End of various db connection on factory pattern  ======*/

