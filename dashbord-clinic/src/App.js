import axios from "axios"
import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-bootstrap"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ClinicContext from "./utils/ClinicContext"
import Sidebar from "./components/Sidebar"
import Section from "./pages/Section"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Service from "./pages/Service"
import "./App.css"
import Program from "./pages/Program"

function App() {
  const [sections, setSection] = useState([])
  const [services, setServices] = useState([])
  const [users, setUsers] = useState([])
  const [programs, setPrograms] = useState([])
  const navigate = useNavigate()

  const getSection = async () => {
    const response = await axios.get("http://localhost:5000/api/clinicDepartments")
    setSection(response.data)
  }
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboardClinic,
      },
    })
    setUsers(response.data)
  }
  const getServices = async () => {
    const response = await axios.get("http://localhost:5000/api/services")
    setServices(response.data)
  }
  const getProgram = async () => {
    const response = await axios.get("http://localhost:5000/api/porgrams")
    setPrograms(response.data)
  }

  useEffect(() => {
    getSection()
    getUsers()
    getServices()
    getProgram()
  }, [])

  const addSection = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const services = []
      if (form.elements.services.forEach) {
        form.elements.services.forEach(service => {
          if (service.checked) {
            services.push(service.value)
          }
        })
      } else {
        if (form.elements.services.checked) {
          services.push(form.elements.services.value)
        }
      }
      const sectionBody = {
        name: form.elements.name.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        services: services,
      }
      await axios.post(`http://localhost:5000/api/clinicDepartments`, sectionBody, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      getSection()
      toast.success("add sections success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editSection = async (e, sectionId) => {
    e.preventDefault()
    try {
      const form = e.target
      const services = []
      if (form.elements.services.forEach) {
        form.elements.services.forEach(service => {
          if (service.checked) {
            services.push(service.value)
          }
        })
      } else {
        if (form.elements.services.checked) {
          services.push(form.elements.services.value)
        }
      }
      const sectionBody = {
        name: form.elements.name.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        services: services,
      }
      await axios.put(`http://localhost:5000/api/clinicDepartments/${sectionId}`, sectionBody, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      getSection()
      toast.success("edit sections success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteSection = async sectionId => {
    try {
      await axios.delete(`http://localhost:5000/api/clinicDepartments/${sectionId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      toast.success("sections deleted")
      getSection()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addServices = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const servicesBody = {
        service: form.elements.service.value,
      }
      await axios.post(`http://localhost:5000/api/services`, servicesBody, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      getServices()
      toast.success("add services success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editService = async (e, serviceId) => {
    e.preventDefault()
    try {
      const form = e.target
      const serviceBody = {
        service: form.elements.service.value,
      }
      await axios.put(`http://localhost:5000/api/services/${serviceId}`, serviceBody, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      getServices()
      toast.success("edit serives success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteService = async serviceId => {
    try {
      await axios.delete(`http://localhost:5000/api/services/${serviceId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      toast.success("services deleted")
      getServices()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addProgram = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const ProgramBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
      }
      await axios.post(`http://localhost:5000/api/porgrams`, ProgramBody, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      getProgram()
      toast.success("add program success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editProgram = async (e, programId) => {
    e.preventDefault()
    try {
      const form = e.target

      const programBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
      }
      await axios.put(`http://localhost:5000/api/porgrams/${programId}`, programBody, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      getProgram()
      toast.success("edit program success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteProgram = async programId => {
    try {
      await axios.delete(`http://localhost:5000/api/porgrams/${programId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      toast.success("program deleted")
      getProgram()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardClinic = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        image: form.elements.image.value,
      }
      await axios.post(`http://localhost:5000/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addDoctor = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const doctorBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        image: form.elements.image.value,
        sepcialization: form.elements.sepcialization.value,
      }
      await axios.post(`http://localhost:5000/api/auth/add-doctor`, doctorBody, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      getUsers()
      toast.success("add doctor success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardClinic,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenDashboardClinic")
  }
  const store = {
    sections,
    users,
    services,
    programs,
    deleteSection,
    addSection,
    editSection,
    login,
    logout,
    deleteUser,
    addAdmin,
    addDoctor,
    addServices,
    deleteService,
    editService,
    addProgram,
    editProgram,
    deleteProgram,
  }
  return (
    <>
      <ClinicContext.Provider value={store}>
        <ToastContainer />
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
            <Routes>
              <Route
                path="/sections"
                element={localStorage.tokenDashboardClinic ? <Section /> : <Navigate to="/login" />}
              />
              <Route path="/users" element={localStorage.tokenDashboardFilms ? <Users /> : <Navigate to="/login" />} />
              <Route
                path="/services"
                element={localStorage.tokenDashboardClinic ? <Service /> : <Navigate to="/login" />}
              />
              <Route
                path="/programs"
                element={localStorage.tokenDashboardClinic ? <Program /> : <Navigate to="/login" />}
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Box>
        </Box>
      </ClinicContext.Provider>
    </>
  )
}

export default App
