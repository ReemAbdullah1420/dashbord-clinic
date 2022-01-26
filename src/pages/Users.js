import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import UserRow from "../components/UserRow"
import AdminAddModal from "../components/AdminAddModal"
import ClinicContext from "../utils/ClinicContext"
import AddDoctorModal from "../components/AddDoctors"

function Users() {
  const { users } = useContext(ClinicContext)
  const [Adminshow, setShowAdmin] = useState(false)
  const [doctorshow, setShowDoctor] = useState(false)

  return (
    <>
      <h1 style={{ marginTop: 10, color: "#354D62" }}>Users</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{ marginRight: 40, marginBottom: 10 }}
          onClick={() => setShowAdmin(true)}
          variant="outline-primary"
        >
          <AddIcon /> Add Admin
        </Button>
        <Button
          style={{ marginRight: 40, marginBottom: 10 }}
          onClick={() => setShowDoctor(true)}
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
            <th style={{ width: "9%" }}>Role</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
      <AdminAddModal Adminshow={Adminshow} setShowAdmin={setShowAdmin} />
      <AddDoctorModal doctorshow={doctorshow} setShowDoctor={setShowDoctor} />
    </>
  )
}

export default Users
