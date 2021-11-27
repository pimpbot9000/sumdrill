import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';
import { getRndInteger, shuffleArray, formatToNiceNumber } from './utils/utils.js'
import React, { useState, useEffect, useImperativeHandle } from 'react'
import { generateNumbers } from './reducers/numbersReducer'
import { wrongAnswer, rightAnswer } from './reducers/resultsReducer'
import { useDispatch, useSelector } from 'react-redux'


function App() {


  const numbers = useSelector((store) => store.numbers)
  const results = useSelector((store) => store.results)
  const timerFormRef = React.createRef()

  const dispatch = useDispatch()

  const createNewNumbers = () => {
    dispatch(generateNumbers(-5, 5))

  }

  useEffect(() => {
    createNewNumbers()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onClickHandler = (res) => {

    const isCorrectAnswer = res === sumArr(numbers)
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


  return (<>

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

    </div>
  </>

  );
}

const Countdown = React.forwardRef(({ onTimeout }, ref) => {
  const [time, setTime] = useState(100)
  const [pause, setPause] = useState(false)

  const resetTime = () => {
    setTime(100)
    setPause(true)
    setTimeout(() =>{
       setPause(false)
       setTime(99)
    }, 500)
  }

  useImperativeHandle(ref, () => {
    return {
      resetTime
    }
  })
  
  useEffect(() => {
    if (!pause){
    const timeOut = setTimeout(() => {
      if (time <= 0) {
        resetTime()
        onTimeout()        
      } else {
        setTime(time - 1)
      }
    }, 100);
    return () => clearTimeout(timeOut)
    }
  }, [time])
  
  return <ProgressBar now={time}  label={`${time}%`} />
})

const Scores = () => {
  const results = useSelector(store => store.results)
  const scores = results.map((r, idx) => { if (r === 1) { return (<span key={idx}>😃</span>) } else { return (<span key={idx}>😢</span>) } })
  return <div className="Emoji">{scores}</div>
}

const Candidates = ({ onSelected }) => {

  const generateCandidates = (result) => {
    const candidates = new Set()
    candidates.add(result)
    do {
      candidates.add(getRndInteger(-5, 5))
    } while (candidates.size < 4)

    const candidatesArray = [...candidates]
    shuffleArray(candidatesArray)
    return candidatesArray
  }


  const numbers = useSelector(store => store.numbers)
  const candidates = generateCandidates(sumArr(numbers))
    .map(c => <Col key={c}><div onClick={() => onSelected(c)} className="Number"> {formatToNiceNumber(c, true)} </div></Col>)

  const col1 = candidates.slice(0, 2)
  const col2 = candidates.slice(-2)
  return <><Row>{col1}</Row><Row>{col2}</Row></>
}

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
  const numbers = useSelector(store => store.numbers)
  const niceNumbers = numbers.map(n => formatToNiceNumber(n, false))

  if (numbers[1] < 0) {
    const str = `${niceNumbers[0]} + (${niceNumbers[1]}) =`
    return (<div>
      {str}
    </div>)
  }

  else {
    const str = `${niceNumbers[0]} + ${niceNumbers[1]} =`
    return (<div>
      {str}
    </div>)
  }
}

const sumArr = arr => arr.reduce((acc, elem) => acc + elem, 0)


export default App;

