require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = express.Router()
const { createScore, getScores, deleteScores } = require('../controllers/score')


router.get('/health', (req, res) => {
    return res.status(200).send('I\'m healthy')
})

router.post('/scores', createScore)
router.get('/scores', getScores)
router.delete('/scores', cors(), deleteScores)

module.exports = router