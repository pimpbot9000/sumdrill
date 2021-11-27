
const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CORRECT':
      return [...state, 1]
    case 'INCORRECT':
      return []
    default:
      return state
  }
}

export const wrongAnswer = () => {
  return {
    type: 'INCORRECT'
  }
}

export const rightAnswer = () => {
  return {
    type: 'CORRECT'
  }
}

export default resultsReducer
