import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"


function ProgramDeleteModal(props) {
  const { deleteProgram } = useContext(ClinicContext)
  const { show, setShow, programId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete program</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this program ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteProgram(programId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProgramDeleteModal