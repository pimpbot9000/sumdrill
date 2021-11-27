import { getRndInteger } from '../utils/utils.js'

const numbersReducer = (state = [0, 0], action) => {
  switch (action.type) {
    case 'SET_RANDOM_VALUES':
      return [getRndInteger(action.min, action.max), getRndInteger(action.min, action.max)]
    default:
      return state
  }
}

export const generateNumbers = (min, max) => {
  return {
    type: 'SET_RANDOM_VALUES',
    min,
    max
  }
}


export default numbersReducer