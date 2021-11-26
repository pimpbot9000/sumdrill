import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react'



function App() {
  const [numbers, setNumbers] = useState([1, 1])
  const [results, setResults] = useState([])

  useEffect(() => {
    createNewNumbers()
  }, [])



  const createNewNumbers = () => {
    setNumbers([getRndInteger(-5, 10), getRndInteger(-5, 5)])
  }

  const onClickHandler = (res) => {

    const isCorrectAnswer = res === sumArr(numbers)
    if (isCorrectAnswer) {
      setResults([...results, 1])
    } else {
      setResults([...results, -1])
    }
    createNewNumbers()
  }

  return (<>

    <div className="Container">
      <Container>
        <Row>
          <Col>
            <div className="Blackboard">
              <Expression numbers={numbers} />
            </div>
          </Col>
        </Row>
        <Candidates numbers={numbers} onClick={onClickHandler} />
        <Streak results={results} />
        <Scores results={results} />
      </Container>

    </div>
  </>

  );
}

const Scores = ({ results }) => {
  const scores = results.map(r => { if (r === 1) { return (<>😃</>) } else { return (<>😢</>) } })

  return <div className="Emoji">{scores}</div>
}

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

const Candidates = ({ numbers, onClick }) => {
  const candidates = generateCandidates(sumArr(numbers))
    .map(c => <Col key="c"><div onClick={() => onClick(c)} className="Number"> {createNiceNumber(c, true)} </div></Col>)

  const col1 = candidates.slice(0, 2)
  const col2 = candidates.slice(-2)
  return <><Row>{col1}</Row><Row>{col2}</Row></>

}
const Streak = ({ results }) => {
  let length = results.length - 1
  let streak = 0
  while (length >= 0 && results[length] === 1) {
    streak += 1
    length -= 1
  }
  return <div className="Streak">Win Streak: {streak}</div>
}

const Expression = ({ numbers }) => {

  const niceNumbers = numbers.map(n => createNiceNumber(n, false))

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

const getRndInteger = (min, max) => {
  let result = 0
  do {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (result === 0)

  return result
}


const createNiceNumber = (number, padding) => {
  let pad = ""
  if (padding) {
    pad = "⠀"  // U+2800 aka empty character!!
  }
  if (number < 0) {
    return "−" + Math.abs(number) + pad
  }
  return number
}

/**
 * 
 * Copy pasted from Stack overflow. Shuffles an array in place. 
 */
const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const sumArr = arr => arr.reduce((acc, elem) => acc + elem, 0)

export default App;

