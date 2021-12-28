import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import ClinicContext from "../utils/ClinicContext"
import SectionRow from "../components/SectionRow"
import SectionAddModal from "../components/SectionAddModal"

function Section() {
  const { sections } = useContext(ClinicContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10, color: "#354D62" }}>Clinic</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed", color: "#354D62" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>name</th>
            <th style={{ width: "18%" }}>Description</th>
            <th style={{ width: "18%" }}>image</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sections.map(section => (
            <SectionRow key={section._id} section={section} />
          ))}
        </tbody>
      </Table>
      <SectionAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Section
