import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  FormControlLabel,
  Checkbox,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import '../Style/Appbar.css'

const theme = createTheme();

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'rememberMe' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#1F2022',
            width: '100%',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <Typography component="h1" variant="h5" color="white" sx={{fontFamily: 'quasix' , marginTop :'20px' , fontSize :'35px'}}>
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  InputLabelProps={{
                  style: { color: 'white' },
                }}
                sx={{input : {color : 'white'}}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  InputLabelProps={{
                  style: { color: 'white' },
                }}
                sx={{input : {color : 'white'}}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputLabelProps={{
                  style: { color: 'white' },
                }}
                sx={{input : {color : 'white'}}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputLabelProps={{
                  style: { color: 'white' },
                }}
                sx={{input : {color : 'white'}}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  InputLabelProps={{
                  style: { color: 'white' },
                }}
                sx={{input : {color : 'white'}}}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 , backgroundColor:"#E21B3C",boxShadow: 'none',
                    '&:hover': {
                    backgroundColor: '#E21B3C',
                    boxShadow: 'inset 0px 0px 10px 2px rgba(0, 0, 0, 0.5)'
              }}}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2" sx={{ color: 'white' }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
  

}