import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const PlayerName = ({ onStartGame }) => {

    const [show, setShow] = useState(true)
    const [name, setName] = useState("")
    const onClick = () => {
        setShow(false);
        onStartGame(name)
    }

    return (
        <Modal show={show} onHide={() => { }}>
            <Modal.Header>
                <Modal.Title>Are you ready?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Player's name</label>
                    <input onChange={(event) => setName(event.target.value)}
                        value={name}
                        type="text"
                        className="form-control"
                        maxLength="13"
                    />
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onClick}>
                    I'm scared ...but I think so
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PlayerName