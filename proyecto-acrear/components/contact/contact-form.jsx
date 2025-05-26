'use client';
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    activity: '',
    email: '',
    phone: '',
    message: '',
  });

  const inputStyle = {
  bgcolor: 'var(--color-background)',
  borderRadius:1,
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgb(var(--color-primary))',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgb(var(--color-secondary))',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgb(var(--color-primary))',
  },
};


  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío
    console.log('Enviando formulario:', form);
    setStatus('¡Mensaje enviado con éxito!');
    setForm({
      name: '',
      activity: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        bgcolor: 'var(--color-accent)',
        p: 4,
        borderRadius: 5,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: { xs: '100%', md: '50%' },
        mx: 'auto',
      }}
    >
      <TextField
        label="Nombre"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        fullWidth
        sx={{bgcolor: 'var(--color-background)',
        borderRadius: 1,
        }}
      />

      <TextField
        label="Actividad o empresa"
        name="activity"
        value={form.activity}
        onChange={handleChange}
        required
        variant="outlined"
        fullWidth       
        sx={{
          
          bgcolor: 'var(--color-background)',
        borderRadius:1,
        }}
      />

      <TextField
        label="Correo electrónico"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        variant="outlined"
        fullWidth
                sx={{bgcolor: 'var(--color-background)',
                borderRadius:1,
                }}
      />

      <TextField
        label="Teléfono"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        required
        variant="outlined"
        fullWidth     
        sx={{bgcolor: 'var(--color-background)',
        borderRadius:1,
        }}
      />

      <TextField
        label="Mensaje"
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        sx={{bgcolor: 'var(--color-background)' ,
        borderRadius:1,
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: 'var(--color-primary)',
          color: 'white',
          '&:hover': {
            bgcolor: 'var(--color-secondary)',
          },
        }}
      >
        Enviar mensaje
      </Button>

      {status && (
        <Typography mt={2} align="center" color="white">
          {status}
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;
