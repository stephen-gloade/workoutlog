const { MongoClient } = require('mongodb');
require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI


async function connectDb() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

async function getDb() {
    return mongoose
}

module.exports = { getDb, connectDb };
