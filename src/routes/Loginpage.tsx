import { FormEvent, useState } from "react"
import Navbar from "../components/Navbar"
import Header from "../layout/Header"
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material"

export default function Loginpage() {
  const [form, setForm] = useState({ username: "", password: "" })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(form)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <>
      <Header />
      <Navbar />
      <Container maxWidth="md">
        <Paper
          elevation={15}
          style={{ padding: "2rem", marginTop: "5rem" }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
          >
            LOGIN
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            }}
          >
            <TextField
              label="Username"
              variant="standard"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              label="Password"
              variant="standard"
              type="password"
              fullWidth
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
