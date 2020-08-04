const express = require('express');
const app = express()

const port = 3000;


// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log('Hello World')

/** 2) A first working Express Server */
app.get('/', (req, res) => {
    res.send('Hello ExpresssssEEEE')
})

/** 3) Serve an HTML file */
app.get('/home', (req, res) => {
    res.sendFile( __dirname + "/index.html")
})

/** 4) Serve static assets  */
app.use('/public/', express.static( __dirname + '/public/'))

/** 5) serve JSON on a specific route */
// app.use('/api/', express.static(__dirname + "/api/"))
app.get('/json', (req, res) => {
    res.json({"message": "Hello json"})
})

/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */


app.listen( port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})