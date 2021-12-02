
const playerReducer = (state = "", action) => {
    switch (action.type) {
        case 'SET_NAME':
            return action.value
        default:
            return state
    }
}

export const setName = (value) => {
    return {
        type: 'SET_NAME',
        value
    }
}

export default playerReducer