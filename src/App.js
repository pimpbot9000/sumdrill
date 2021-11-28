import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';

import { formatToNiceNumber, choose } from './utils/utils.js'
import React, { useState, useEffect, useImperativeHandle } from 'react'
import { generateNumbers } from './reducers/taskReducer'
import { wrongAnswer, rightAnswer } from './reducers/resultsReducer'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const task = useSelector((store) => store.task)
  const results = useSelector((store) => store.results)
  const timerFormRef = React.createRef()

  const dispatch = useDispatch()

  const createNewNumbers = () => {
    dispatch(generateNumbers(-5, 5, choose(["SUM", "MULTIPLICATION"])))
  }

  useEffect(() => {
    createNewNumbers()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onClickHandler = (res) => {

    const isCorrectAnswer = res === task.answer
    timerFormRef.current.resetTime()

    if (isCorrectAnswer) {
      dispatch(rightAnswer())
    } else {
      dispatch(wrongAnswer())
    }
    createNewNumbers()

  }

  const onTimeout = () => {
    dispatch(wrongAnswer())
    createNewNumbers()
  }

  return (
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
        <Countdown ref={timerFormRef} onTimeout={() => onTimeout()} />
        <hr />
        <Scores />
      </Container>

    </div>)
}

const Countdown = React.forwardRef(({ onTimeout }, ref) => {
  const [time, setTime] = useState(100)

  const resetTime = () => {
    setTime(100)
  }

  useImperativeHandle(ref, () => {
    return {
      resetTime
    }
  })

  useEffect(() => {

    const timeOut = setTimeout(() => {
      if (time <= 0) {
        setTime(100)
        onTimeout()
      } else {
        setTime(time - 1)
      }
    }, 100);
    return () => clearTimeout(timeOut)
  })

  return <ProgressBar now={time} label={`${time}%`} />
})

const Scores = () => {
  const results = useSelector(store => store.results)
  const scores = results.map((r, idx) => { if (r === 1) { return (<span key={idx}>😃</span>) } else { return (<span key={idx}>😢</span>) } })
  return <div className="Emoji">{scores}</div>
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
  let length = results.length - 1
  let streak = 0
  while (length >= 0 && results[length] === 1) {
    streak += 1
    length -= 1
  }
  return <div className="Streak">Win Streak: {streak}</div>
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

