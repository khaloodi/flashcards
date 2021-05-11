// import module
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// express function returns an express application
// app is the central part of our application, we will extend it with routes, middleware, and other settings
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
];

// tells express which template engine to use, by default templates are saved in a folder called views
app.set('view engine', 'pug')


// Middleware goes here
// often we pass middleware as an anonymous function to the app use method
// middleware runs every time a request comes through the app
app.use((req, res, next) => {
    // req.message = 'This message made it' //message is not a special name, can call anything or add more properties if wanted
    console.log('Hello')
    next()
        /* 
        //this block will cause an error if I want to see what errors look like
        const err = new Error('Oh noes!')
        err.status = 500
        next(err)
        */
        // passing control forward throughout the app, signals the end of middleware functions
        // the app will "hang" if middleware doesn't end with a next method
        // with the get methods we don't need next because they are sending a response to the user
        // such as json res.send or res.render
})

app.use((req, res, next) => {
    console.log('world')
        // console.log(req.message)
    next() // passing control forward throughout the app signals the end of middleware functions
})

const mainRoutes = require('./routes')
const cardRoutes = require('./routes/cards')

app.use(mainRoutes)
app.use('/cards', cardRoutes)

/*
    // 404 error
    app.use((req, res, next) => {
        const error = new Error('Not Found')
        err.status = 404
        next(err)
    })

    app.use((err, req, res, next) => {
        // res.locals.error = err   .... if I use this line with locals I don't need the err object below
        res.locals.error = err
        res.status(err.status) // causes the error code to pop up which is not something baked into javascripts error object
        res.render('error')
            //giving the template access to the error data via err object with res.render('error', err) doesn't work for some reason
    })
*/

// setup developmentserver
// takes port number as parameter
app.listen(3000, () => {
    console.log('The application is running on localhost 3000!')
})