import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function ServicesAddModal(props) {
  const { show, setShow } = props
  const { addServices, sections } = useContext(ClinicContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addServices}>
        <Modal.Header closeButton>
          <Modal.Title>Add services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              services
            </Form.Label>
            <Col md="8">
              <Form.Control name="service" type="text" required />
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              clinicDepartment
            </Form.Label>
            <Col md="8">
              {sections.map(clinicDepartmentObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="sections" value={clinicDepartmentObject._id} />
                  </Col>
                  <Col md="2">
                    <span>{clinicDepartmentObject.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add services
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ServicesAddModal
