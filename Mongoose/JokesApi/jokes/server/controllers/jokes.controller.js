const Joke = require("../models/jokes.model");
const random = require('mongoose-random');

//find all
module.exports.findAllJokes = (req, res) => {
  Joke.find(req.body)
    // .then(data => res.json({ message: "successful", data: data }))
    .then(findAll => res.json({ message: "successful", jokes: findAll }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//find one by id
module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
////////
//find random joke
module.exports.findRandomJokes = (req, res) => {
  var counter = Joke.countDocuments(); //db.collection.countDocuments
  var randjoke = Math.floor(Math.random() * counter);
  Joke.findOne().skip(randjoke).limit(10).exec() //{ random: req.params.random}
    .then(randomJokes => res.json({ joke: randomJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//create new jokes
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//update the joke by id
module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


//delete the joke by id
module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};