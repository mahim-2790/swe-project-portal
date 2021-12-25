import { Container, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../Asset/images/undraw_programming_re_kg9v.svg'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="illustration" style={{ width: "90%" }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ mb: 5 }}>
                        Login
                    </Typography>
                    <form action="" onSubmit={handleLoginSubmit}>
                        <div>
                            <TextField
                                id="email"
                                label="Email"
                                variant="standard"
                                sx={{ width: "85%" }}
                                type="email"
                                name="email"
                                onBlur={handleOnChange}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                variant="standard"
                                sx={{ width: "85%", mt: 3 }}
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                            />
                            <Typography variant="caption" display="block" gutterBottom sx={{ mb: 2, textAlign: 'right', mr: 5 }}>
                                <NavLink to="/login">Forgot password?</NavLink>
                            </Typography>
                        </div>
                        {/* {user?.email && <Alert severity="success">Login Successfully</Alert>} */}
                        {authError && <div s>{authError}</div>}
                        <Button variant="contained" type="submit" sx={{ mt: 1, px: 9, bgcolor: "#0EA5E9" }}>Login</Button>
                    </form>
                    <Typography variant="caption" display="block" gutterBottom sx={{ mt: 1, textAlign: 'center' }}>
                        New User?<NavLink to="/registration">Register</NavLink>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;