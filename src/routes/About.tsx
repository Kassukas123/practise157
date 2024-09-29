import {
  Container,
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import Navbar from "../components/Navbar"
import Header from "../layout/Header"
import { FormEvent, useState } from "react"

export default function About() {
  const hobbies = ["autoga sõitmine", "filmide vaatamine", "õues käimine"]

  const [form, setForm] = useState({ email: "", message: "" })

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
          elevation={20}
          style={{ padding: "2rem", marginTop: "2rem" }}
        >
          <Box>
            <Typography
              variant="h3"
              align="center"
            >
              Tervist!
            </Typography>
          </Box>
        </Paper>
        <Paper
          elevation={20}
          style={{ padding: "2rem", marginTop: "2rem" }}
        >
          <Box>
            <Typography
              align="center"
              variant="h3"
              gutterBottom
            >
              Minu Hobid
            </Typography>
          </Box>
          <List>
            {hobbies.map((hobby, index) => (
              <ListItem key={index}>
                <Box
                  display="flex"
                  justifyContent="center"
                  width="100%"
                >
                  <ListItemText
                    primary={hobby}
                    style={{ textAlign: "center" }}
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper
          elevation={10}
          style={{ padding: "2rem", marginTop: "2rem" }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
          >
            <Typography
              align="center"
              variant="h3"
              gutterBottom
            >
              Kontaktivorm
            </Typography>
            <TextField
              name="email"
              label="E-mail"
              variant="standard"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
            <TextField
              name="message"
              label="Tekstilahter"
              variant="standard"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
            <Box
              display="flex"
              justifyContent="center"
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Saada andmed!
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
