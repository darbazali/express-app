const dotevn = require('dotenv');
const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const hostname = 'localhost';
const port = 3000;

dotevn.config();

/*================================== 
    11. Mount the body-parser middleware 
==================================*/
app.use(bodyParser.urlencoded({extended:false}))

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

/*================================== 
    6. Use .env file
==================================*/

app.get('/api/up', (req, res) => {
    const msgStyle = process.env.MSG_STYLE;
    if ( msgStyle === 'uppercase') {
        res.json({'message': 'hello json'.toUpperCase()})
    } else {
        res.json({'message': 'hello json'})
    } 
})

/*================================== 
    7. Impelemnt root-level request loger midlleware
==================================*/
app.get('/ip', (req, res, next) => {
    res.json({
        "method": req.method,
        "path": req.path,
        "ip": req.ip
    })
    next();
})

/*================================== 
    8. Chain Middleware
==================================*/
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send(req.time)
}
)


/*================================== 
    9. Get route parameter input
==================================*/
app.get('/user/:userid/book/:bookid', (req, res) => {
    res.json({
        "userID": req.params.userid,
        "bookID": req.params.bookid
    })
})

/*================================== 
    10. Get query params
==================================*/
app.get('/name', (req, res) => {
    res.json({
        "name": `${req.query.first} ${req.query.last}`
    })
})


/*================================== 
    12. Get Data from POST request
==================================*/
app.post('/name', (req, res) => {
    let first = req.body.first;
    let last = req.body.last;
    res.json({"name": `${first} ${last}`})
})

// setup server on port and hostname
app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
})