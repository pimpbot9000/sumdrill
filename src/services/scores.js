const baseUrl = "/api/v1"

const axios = require('axios')
//const camelcaseKeys = require('camelcase-keys')
//const snakecaseKeys = require('snakecase-keys')
const scoresUrl = `${baseUrl}/scores`

const getAll = async () => {
    const response = await axios.get(scoresUrl)
        
    return response.data.map(e => {
        return {
            name: e.name, score: e.score
        }
    })
}

const createNew = async (payload) => {
    
    const response = await axios.post(scoresUrl, payload)
    const data = response.data
    return {
        name: data.name,
        score: data.score                                                
    }

}
                                     
const scoresService = {
    getAll,
    createNew
}

export default scoresService