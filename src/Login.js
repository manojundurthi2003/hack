import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Typography, Box, FormControl, FormLabel, Link, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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

export default function Login({ setUserState }) { // added setUserState for managing user login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Reset error when form is valid
    setError(false);

    // Simple validation to check if both fields are filled
    if (email === '' || password === '') {
      setError(true);
      return;
    }

    // Simulate user check (replace with real API call)
    if (email === 'registered@example.com' && password === 'password123') {
      alert('Login successful');
      setUserState({ _id: 1, email }); // Set user state to indicate login (dummy data)
      navigate('/innovation'); // Navigate to the innovation form after login
    } else {
      alert('Invalid credentials, please try again.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <Card>
      <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
        Sign In
      </Typography>

      {error && <Alert severity="error">Both fields are required!</Alert>}

      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <FormLabel>Email</FormLabel>
          <TextField
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            required
            fullWidth
            variant="outlined"
          />
        </FormControl>

        <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
          Login
        </Button>

        <Typography sx={{ textAlign: 'center', marginTop: 2 }}>
          Don't have an account?{' '}
          <Link component="button" onClick={handleRegisterRedirect} sx={{ cursor: 'pointer' }}>
            Register
          </Link>
        </Typography>
      </Box>
    </Card>
  );
}
