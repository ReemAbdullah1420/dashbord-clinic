import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function SectionEditModal(props) {
  const { show, setShow, section } = props
  const { editSection, services, doctors } = useContext(ClinicContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editSection(e, section._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit section</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              name
            </Form.Label>
            <Col md="8">
              <Form.Control name="name" type="text" defaultValue={section.name} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              description
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="description" defaultValue={section.description} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={section.image} />
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
                    <Form.Check
                      type="checkbox"
                      name="services"
                      defaultChecked={section.services.find(serviceSection => serviceSection._id === serviceObject._id)}
                      value={serviceObject._id}
                    />
                  </Col>
                  <Col md="2">
                    <span>{serviceObject.service}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              doctors
            </Form.Label>
            <Col md="8">
              {doctors.map(doctorObject => (
                <Row>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="services"
                      defaultChecked={section.doctors.find(serviceSection => serviceSection._id === doctorObject._id)}
                      value={doctorObject._id}
                    />
                  </Col>
                  <Col md="2">
                    <span>{doctorObject.firstName}</span>
                  </Col>
                  <Col md="2">
                    <span>{doctorObject.lastName}</span>
                  </Col>
                  <Col md="2">
                    <span>{doctorObject.image}</span>
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
            Edit section
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default SectionEditModal
