import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import ClinicContext from "../utils/ClinicContext"
import AddDoctorModal from "../components/AddDoctors"
import DoctorRow from "../components/DoctorRow"

function Doctors() {
  const { doctors } = useContext(ClinicContext)
  //   const [Adminshow, setShowAdmin] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <>
      <h1 style={{ marginTop: 10, color: "#354D62" }}>Doctors</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{ marginRight: 40, marginBottom: 10 }}
          onClick={() => setShow(true)}
          variant="outline-primary"
        >
          <AddIcon /> Add doctor
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed", color: "#354D62" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Full Name</th>
            <th style={{ width: "36%" }}>Email</th>
            <th style={{ width: "18%" }}>image</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <DoctorRow key={doctor._id} doctor={doctor} />
          ))}
        </tbody>
      </Table>
      <AddDoctorModal show={show} setShow={setShow} />
    </>
  )
}

export default Doctors
