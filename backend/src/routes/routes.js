require('dotenv').config()
const { response } = require('express')
const express = require('express')
const { createScore, getScores, deleteScores } = require('../controllers/score')
const cors = require('cors')
const router = express.Router()

const whitelist = ['https://sumdrill.herokuapp.com', 'http://sumdrill.herokuapp.com']

var corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed"))
    }
 }
}
router.get('/health', (req, res) => {
    return res.status(200).send('I\'m healthy')
})

router.post('/scores', cors(corsOptions), createScore)
router.get('/scores', getScores)
router.delete('/score', deleteScores)

module.exports = router