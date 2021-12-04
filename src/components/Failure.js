import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { formatToNiceNumber } from '../utils/utils';

// Violation of DRY
const Equation = ({ task }) => {
    const operator = task.operation === "SUM" ? "+" : "·"
    const niceNumbers = task.numbers.map(n => formatToNiceNumber(n, false))

    if (task.numbers[1] < 0) {
        const str = `${niceNumbers[0]} ${operator} (${niceNumbers[1]}) = ${formatToNiceNumber(task.answer)}`
        return (<div>
            {str}
        </div>)
    }

    else {
        const str = `${niceNumbers[0]} ${operator} ${niceNumbers[1]} = ${formatToNiceNumber(task.answer)}`
        return (<div>
            {str}
        </div>)
    }
}

const Failure = React.forwardRef(({ onResumeGame, task }, ref) => {

    const [show, setShow] = useState(false)

    const onClick = () => {
        setShow(false);
        onResumeGame()
    }

    const showPopUp = () => {
        setShow(true)
    }

    React.useImperativeHandle(ref, () => {
        return {
            showPopUp
        }
    })
    const answer = formatToNiceNumber(task.answer)

    return (
        <Modal onClick={onClick} style={{ marginTop: "200px" }} show={show} onHide={() => { }}>
            <Modal.Header>
                <Modal.Title>Uh oh!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ textAlign: "center" }} className="Emoji"><Equation task={task} />😢😢😢😢😢</div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onClick}>
                    I'll try again😃!
                </Button>
            </Modal.Footer>
        </Modal>
    )
})

export default Failure
