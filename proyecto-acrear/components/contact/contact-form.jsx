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

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatus(contactData.emailSentSuccess);
        setForm({
          name: '',
          activity: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus(contactData.emailSentError);
    } finally {
      setLoading(false);
    }
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
        disabled={loading}
        sx={{
          mt: 2,
          bgcolor: 'var(--color-primary)',
          color: 'white',
          '&:hover': {
            bgcolor: 'var(--color-secondary)',
          },
        }}
      >
        {loading ? 'Enviando...' : contactData.formFields.send}
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
