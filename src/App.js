import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react'

function getRndInteger(min, max) {
  let result = 0
  do {
    result = Math.floor(Math.random() * (max - min + 1)) + min;    
  } while (result === 0)

  return result
}

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

    const isCorrectAnswer = res === numbers.reduce((acc, elem) => acc + elem, 0)
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
  const candidates = generateCandidates(numbers[0] + numbers[1])
  const col = candidates.map(c => <Col key="c"><div onClick={() => onClick(c)} className="Number"> {createNiceNumber(c)} </div></Col>)
  return <Row>{col}</Row>

}

const Expression = ({ numbers }) => {

  const niceNumbers = numbers.map(n => createNiceNumber(n))
  
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



const createNiceNumber = (number) => {
  if (number < 0) {
    return "−" + Math.abs(number)
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

export default App;

