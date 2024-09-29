import "./App.css"
import Header from "./layout/Header"
import { Typography, Container, Paper, Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Container maxWidth="xl">
        <Paper
          elevation={24}
          style={{ padding: "2rem", marginTop: "5rem" }}
        >
          <Typography
            variant="h1"
            align="left"
            gutterBottom
          >
            See on mingi pealkiri
          </Typography>
          <Typography
            variant="h4"
            align="right"
          >
            See on mingi tekst.
          </Typography>
        </Paper>
      </Container>
    </>
  )
}

export default App
