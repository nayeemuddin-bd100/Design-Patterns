let instance;
class APIService {
  constructor() {
    if (instance) {
      // If an instance of the class already exists, return it
      return instance;
    }

    this.cache = {}; // Initialize an empty cache object to store fetched data
    instance = this; // Store the current instance as a reference in the instance variable
    // instance = this.cache; // we can store it only data rater entire reference.
  }

  async fetchData(userId) {
    if (this.cache[userId]) {
      // If data for the given userId is already cached, return it

      //   this // here this means APIService cache file
      //this.cache means stored single object
      // this.cache[userId] means first cache file of stored data
        console.log(this.cache[1]);
        

      return this.cache[userId];
    } else {
      // If data is not cached, make an API call to fetch it
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();

      this.cache[userId] = data; // Cache the fetched data for future use
      return data; // Return the fetched data
    }
  }
}

const apiService = new APIService(); // Create an instance of the APIService class

function fetchData() {
  const userId = 1; // Specify the userId to fetch data for

  apiService
    .fetchData(userId) // Call the fetchData method of the apiService instance
    .then((data) => {
      //   console.log(instance);
      //   console.log(apiService.cache);

      // Handle the resolved promise (successful API call)
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `<p>Data fetched: ${JSON.stringify(data)}</p>`;
    })
    .catch((error) => {
      // Handle the rejected promise (API call error)
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    });
}

//  Breakdown how caching mechanism works in singleton pattern

/**

1.We create an instance of the APIService class using const apiService = new APIService();.

2.We call the fetchData method of the apiService instance, passing a userId as an argument. For example let's use userId = 1.


3.The fetchData method first checks if the data for userId is already cached in the cache object.
Since the cache is initially empty, the method proceeds to make an API call to fetch the data from https://jsonplaceholder.typicode.com/users/1.

4.Once the API call is complete, the fetched data is stored in the cache by assigning it to this.cache[userId]. In this case, this.cache[1] = fetchedData.

5.The method then returns the fetched data.

6.If we call the fetchData method again with userId = 1, it will first check if the data is already cached. 

7.Since the data is cached from the previous call, the method simply returns the cached data without making another API call.

8.If we call the fetchData method with a different userId, such as userId = 2, it will follow the same process: check the cache, make an API call if necessary, and cache the fetched data.

*/
