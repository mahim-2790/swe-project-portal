import { Container, Typography, TextField, Button, FormControlLabel, Radio, FormLabel, RadioGroup, FormControl, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import LandingHeader from '../LandingHeader/LandingHeader';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser, user, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleOnSubmit = e => {
        if (loginData.password !== loginData.confirmPassword) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.id, loginData.email, loginData.password, loginData.name, loginData.role, history);
        e.preventDefault();
    }
    return (
        <div>
            <LandingHeader></LandingHeader>
            <Container>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'medium', my: 3 }}>
                    Registration
                </Typography>
                <form onSubmit={handleOnSubmit} >
                    <TextField
                        id="name"
                        name="name"
                        label="Your Name"
                        variant="standard"
                        sx={{ width: "20%", mt: 2 }}
                        onBlur={handleOnBlur}
                    />
                    <br />
                    <TextField
                        id="id"
                        name="id"
                        label="ID"
                        variant="standard"
                        sx={{ width: "20%", mt: 2 }}
                        onBlur={handleOnBlur}
                    />
                    <br />
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        variant="standard"
                        type="email"
                        sx={{ width: "20%", mt: 2 }}
                        onBlur={handleOnBlur}
                    />
                    <br />
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        variant="standard"
                        type="password"
                        sx={{ width: "20%", mt: 2 }}
                        onBlur={handleOnBlur}
                    />
                    <br />

                    <TextField
                        id="confirm-password"
                        name="confirmPassword"
                        label="Confirm Password"
                        variant="standard"
                        type="password"
                        sx={{ width: "20%", mt: 2 }}
                        onBlur={handleOnBlur}
                    />
                    <br />

                    <FormControl component="fieldset" sx={{ width: "20%", mt: 3, textAlign: 'left' }} onBlur={handleOnBlur}>
                        <FormLabel component="legend">Role</FormLabel>
                        <RadioGroup
                            aria-label="role"
                            name="role"
                        >
                            <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
                            <FormControlLabel value="student" control={<Radio />} label="Student" />

                        </RadioGroup>
                    </FormControl>
                    <br />
                    <Button variant="contained" type="submit" sx={{ mt: 3 }}>Register</Button>
                </form>
                <Typography variant="caption" display="block" gutterBottom sx={{ mt: 1, textAlign: 'center' }}>
                    Already have an account?<NavLink to="/login">Login</NavLink>
                </Typography>
                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Container >
        </div>
    );
};

export default Register;