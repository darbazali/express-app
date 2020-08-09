const express = require('express')
const app = express();
const hostname = 'localhost';
const port = 3000;

// setup a server to listn for home url
app.get('/', (req, res) => {
    res.send('Hello world')
})



// setup server on port and hostname
app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
})