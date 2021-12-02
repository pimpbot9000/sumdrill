import { getRndInteger, shuffleArray } from '../utils/utils.js'


const generateCandidatesSum = (result) => {
  const candidates = new Set()
  candidates.add(result)


  candidates.add(-result)


  do {
    candidates.add(getRndInteger(-5, 5))
  } while (candidates.size < 4)

  const candidatesArray = [...candidates]
  shuffleArray(candidatesArray)
  return candidatesArray
}

const generateCandidatesMultiplication = (result) => {
  const candidates = new Set()
  candidates.add(result)
  candidates.add(-result)

  do {
    candidates.add(getRndInteger(-20, 21))
  } while (candidates.size < 4)

  const candidatesArray = [...candidates]
  shuffleArray(candidatesArray)
  return candidatesArray
}


const taskReducer = (state = { numbers: [0, 0], operation: "SUM", candidates: [] }, action) => {
  switch (action.type) {
    case 'SET_RANDOM_VALUES':
      const numbers = [getRndInteger(action.min, action.max), getRndInteger(action.min, action.max)]
      let answer = 0
      let candidates = []

      if (action.operation === "SUM") {
        answer = numbers[0] + numbers[1]
        candidates = generateCandidatesSum(answer)
      } else if (action.operation === "MULTIPLICATION") {
        answer = numbers[0] * numbers[1]
        candidates = generateCandidatesMultiplication(answer)
      }

      return {
        numbers,
        operation: action.operation,
        answer,
        candidates
      }

    default:
      return state
  }
}

export const generateNumbers = (min, max, operation) => {
  return {
    type: 'SET_RANDOM_VALUES',
    min,
    max,
    operation
  }
}


export default taskReducer