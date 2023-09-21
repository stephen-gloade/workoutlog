const User = require('../userModel')
const { getDb } = require('../dbConnection');


module.exports = {

    async createUser(req, res) {
        const { name, age } = req.body;

    try {
        const newUser = new User({ name, age });
        const result = await newUser.save();
        console.log(newUser);

        res.status(200).json({"message": result})
        return result;
        

    } catch(e) {
        console.error(e);
        res.status(500).json({ "error": "User DB Insertion Error" });
    }

    },

}
