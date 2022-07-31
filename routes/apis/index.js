const express = require('express');
const router = express.Router();

const JackConroller = require('./../../controllers/JackConroller');

// router.use('/start/game', JackConroller.startGame)
router.post('/add', JackConroller.startGame)


module.exports = router;