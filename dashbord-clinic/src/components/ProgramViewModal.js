import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function ProgramViewModal(props) {
  const { show, setShow, program } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View program </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Name :</strong> {program.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>description:</strong> {program.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Image :</strong>{" "}
            <Image src={program.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
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

export default ProgramViewModal