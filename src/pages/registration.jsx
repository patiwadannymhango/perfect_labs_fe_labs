// src/RegistrationPage.js
import React, { useState } from 'react';
import {
    Container,
    Box,
    TextField,
    Button,
    Typography,
    CssBaseline,
    Avatar,
    Paper,
    Snackbar,
    Link
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useUserActions } from '../hooks/user.actions';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink

// Validation schema using Zod
const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword'], // Set the path to the field where the error should be shown
});

function Registration() {
    const [error, setError] = useState(null);
    const userActions = useUserActions();
    const navigate = useNavigate(); // For navigation after successful registration
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });
    

    const onSubmit = (data) => {
        // console.log('Registration Data:', data);
        userActions.register(data)
        .catch((err) => {
            if (err.message) {
                setError(err.request.response);
            }
        });
    };

    return (
        <Container component="main" maxWidth="xs" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                {/* Registration Form inside Paper */}
                <Paper elevation={6} style={{ padding: 20, width: '100%' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ mb: 2, textAlign: 'center' }}>
                            <img src="/logo_pl.jpg" alt="Logo" style={{ width: '200px', height: '65px' }} />
                        </Box>
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Register
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Username"
                                autoComplete="username"
                                autoFocus
                                {...register('username')}
                                error={!!errors.username}
                                helperText={errors.username?.message}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                autoComplete="email"
                                {...register('email')}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="First Name"
                                autoComplete="given-name"
                                {...register('first_name')}
                                error={!!errors.firstName}
                                helperText={errors.firstName?.message}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Last Name"
                                autoComplete="family-name"
                                {...register('last_name')}
                                error={!!errors.lastName}
                                helperText={errors.lastName?.message}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                autoComplete="new-password"
                                {...register('password')}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Confirm Password"
                                type="password"
                                autoComplete="new-password"
                                {...register('confirmPassword')}
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword?.message}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='primary'
                                sx={{ mt: 3, mb: 2 }}
                            >
                                REGISTER
                            </Button>
                            <Link
                                component={RouterLink}
                                to="/login"  // Path to your login page
                                variant="body2"
                                sx={{ display: 'block', textAlign: 'center', mt: 2 }}
                            >
                                {"Already have an account? Login"}
                            </Link>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Snackbar 
                open={!!error}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message={error && <p>{error}</p>}
                onClose={() => setError(null)}
                autoHideDuration={5000}
                transition="grow"
            />
        </Container>
    );
}

export default Registration;
