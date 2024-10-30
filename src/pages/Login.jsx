// src/Login.js
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
import { useUserActions } from '../hooks/user.actions';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink if using React Router

function Login() {
    const [form, setForm] = useState({});
    const [error, setError] = useState(null);
    const userActions = useUserActions();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const loginForm = event.currentTarget;

        if (loginForm.checkValidity() === false) {
            event.stopPropagation();
        }

        const data = {
            username: form.username,
            password: form.password,
        };

        userActions.login(data)
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
                {/* Image placed on top outside the Paper */}
                {/* <Box sx={{ mb: 2, textAlign: 'center' }}>
                    <img src="/logo_pl.jpg" alt="Logo" style={{ width: '200px', height: '70px' }} />
                </Box> */}

                {/* Login Form inside Paper */}
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
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={form.username}
                                onChange={(e) => setForm({ ...form, username: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='primary'
                                sx={{ mt: 3, mb: 2 }}
                            >
                                LOGIN
                            </Button>
                            <Link
                                component={RouterLink}
                                to="/register"  // Path to your registration page
                                variant="body2"
                                sx={{ display: 'block', textAlign: 'center', mt: 2 }}
                            >
                                {"Don't have an account? Sign Up"}
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

export default Login;




// ORGINAL 
// src/Login.js
// import React, { useState } from 'react';
// import {
//     Container,
//     Box,
//     TextField,
//     Button,
//     Typography,
//     CssBaseline,
//     Avatar,
//     Paper,
//     Snackbar,
// } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useUserActions } from '../hooks/user.actions';

// function Login() {
//     const [form, setForm ] = useState({});
//     const [error, setError] = useState(null);
//     const userActions = useUserActions();

//     const handleSubmit = (event) => {

//         event.preventDefault();
        
//         const loginForm = event.currentTarget;

//         if (loginForm.checkValidity() === false ){
//             event.stopPropagation();
//         }

//         const data = {
//             username: form.username,
//             password: form.password,
//         }

//         userActions.login(data)
//         .catch((err) => {
//             if (err.message) {
//                 setError(err.request.response);
//             }
//         });
//     };
//     return (
//         <Container component="main" maxWidth="xs" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <CssBaseline />
//             <Paper elevation={6} style={{ padding: 20 }}>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5" color={"secondary"}>
//                         LOGIN
//                     </Typography>
//                     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//                         <TextField
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="username"
//                             label="Username"
//                             name="username"
//                             autoComplete="username"
//                             autoFocus
//                             value={form.username}
//                             onChange={(e) => setForm({ ...form, username: e.target.value })}
//                         />
//                         <TextField
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             autoComplete="current-password"
//                             value={form.password}
//                             onChange={(e) => setForm({ ...form, password: e.target.value })}
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                         >
//                             Sign In
//                         </Button>
//                     </Box>
//                 </Box>
//             </Paper>
//             <Snackbar 
//                     open={error}
//                     anchorOrigin={{ vertical:'top',horizontal:'center'}}
//                     message={error && <p>{error}</p>}
//                     onClose={() => setError(null)}
//                     autoHideDuration={5000}
//                     transition="grow"
                    
//                 />
//         </Container>
//     );
// }

// export default Login;
