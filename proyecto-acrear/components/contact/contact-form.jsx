'use client';
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ContactForm = ({ contactData }) => {
  const [form, setForm] = useState({
    name: '',
    activity: '',
    email: '',
    phone: '',
    message: '',
  });

  const inputStyle = {
    bgcolor: 'var(--color-background)',
    borderRadius: 1,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
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
    setStatus(contactData.emailSentSuccess);
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
        width: { xs: '100%', md: '70%', xl: '70%' },
        mx: 'auto',
      }}
    >
      <TextField
        label={contactData.formFields.fullName}
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        fullWidth
        sx={inputStyle}
      />

      <TextField
        label={contactData.formFields.mainActivity}
        name="activity"
        value={form.activity}
        onChange={handleChange}
        required
        variant="outlined"
        fullWidth
        sx={inputStyle}
      />

      <TextField
        label={contactData.formFields.email}
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        variant="outlined"
        fullWidth
        sx={inputStyle}
      />

      <TextField
        label={contactData.formFields.phone}
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        required
        variant="outlined"
        fullWidth
        sx={inputStyle}
      />

      <TextField
        label={contactData.formFields.message}
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        sx={inputStyle}
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
        {contactData.formFields.send}
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
