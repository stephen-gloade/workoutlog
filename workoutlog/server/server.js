const express = require('express')
const path = require('path');
require('dotenv').config();
const { createUser } = require('./MongoHandlers/userHandlers');
const { connectDb } = require('./dbConnection');


const app = express();
app.use(express.json());
const port = 4000;

//Connecting to MongoDB

connectDb()
  .then(() => {
    console.log('Database connection established');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });



  // Routes

app.get('/api/data', (req, res) => {
    res.status(200).json({title: "Hello World", code: 200})
})

app.post('/createUser', createUser)

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})