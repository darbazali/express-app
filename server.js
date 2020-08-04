const express = require('express');
const app = express()



const port = 3000;


app.get('/', (req, res) => {
    // res.send(`<h1>Hello World, I'm a Node server listening on port ${port}</h1>`)
    res.send('Hello World')
})


app.listen( port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})