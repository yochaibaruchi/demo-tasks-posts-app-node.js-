const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: String,
    email: String,
    street: String,
    City: String,
    Zipcode: Number,
    Tasks: [{
        id: Number,
        title: String,
        Completed: Boolean
    }],
    Posts: [{
        id: Number,
        title: String,
        body: String
    }]
})

module.exports = mongoose.model('users', userSchema);