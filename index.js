const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
const { Card } = require('./card'); 


app.post('/', (req, res) => {
    res.send("You've hit our API"); 
});

app.get('/all', (req, res) => {
    console.log('here is card', Card)
   return Card.find()
        .then(cards => {
            console.log(1, cards)
            res.json({ cards }).status(200)
        })
})

app.post('/new', (req, res) => {
    return Card.create({question: "Hey", answer: "Hey back"})
        .then(card => {
            console.log("ok", card)
            res.status(201); 
        }); 
});

app.listen(3000, () => {
    mongoose.connect("mongodb://app:7Password@ds159025.mlab.com:59025/flash-cards", 
    () => console.log('Mongoose has connected'))
});