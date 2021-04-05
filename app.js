// import module
const express = require('express')

// express function returns an express application
// app is the central part of our application, we will extend it with routes, middleware, and other settings
const app = express();

// root route
app.get('/', (req, res) => {
    //call back function for when client requests this route
    res.send('<h1>I love cheese</h1>');
});

app.get('/hello', (req, res) => {
    //call back function for when client requests this route
    res.send('<h1>Hello JavaScript developer!</h1>');
});

// setup developmentserver
// takes port number as parameter
app.listen(3000, () => {
    console.log('The application is running on localhost 3000!')
})