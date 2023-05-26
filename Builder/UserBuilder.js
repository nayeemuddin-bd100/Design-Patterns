// Make a user using builder pattern

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class UserBuilder {
  constructor() {
    this.name = "John Doe";
    this.email = "johndoe@example.com";
    this.age = 25;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withEmail(email) {
    this.email = email;
    return this;
  }

  withAge(age) {
    this.age = age;
    return this;
  }

  build() {
    return new User(this.name, this.email, this.age);
  }
}

// Usage:
const user = new UserBuilder()
  .withName("Alice")
  .withEmail("alice@example.com")
  .withAge(30)
  .build();

console.log(user);
