const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ Jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params._id })
		.then(oneSingleJoke => res.json({ Joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.randomJoke = (req, res) => {
    Joke.find()
        .then(allJokes => {
            index = Math.floor(Math.random() * allJokes.length);
            res.json({RandomJoke:allJokes[index]})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ Joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
        .then(updatedJoke => res.json({ Joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
