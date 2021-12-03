import scoresService from "../services/scores"

const scoresReducer = (state = {topScores: [], lowestScore: 0}, action) => {
    switch (action.type) {
        case 'NEW_SCORE':
            const topScores = [...state.topScores, action.data]
            topScores.sort((a, b) => b.score - a.score)
            const lowestScore = topScores[topScores.length - 1].score
            const res = {
                topScores: topScores.slice(0,30),
                lowestScore
            }
            return res
        case 'INIT_SCORES':
            return action.data
        default:
            return state
    }
}

export const initializeScores = () => {
    return async dispatch => {
        const scores = await scoresService.getAll()
        scores.sort((a, b) => b.score - a.score)
        const topScores = scores.slice(0, 30)

        const lowestScore = scores.length === 0? 0 : scores[topScores.length - 1].score

        dispatch({
            type: 'INIT_SCORES',
            data: {
                topScores,
                lowestScore
            }
        })
    }
}

export const newScore = (name, score) => {

    return async dispatch => {
        const result = await scoresService.createNew({ name, score })

        dispatch({
            type: 'NEW_SCORE',
            data: result
        })
    }
}



export default scoresReducer
