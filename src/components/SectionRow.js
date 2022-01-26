import { useState } from "react"
import { Button } from "react-bootstrap"
import SectionDeleteModal from "./SectionDeleteModal"
import SectionEditModal from "./SectionEditModal"
import SectionViewModal from "./SectionViewModal"

function SectionRow(props) {
  const { section } = props
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{section._id}</td>
      <td>{section.name}</td>
      <td>{section.description}</td>
      <td>
        <img src={section.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
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
      <SectionViewModal show={viewShow} setShow={setViewShow} section={section} />
      <SectionEditModal show={editShow} setShow={setEditShow} section={section} />
      <SectionDeleteModal show={deleteShow} setShow={setDeleteShow} sectionId={section._id} />
    </tr>
  )
}

export default SectionRow
