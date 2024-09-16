import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./MyForm.css"

function MyForm() {
  return (
    <div className='container'>
    <form>
      <TextField
        label="Nimi"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Saada
      </Button>
    </form>
    </div>
  );
}

export default MyForm;
