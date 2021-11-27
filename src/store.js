import numbersReducer from './reducers/numbersReducer'
import resultsReducer from './reducers/resultsReducer'
import { createStore, combineReducers} from 'redux'


const reducer = combineReducers({
  numbers: numbersReducer,
  results: resultsReducer
})

const store = createStore(reducer)

export default store