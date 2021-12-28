import { useState } from "react"
import { Button } from "react-bootstrap"
import ServicesDeleteModal from "./ServicesDeleteModal"
import ServicesEditModal from "./ServicesEditModal"
import ServicesViewModal from "./ServicesViewModal"

function ServicesRow(props) {
  const { service } = props
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{service._id}</td>
      <td>{service.service}</td>
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
      <ServicesViewModal show={viewShow} setShow={setViewShow} service={service} />
      <ServicesEditModal show={editShow} setShow={setEditShow} service={service} />
      <ServicesDeleteModal show={deleteShow} setShow={setDeleteShow} serviceId={service._id} />
    </tr>
  )
}

export default ServicesRow
