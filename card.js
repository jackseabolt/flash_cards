const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    question: 'string', 
    answer: 'string'
}); 

const Card = mongoose.model('Cards', cardSchema); 

module.exports= { Card }