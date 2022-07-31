const path = require('path').resolve;
const config = require(path('config/constants'));

const messages = require('../common/messages');
const ResponseService = require('../common/response');
const GameService = require('./../services/game')
// I HAD IMPLEMENTED ALL FUNCTIONS IN SINGLE CONTROLLER USUALLY WE GROUP FUNCTION BY PARENT ELEMENT LIKE USER CONTROLLER, ADMIN CONTROLLER


class JackConroller {


    startGame = async (req, res) => {
        try {
            const request = { ...req.body }
            // let tempDECK = JSON.stringify(this.shuffleDeck(request.decks))
            // let sampleData = {

            // }

            console.log(request)

            var c = await GameService.startGame(request.profileData);
            // let players = await this.createPlayers(c._id, request.numberOfPlayers, request.moneySpent, tempDECK);
            // console.log(players);
            res.send(ResponseService.success(c));

        }
        catch (err) {
            res.status(err.status || 500).send(ResponseService.failure(err));
        }
    }
}
module.exports = new JackConroller;