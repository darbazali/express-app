const express = require('express')
const app = express();
const hostname = 'localhost';
const port = 3000;

/*================================== 
    2. setup a server to listn for home url
==================================*/
app.get('/hello', (req, res) => {
    res.send('Hello world')
    console.log('hello');
})


/*================================== 
    3. Serve HTML file
==================================*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

/*================================== 
    4. Serve Static assets
==================================*/
app.use(express.static(__dirname + '/public/'))


/*================================== 
    5. Serve JSON on a specific route
==================================*/
app.get('/api', (req, res) => {
    res.json({'message': 'Hello JSON'})
})

// setup server on port and hostname
app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
})