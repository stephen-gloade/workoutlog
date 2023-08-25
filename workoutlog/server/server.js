const express = require('express')
const path = require('path')

const app = express();
const port = process.env.port || 4000;

app.get('/api/data', (req, res) => {
    res.status(200).json({title: "Hello World", code: 200})
})

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})