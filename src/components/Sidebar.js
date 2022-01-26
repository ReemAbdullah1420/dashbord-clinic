import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import { useContext } from "react"
import ClinicContext from "../utils/ClinicContext"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout } = useContext(ClinicContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 167, 276)" },
          background: { paper: "#195973" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="My Clinic dashboard" />
          </ListItem>
        </List>
        <List>
          <Link to="/sections">
            <ListItem button>
              <ListItemText primary="sections" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/services">
            <ListItem button>
              <ListItemText primary="services" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/programs">
            <ListItem button>
              <ListItemText primary="programs" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/users">
            <ListItem button>
              <ListItemText primary="users" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: "auto" }}>
          {localStorage.tokenDashboardFilms ? (
            <Link to="/logout">
              <ListItem button>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} onClick={logout} />
              </ListItem>
            </Link>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
