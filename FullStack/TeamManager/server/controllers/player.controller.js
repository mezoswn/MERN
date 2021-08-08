const { Player } = require('../models/player.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPlayer = (request, response) => {
    const { playerName, preferedPosition } = request.body;
    Player.create({
        playerName,
        preferedPosition,
        Game1:"undecided",
        Game2:"undecided",
        Game3:"undecided",
    })
        .then(player => response.json(player))
        .catch(err => response.json(err));
}
