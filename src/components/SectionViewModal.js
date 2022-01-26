import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function SectionViewModal(props) {
  const { show, setShow, section } = props
  // const { users } = useContext(ClinicContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Section Clinic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Name :</strong> {section.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>description:</strong> {section.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Image :</strong>{" "}
            <Image src={section.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>services:</strong>
            <ListGroup>
              {section.services.map(service => (
                <ListGroup.Item>{service.service}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Doctor:</strong>
            <ListGroup>
              {section.doctors.map(doctor => (
                <>
                  <ListGroup.Item>{doctor.firstName}</ListGroup.Item>
                  <ListGroup.Item>{doctor.lastName}</ListGroup.Item>
                  <ListGroup.Item>
                    <Image src={doctor.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
                  </ListGroup.Item>
                </>
              ))}
            </ListGroup>
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

export default SectionViewModal
