const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
dotenv.config();

const app = express();
const hostName = 'localhost';
const port = 3000;

// process.env.MESSAGE_STYEL='uppercase';

/*==================================
    7) Implement a Root-Level Request Logger Middleware
===================================*/
app.get('/api', (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({extended: false}))


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
// app.get('/json', (req, res) => {
//     res.json({"message": "Hello JSON"})
// })


/*==================================
    6) Use the .env file
===================================*/
app.get('/api', (req, res) => { 
    var message = process.env.MESSAGE_STYLE;
    if ( message === 'uppercase') {
        res.json({'message': 'hello json'.toUpperCase()})
    } else { 
        res.json({'message': 'hello json'})
    }
})

/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res, next) => {
    res.json({"time": req.time})
    }
)



/** 9)  Get input from client - Route parameters */
app.get('/profile/:id', (req, res) => {
    res.send(`You requested to see a profile with id: ${req.params.id}`)
})


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.get('/name', (req, res) => {
    let first = req.query.first;
    let last = req.query.last;

    res.json({"name": `${first} ${last}`})
})



// listen for requestes at http://localhost:3000
app.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`)
}) 