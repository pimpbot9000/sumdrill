import taskReducer from './reducers/taskReducer'
import resultsReducer from './reducers/resultsReducer'
import scoresReducer from './reducers/scoresReducer'
import playerReducer from './reducers/playerReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  task: taskReducer,
  results: resultsReducer,
  scores: scoresReducer,
  player: playerReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store