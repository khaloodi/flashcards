const express = require('express')
const router = express.Router() // a router is like a mini app in express, you can write middleware and routes to it
const { data } = require('../data/flashcardData.json')
const { cards } = data //putting the data into an object called cards

router.get('/:id', (req, res) => { // instead of writing /cards, it's just / because every route in this file technically begins with cards

    const { side } = req.query
    const { id } = req.params
    const text = cards[id][side]
    const hint = cards[id]

    const templateData = { text, hint }
    res.render('card', templateData)
        //call back function for when client requests this route

    /* before 
    res.render('card', {
        // prompt: "Who is buried in Grant's tomb?",
        prompt: cards[req.params.id].question,
        // hint: "Think about whose tomb it is?"
        hint: cards[req.params.id].hint,
    });
    */

    // res.locals.prompt = "Who is buried in Grant's tomb?"
    // res.render('card');
});

module.exports = router