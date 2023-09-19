const express = require('express')
const path = require('path')
require('dotenv').config(); //Can I set this to a variable?


const app = express();
const port = process.env.port || 4000;

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI)

app.get('/api/data', (req, res) => {
    res.status(200).json({title: "Hello World", code: 200})
})

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})