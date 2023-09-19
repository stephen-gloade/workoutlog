const { MongoClient } = require('mongodb');
require('dotenv').config();


const uri = process.env.MONGO_URI
const client = new MongoClient(uri);

async function connect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

async function getDb() {
    if (client) {
        await connect();
    }
    return client.db('rep');
}

module.exports = { getDb };
