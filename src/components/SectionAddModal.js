import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function SectionAddModal(props) {
  const { show, setShow } = props
  const { addSection, services } = useContext(ClinicContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addSection}>
        <Modal.Header closeButton>
          <Modal.Title>Add section</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              name
            </Form.Label>
            <Col md="8">
              <Form.Control name="name" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              description
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              services
            </Form.Label>
            <Col md="8">
              {services.map(serviceObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="services" value={serviceObject._id} />
                  </Col>
                  <Col md="2">
                    <span>{serviceObject.service}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add section
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default SectionAddModal
