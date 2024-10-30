import { Grid, TextField, Button,Snackbar } from "@mui/material";
import React, { useState } from "react";

import { useUserActions } from "../../hooks/user.actions";

function LoginForm(){


    const [form, setForm ] = useState({});
    const [error, setError] = useState(null);
    const userActions = useUserActions();

    const handleSubmit = (event) => {

        event.preventDefault();
        
        const loginForm = event.currentTarget;

        if (loginForm.checkValidity() === false ){
            event.stopPropagation();
        }

        const data = {
            username: form.username,
            password: form.password,
        }

        userActions.login(data)
        .catch((err) => {
            if (err.message) {
                setError(err.request.response);
            }
        });
    };

    return (

        <div>
            <form
                id="login-form"
                className="border p-4 rounded"
                onSubmit={handleSubmit}
                >
                                   
                <Grid item  xs={12} sm={12} md={12}>
                    <TextField
                        variant='outlined'
                        fullWidth
                        value={form.username}
                        label="Enter Username"
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        required
                        type="text"
                        />

                </Grid>
                <br />
                <br />
                <Grid item  xs={12} sm={12} md={12}>
                <TextField
                        variant='outlined'
                        fullWidth
                        value={form.password}
                        label="Enter Password"
                        minLength="8"
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                        type="password"
                    />
                </Grid>
                <Snackbar 
                    open={error}
                    anchorOrigin={{ vertical:'top',horizontal:'center'}}
                    message={error && <p>{error}</p>}
                    onClose={() => setError(null)}
                    autoHideDuration={5000}
                    transition="grow"
                    
                />

                <br /><br />
                <Button
                    disabled={!form.password || !form.username}
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                >
                LOGIN
                </Button>                    
            </form>
        </div>
          
    )
   
}

export default LoginForm;