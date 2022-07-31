
const Profile = require('../models/Profile')

class GameService {



    startGame(details) {
        return new Profile(details).save();
    }

    // Delete User is To Update User with status Disabled 
}

module.exports = new GameService();