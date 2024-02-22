// Use the desired database
const databaseName = 'mydatabase';
db = db.getSiblingDB(databaseName);

// Create a new collection
const collectionName = 'mycollection';
db.createCollection(collectionName);

// Insert documents into the collection
db[collectionName].insertMany([
  { color: 'test-yellow', temperature: 215 },
  { color: 'test-red', temperature: 180 },
  { color: 'test-blue', temperature: 120 }
]);

// Print a success message
print(`Initialized ${collectionName} collection in ${databaseName} database.`);
