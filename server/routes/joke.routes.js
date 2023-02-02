const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:_id", JokeController.findOneSingleJoke);
    app.get("/api/random", JokeController.randomJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/update/:_id", JokeController.updateExistingJoke);
    app.delete("/api/jokes/delete/:_id", JokeController.deleteAnExistingJoke);
};