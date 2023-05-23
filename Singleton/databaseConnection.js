const { MongoClient } = require('mongodb');

class DatabaseConnection {
  constructor() {
    this.url = 'mongodb://localhost:8880';
    this.dbName = 'myDatabase';
    this.isConnected = false;
    this.client = null;
    this.db = null;
  }

  async connect() {
    try {
      this.client = await MongoClient.connect(this.url);
      this.db = this.client.db(this.dbName);
      this.isConnected = true;
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  async query(collectionName, filter) {
    if (!this.isConnected) {
      console.log('Error: Not connected to MongoDB');
      return;
    }
    const collection = this.db.collection(collectionName);
    const result = await collection.find(filter).toArray();
    console.log('Query result:', result);
  }

  // Additional methods...
}

class DatabaseSingleton {
  constructor() {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseConnection();
      DatabaseSingleton.instance.connect();
    }
  }

  getInstance() {
    return DatabaseSingleton.instance;
  }
}

// Usage example
const dbInstance1 = new DatabaseSingleton().getInstance();
dbInstance1.query('users', { age: { $gt: 25 } });


