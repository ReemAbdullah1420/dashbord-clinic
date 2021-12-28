import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function ServicesEditModal(props) {
  const { show, setShow, service } = props
  const { editService } = useContext(ClinicContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editService(e, service._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              services
            </Form.Label>
            <Col md="8">
              <Form.Control name="service" type="text" defaultValue={service.service} />
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              clinicDepartment
            </Form.Label>
            <Col md="8">
              {sections.map(section => (
                <Row>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="sections"
                      defaultChecked={service.sections.find(Section => Section._id === sections._id)}
                      value={section._id}
                    />
                  </Col>
                  <Col md="2">
                    <span>{section.name}</span>
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
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit service
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ServicesEditModal
