import { useState } from "react"
import { Button, Image } from "react-bootstrap"
import ProgramDeleteModal from "./ProgramDeleteModal"
import ProgramEditModal from "./ProgramEditModal"
import ProgramViewModal from "./ProgramViewModal"


function ProgramRow(props) {
  const { program } = props
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{program._id}</td>
      <td>{program.title}</td>
      <td>
        <Image src={program.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{program.description}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <ProgramViewModal show={viewShow} setShow={setViewShow} program={program} />
      <ProgramEditModal show={editShow} setShow={setEditShow} program={program} />
      <ProgramDeleteModal show={deleteShow} setShow={setDeleteShow} programId={program._id} />
    </tr>
  )
}

export default ProgramRow
