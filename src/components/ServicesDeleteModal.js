import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function ServicesDeleteModal(props) {
  const { deleteService } = useContext(ClinicContext)
  const { show, setShow, serviceId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete service</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this service ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteService(serviceId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ServicesDeleteModal
