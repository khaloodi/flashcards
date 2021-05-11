const express = require('express')
const router = express.Router() // a router is like a mini app in express, you can write middleware and routes to it

// root route
router.get('/', (req, res) => {
    //call back function for when client requests this route
    // res.send('<h1>I love cheese</h1>');
    const name = req.cookies.username
    if (name) {
        res.render('index', { name })
    } else {
        res.redirect('/hello')
    }
});

router.get('/cards', (req, res) => {
    //call back function for when client requests this route
    res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is?" });
    // res.locals.prompt = "Who is buried in Grant's tomb?"
    // res.render('card');
});

router.get('/sandbox', (req, res) => {
    //call back function for when client requests this route
    res.render('sandbox', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is?", colors });
    // res.locals.prompt = "Who is buried in Grant's tomb?"
    // res.render('card');
});

router.get('/hello', (req, res) => {
    const name = req.cookies.username
    if (name) {
        res.redirect('/')
    } else {
        res.render('hello')
    }
});

router.post('/hello', (req, res) => {
    // console.dir(req.body)
    res.cookie('username', req.body.username)
        // res.render('hello', { name: req.body.username })
    res.redirect('/')
        // res.json(req.body)
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username')
    res.redirect('/hello')
});

module.exports = router