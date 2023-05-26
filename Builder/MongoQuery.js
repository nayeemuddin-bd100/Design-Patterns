// Query data from mongodb Using builder pattern

class UserQueryBuilder {
  constructor() {
    this.query = {};
  }

  withName(name) {
    this.query.name = name;
    return this;
  }

  withAge(age) {
    this.query.age = age;
    return this;
  }

  withCountry(country) {
    this.query.country = country;
    return this;
  }

  build() {
    return this.query;
  }
}

// Usage:
const query = new UserQueryBuilder()
  .withName("John")
  .withCountry("USA")
  .build();


db.collection("users")
  .find(query)
  .toArray((err, users) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(users);
  });
