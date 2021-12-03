require('dotenv').config()
const { response } = require('express')
const express = require('express')
const { createScore, getScores, deleteScores } = require('../controllers/score')
const cors = require('cors')
const router = express.Router()


router.get('/health', (req, res) => {
    return res.status(200).send('I\'m healthy')
})

router.post('/scores', createScore)
router.get('/scores', getScores)
router.delete('/scores', cors(), deleteScores)

module.exports = router