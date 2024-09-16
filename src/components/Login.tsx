import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useState, useEffect } from "react";

export default function MyForm() {
   const [form, setForm] = useState({ username: "", password: "" });
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // kui selle maha v6tad, siis form refreshib ja andmed on l2inud
     console.log(form);
    // console.log ({
    //     username,
    //     password
    // });
  };

  //console logi tuleb iga uuendus, mis on seotud usernamega / n2ed veebi console logist
//   useEffect(() => {
//     console.log("render every time");
//   })

//   useEffect(() => {
//     console.log("renders first time");
//   }, [])
//   // Vaata ka <React.StrictMode>, spst renderdab 2x 


//   useEffect(() => {
//     console.log("renders every time username changes");
//   }, [username])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            Login
          </Typography>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            // onChange={(event) => setUsername(event.target.value)}
             onChange={handleChange}
             value={form.username}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            // onChange={(event) => setPassword(event.target.value)}
             onChange={handleChange}
             value={form.password}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}