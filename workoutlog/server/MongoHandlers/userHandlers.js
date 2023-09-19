
const { getDb } = require('../dbConnection');
const { ObjectId } = require('mongodb');

module.exports = {

    async createUser(req, res) {

        const { name, age } = req.body;
        // const id = new ObjectId();
    try {
        const db = await getDb();
        const collection = db.collection('users');

        const newUser = {
            name, age,
        }
        const result = await collection.insertOne(newUser);
        res.status(200).json({"message": result})
        return result;
        

    } catch(e) {
        console.error(e);
        throw new Error("User DB Insertion Error")
    }

    },

}
