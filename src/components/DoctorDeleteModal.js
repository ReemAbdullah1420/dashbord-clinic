import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function DoctorDeleteModal(props) {
  const { deleteDoctor } = useContext(ClinicContext)
  const { show, setShow, doctorId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Doctor</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Doctor ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteDoctor(doctorId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DoctorDeleteModal