import taskReducer from './reducers/taskReducer'
import resultsReducer from './reducers/resultsReducer'
import { createStore, combineReducers } from 'redux'


const reducer = combineReducers({
  task: taskReducer,
  results: resultsReducer
})

const store = createStore(reducer)

export default store