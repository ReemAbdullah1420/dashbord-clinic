import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function ProgramEditModal(props) {
  const { show, setShow, program } = props
  const { editProgram } = useContext(ClinicContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editProgram(e, program._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Program</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              title
            </Form.Label>
            <Col md="8">
              <Form.Control name="title" type="text" defaultValue={program.title} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              description
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="description" defaultValue={program.description} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={program.image} />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit program
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ProgramEditModal