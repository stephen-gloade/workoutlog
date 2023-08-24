const express = require('express')
const path = require('path')

const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.status(200).json({title: "Hello World"})
})

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})