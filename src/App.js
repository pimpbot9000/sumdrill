import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';
import Countdown from './components/Countdown.tsx'
import PlayerName from './components/PlayerName'
import Failure from './components/Failure';
import { formatToNiceNumber, choose } from './utils/utils.js'
import React, { useEffect } from 'react'
import { generateNumbers } from './reducers/taskReducer'
import { wrongAnswer, rightAnswer } from './reducers/resultsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { initializeScores, newScore } from './reducers/scoresReducer'
import { setName } from './reducers/playerReducer';

function App() {

  const task = useSelector((store) => store.task)
  const results = useSelector((store) => store.results)
  const scores = useSelector(store => store.scores)
  const player = useSelector(store => store.player)

  const timerForwRef = React.createRef()
  const failureForwRef = React.createRef()

  const dispatch = useDispatch()

  const createNewNumbers = () => {
    dispatch(generateNumbers(-5, 5, choose(["SUM", "MULTIPLICATION"])))
  }

  useEffect(() => {
    createNewNumbers()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(initializeScores())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onClickHandler = (res) => {

    const isCorrectAnswer = res === task.answer

    if (isCorrectAnswer) {
      onSuccess()
    } else {
      onFailure()
    }

  }

  const onFailure = () => {
    setNewScore(player, results.length)
    failureForwRef.current.showPopUp()
    timerForwRef.current.pauseGame()
  }

  const onSuccess = () => {
    dispatch(rightAnswer())
    timerForwRef.current.resetTime()
    createNewNumbers()
  }

  const onTimeout = () => {
    onFailure()
  }

  const onStartGame = (name) => {
    dispatch(setName(name))
    timerForwRef.current.startGame()
  }

  const onResumeGame = () => {
    dispatch(wrongAnswer())
    createNewNumbers()
    timerForwRef.current.resetTime()
  }

  // This logic should probably be handled by score reducer
  const setNewScore = (player, currentScore) => {
    if (currentScore === 0) {
      return
    }

    if (currentScore >= scores.lowestScore || scores.topScores.length < 10) {
      dispatch(newScore(player, currentScore))
    }
  }


  return (<>
    <PlayerName onStartGame={onStartGame} />
    <Failure ref={failureForwRef} onResumeGame={onResumeGame} task={task} />
    <div className="Container">
      <Container>
        <Row>
          <Col>
            <div className="Blackboard">
              <Expression />
            </div>
          </Col>
        </Row>
        <Candidates onSelected={onClickHandler} />
        <Streak results={results} />
        <Countdown ref={timerForwRef} onTimeout={() => onTimeout()} />
        <hr />
        <Scores />
        <HighScores />
      </Container>

    </div></>)
}

const Scores = () => {
  const multiplier = 10
  const results = useSelector(store => store.results)
  const n = results.length
  const nofMultipliers = Math.floor(n / multiplier) * multiplier
  const residual = n < 5 ? n : (n % multiplier)

  const scores = results.slice(0, residual).map((r, idx) => { if (r === 1) { return (<span key={idx}>😃</span>) } else { return (<span key={idx}>😢</span>) } })
  return (
    <div className="Emoji">
      {nofMultipliers > 0 ? <div>{nofMultipliers}x😃</div> : <></>}
      <div>{scores}</div>
    </div>)
}

const HighScores = () => {

  const scores = useSelector((store) => store.scores)
  if (Object.keys(scores).length === 0) {
    return <div>Loading...</div>
  }

  const scoreList = scores.topScores.map((s, idx) => <div key={idx}>{idx + 1}. {s.name}:  <b>{s.score}</b></div>)
  return <div className="HighScores"><div><b>HIGHSCORES</b><hr /></div><div>{scoreList}</div></div>
}

const Candidates = ({ onSelected }) => {

  const candidates = useSelector(store => store.task.candidates)
  const formattedCandidates = candidates
    .map(c => <Col key={c}><div onClick={() => onSelected(c)} className="Number"> {formatToNiceNumber(c, true)} </div></Col>)

  const col1 = formattedCandidates.slice(0, 2)
  const col2 = formattedCandidates.slice(-2)
  return <><Row>{col1}</Row><Row>{col2}</Row></>
}

// Some redundancy here since I changed the implementation to show only streaks
const Streak = () => {
  const results = useSelector(store => store.results)
  const player = useSelector(store => store.player)
  let length = results.length - 1
  let streak = 0
  while (length >= 0 && results[length] === 1) {
    streak += 1
    length -= 1
  }
  return <Row><Col><div className="PlayerName">{player}</div></Col><Col><div className="Streak">Win Streak: {streak}</div></Col></Row>
}

const Expression = () => {
  const task = useSelector(store => store.task)
  const operator = task.operation === "SUM" ? "+" : "·"
  const niceNumbers = task.numbers.map(n => formatToNiceNumber(n, false))

  if (task.numbers[1] < 0) {
    const str = `${niceNumbers[0]} ${operator} (${niceNumbers[1]}) =`
    return (<div>
      {str}
    </div>)
  }

  else {
    const str = `${niceNumbers[0]} ${operator} ${niceNumbers[1]} =`
    return (<div>
      {str}
    </div>)
  }
}

export default App;

