const db = require('../db/db')

const createScore = async (req, res) => {

    const [ dbResult ] = await db('score').insert({        
        ...req.body
    }).returning('*')

    return res.status(201).json(dbResult)

}

const getScores = async (req, res) => {
    const queryResult = await db.select('*').from('score')    
    return res.status(200).json(queryResult)
}

module.exports = { createScore, getScores }
