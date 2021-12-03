require('dotenv').config()
const { response } = require('express')
const express = require('express')
const { createScore, getScores } = require('../controllers/score')
const cors = require('cors')
const router = express.Router()
const corsOptions = {
    origin: "https://sumdrill.herokuapp.com"
}

router.get('/health', (req, res) => {
    return res.status(200).send('I\'m healthy')
})

router.post('/scores', cors(corsOptions), createScore)
router.get('/scores', getScores)

module.exports = router