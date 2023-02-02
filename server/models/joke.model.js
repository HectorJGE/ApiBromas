const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type:String,
        minlength:[10,"El setup requiere minimo 10 caracteres"]
    },
    punchline: {
        type:String,
        minlength:[3,"El punchline requiere minimo 3 caracteres"]
    },
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;