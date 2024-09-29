import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        />
        <Stack
          direction="row"
          spacing={2}
        >
          <Button
            component={Link}
            to="/Loginpage"
            color="inherit"
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/home"
            color="inherit"
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/About"
            color="inherit"
          >
            About
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
