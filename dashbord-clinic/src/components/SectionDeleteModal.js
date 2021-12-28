import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"


function SectionDeleteModal(props) {
  const { deleteSection } = useContext(ClinicContext)
  const { show, setShow, sectionId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete section</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this section ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteSection(sectionId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SectionDeleteModal
