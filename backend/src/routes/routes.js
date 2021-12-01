const { response } = require('express')
const express = require('express')
const { createScore, getScores } = require('../controllers/score')
const router = express.Router()

router.get('/health', (req, res) => {
    return res.status(200).send('I\'m healthy')
})

router.post('/scores', createScore)
router.get('/scores', getScores)

module.exports = router