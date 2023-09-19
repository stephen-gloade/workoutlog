const express = require('express')
const path = require('path')
require('dotenv').config();

const uri = process.env.MONGO_URI

const app = express();
const port = process.env.port || 4000;

const { MongoClient } = require("mongodb");

const client = new MongoClient(uri)

async function main() {

    try {
        await client.connect();
        console.log('Connected to database');
    } catch(e) {
        console.error(e);
    }

}

main()
.catch(console.error)
.finally(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});

// app.get('/api/data', (req, res) => {
//     res.status(200).json({title: "Hello World", code: 200})
// })

// app.listen(port, () => {
//     console.log(`The server is listening on port ${port}`)
// })