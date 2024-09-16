import * as React from 'react';
import { TextField, Button, Typography, Box, FormControl, FormLabel } from '@mui/material';
import { styled } from '@mui/system';

const Card = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: '400px',
  margin: 'auto',
  marginTop: theme.spacing(8),
  boxShadow: theme.shadows[5],
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
}));

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('User registered successfully!');
  };

  return (
    <Card>
      <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <FormLabel>Email</FormLabel>
          <TextField
            id="email"
            type="email"
            placeholder="your@email.com"
            required
            fullWidth
            variant="outlined"
          />
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <FormLabel>Password</FormLabel>
          <TextField
            id="password"
            type="password"
            placeholder="••••••"
            required
            fullWidth
            variant="outlined"
          />
        </FormControl>

        <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
          Register
        </Button>
      </Box>
    </Card>
  );
}
