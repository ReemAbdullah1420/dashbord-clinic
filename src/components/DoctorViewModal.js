import { Button, ListGroup, Modal } from "react-bootstrap"

function DoctorViewModal(props) {
  const { show, setShow, doctor } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View doctor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Full Name:</strong> {doctor.firstName} {doctor.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {doctor.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Image:</strong>{" "}
            <img src={doctor.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>sepcialization :</strong> {doctor.specialization}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DoctorViewModal
