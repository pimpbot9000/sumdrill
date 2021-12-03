require('dotenv').config()
const db = require('../db/db')


const createScore = async (req, res) => {

    const APIKey = req.header('X-API-Key')

    if (APIKey != process.env.API_KEY) {
        const response = { error: "Must provide an API key" }
        return res.status(403).json(response)

    }

    const [dbResult] = await db('score').insert({
        ...req.body
    }).returning('*')

    return res.status(201).json(dbResult)

}

const getScores = async (req, res) => {
    const queryResult = await db.select('*').from('score')
    return res.status(200).json(queryResult)
}

const deleteScores = async (req, res) => {
    db('accounts').del()
    return res.status(200).json({ message: "Scoreboard erased" })
}
module.exports = { createScore, getScores, deleteScores }
