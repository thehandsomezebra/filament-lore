const express = require('express');
const mongoose = require('mongoose');

const app = express();
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
const collectionName = 'mycollection';
const connectionString = `${mongoUrl}/${dbName}`;

// Connect to MongoDB using Mongoose
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to MongoDB: ${dbName}`);
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error}`);
  });

// Define a schema for the data
const dataSchema = new mongoose.Schema({
  color: String,
  temperature: Number,
});

// Create a model based on the schema
const Data = mongoose.model(collectionName, dataSchema);

// Retrieve data from MongoDB and return as response
app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
