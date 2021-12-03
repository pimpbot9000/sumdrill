
const baseUrl = process.env.REACT_APP_API_URL
const axios = require('axios')

axios.defaults.headers.common = {
    "X-API-Key": process.env.REACT_APP_API_KEY,
};

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