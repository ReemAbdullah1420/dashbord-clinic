import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import ClinicContext from "../utils/ClinicContext"
import ServicesRow from "../components/ServicesRow"
import ServicesAddModal from "../components/ServicesAddModal"

function Service() {
  const { services } = useContext(ClinicContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10, color: "#354D62" }}>Services</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed", color: "#354D62" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>services</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <ServicesRow key={service._id} service={service} />
          ))}
        </tbody>
      </Table>
      <ServicesAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Service
