import Navbar from "../components/Navbar"
import Header from "../layout/Header"
import { Box, Container, Typography, Paper, Stack, Grid2 } from "@mui/material"

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Container maxWidth="lg">
        <Paper
          elevation={10}
          style={{ padding: "2rem", marginTop: "5rem" }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
          >
            HOMEPAGE
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid2
              container
              spacing={1}
            >
              <Grid2 size={2}>
                <Box
                  sx={{
                    aspectRatio: "1",
                    backgroundColor: "red",
                  }}
                />
              </Grid2>
              <Grid2 size={4}>
                <Box
                  sx={{
                    aspectRatio: "1",
                    backgroundColor: "blue",
                  }}
                />
              </Grid2>
              <Grid2 size={6}>
                <Box
                  sx={{
                    aspectRatio: "1",
                    backgroundColor: "green",
                  }}
                />
              </Grid2>
            </Grid2>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              my: 2,
            }}
          >
            <Box
              sx={{
                width: "25%",
                aspectRatio: "1",
                backgroundColor: "red",
              }}
            />
            <Box
              sx={{
                width: "25%",
                aspectRatio: "1",
                backgroundColor: "blue",
              }}
            />
            <Box
              sx={{
                width: "25%",
                aspectRatio: "1",
                backgroundColor: "green",
              }}
            />
          </Box>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
          >
            <Box
              sx={{
                width: "25%",
                aspectRatio: "1",
                backgroundColor: "orange",
              }}
            />
            <Box
              sx={{
                width: "25%",
                aspectRatio: "1",
                backgroundColor: "violet",
              }}
            />
          </Stack>
        </Paper>
      </Container>
    </>
  )
}
