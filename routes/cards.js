const express = require('express')
const router = express.Router() // a router is like a mini app in express, you can write middleware and routes to it

router.get('/', (req, res) => { // instead of writing /cards, it's just / because every route in this file technically begins with cards
    //call back function for when client requests this route
    res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is?" });
    // res.locals.prompt = "Who is buried in Grant's tomb?"
    // res.render('card');
});

module.exports = router