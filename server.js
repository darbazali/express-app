const express = require('express');

const app = express();
const hostName = 'localhost';
const port = 3000;

// creat a simple server, send response back to home dir.
app.get('/', (req, res) => {
    res.send('Hello from Express');
})

// Serve an HTML file
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// serve static files to the app
// when we have to serve static files, we have to use a express midleware called, static
/*==================================
    4) serve static assets
===================================*/
// serve anyfile that is located in the public dir. to the web server
app.use( express.static(__dirname + '/public/'))

/*==================================
    5) serve JSON on a specific route
===================================*/
app.get('/api', (req, res) => {
    res.json({name: 'Darbaz Ali'})
})

// listen for requestes at http://localhost:3000
app.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`)
})