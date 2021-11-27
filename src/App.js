import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';
import { getRndInteger, shuffleArray, formatToNiceNumber } from './utils/utils.js'
import { useEffect } from 'react'
import { generateNumbers } from './reducers/numbersReducer'
import { wrongAnswer, rightAnswer } from './reducers/resultsReducer'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const numbers = useSelector((store) => store.numbers)
  const results = useSelector((store) => store.results)

  const dispatch = useDispatch()

  const createNewNumbers = () => {
    dispatch(generateNumbers(-5, 5))
  }

  useEffect(() => {
    createNewNumbers()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onClickHandler = (res) => {

    const isCorrectAnswer = res === sumArr(numbers)
    console.log(numbers)
    console.log(res)
    console.log(isCorrectAnswer)
    if (isCorrectAnswer) {
      dispatch(rightAnswer())
    } else {
      dispatch(wrongAnswer())
    }
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
        <hr />
        <Scores />
      </Container>

    </div>
  </>

  );
}

const Scores = () => {
  const results = useSelector(store => store.results)
  const scores = results.map((r, idx) => { if (r === 1) { return (<span key={idx}>😃</span>) } else { return (<span idx={idx}>😢</span>) } })
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

    return (<div>
      {niceNumbers[0]} + ({niceNumbers[1]})
    </div>)
  }

  else {
    return (<div>
      {niceNumbers[0]} + {niceNumbers[1]}
    </div>)
  }
}

const sumArr = arr => arr.reduce((acc, elem) => acc + elem, 0)

export default App;

