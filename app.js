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

// root route
app.get('/', (req, res) => {
    //call back function for when client requests this route
    // res.send('<h1>I love cheese</h1>');
    const name = req.cookies.username
    if (name) {
        res.render('index', { name })
    } else {
        res.redirect('/hello')
    }
});

app.get('/cards', (req, res) => {
    //call back function for when client requests this route
    res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is?" });
    // res.locals.prompt = "Who is buried in Grant's tomb?"
    // res.render('card');
});

app.get('/sandbox', (req, res) => {
    //call back function for when client requests this route
    res.render('sandbox', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is?", colors });
    // res.locals.prompt = "Who is buried in Grant's tomb?"
    // res.render('card');
});

app.get('/hello', (req, res) => {
    const name = req.cookies.username
    if (name) {
        res.redirect('/')
    } else {
        res.render('hello')
    }
});

app.post('/hello', (req, res) => {
    // console.dir(req.body)
    res.cookie('username', req.body.username)
        // res.render('hello', { name: req.body.username })
    res.redirect('/')
        // res.json(req.body)
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username')
    res.redirect('/hello')
});

// setup developmentserver
// takes port number as parameter
app.listen(3000, () => {
    console.log('The application is running on localhost 3000!')
})