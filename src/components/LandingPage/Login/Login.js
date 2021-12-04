import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginPic from '../../../Asset/images/undraw_programming_re_kg9v.svg';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, login, error } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        e.preventDefault();
    };

    const handleOnSubmit = e => {
        login(loginData.email, loginData.password);
        e.preventDefault();
    };

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <img src={loginPic} alt="illustration" style={{ width: "90%" }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ mb: 5 }}>
                        Login
                    </Typography>
                    <form action="" onSubmit={handleOnSubmit}>
                        <div>
                            <TextField
                                id="standard-basic"
                                label="Username/Email"
                                variant="standard"
                                sx={{ width: "85%" }}
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                id="standard-basic"
                                label="Password"
                                variant="standard"
                                sx={{ width: "85%", mt: 3 }}
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                            />
                            <Typography variant="caption" display="block" gutterBottom sx={{ mb: 2, textAlign: 'right', mr: 5 }}>
                                <Link to="/login">Forgot password?</Link>
                            </Typography>
                        </div>
                        {user?.email && <Alert severity="success">Login Successfully</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
                        <Button variant="contained" type="submit">Login</Button>

                    </form>
                    <Typography variant="caption" display="block" gutterBottom sx={{ mt: 1, textAlign: 'center' }}>
                        New User?<Link to="/login">Register</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;