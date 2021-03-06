import { Container, Typography, TextField, Button, FormControlLabel, Radio, FormLabel, RadioGroup, FormControl } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import LandingHeader from '../LandingHeader/LandingHeader';
import Grid from "@mui/material/Grid";
import illastrateRegistration from "../../../Asset/images/registration_undraw.svg"
import Footer from '../../Footer/Footer';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const [role, setRole] = useState('');
    const history = useHistory();
    const { registerUser, user, authError } = useAuth();

    const handleRoleOnChange = e => {
        setRole(e.target.value);
    };

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, '-', value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const controlRadio = e => {

    }
    const handleOnSubmit = e => {
        if (loginData.password !== loginData.confirmPassword) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.id, loginData.email, loginData.password, loginData.name, loginData.role, loginData?.teacherInitial, history);
        e.preventDefault();
    }
    return (
        <div>
            <LandingHeader></LandingHeader>
            <Container style={{ paddingTop: "5" }}>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={illastrateRegistration} style={{ width: "90%" }} alt='illustration' />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 'medium', my: 3 }}>
                            Registration
                        </Typography>
                        <form onSubmit={handleOnSubmit} >

                            <TextField
                                id="name"
                                name="name"
                                label="Your Name"
                                variant="standard"
                                sx={{ width: "90%", mt: 2 }}
                                onBlur={handleOnBlur}
                            />
                            <br />
                            <TextField
                                id="id"
                                name="id"
                                label="ID"
                                variant="standard"
                                sx={{ width: "90%", mt: 2 }}
                                onBlur={handleOnBlur}
                            />
                            <br />
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                variant="standard"
                                type="email"
                                sx={{ width: "90%", mt: 2 }}
                                onBlur={handleOnBlur}
                            />
                            <br />
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                variant="standard"
                                type="password"
                                sx={{ width: "90%", mt: 2 }}
                                onBlur={handleOnBlur}
                            />
                            <br />

                            <TextField
                                id="confirm-password"
                                name="confirmPassword"
                                label="Confirm Password"
                                variant="standard"
                                type="password"
                                sx={{ width: "90%", mt: 2 }}
                                onBlur={handleOnBlur}
                            />
                            <br />

                            <FormControl component="fieldset" sx={{ width: "90%", mt: 3, textAlign: 'left' }} onBlur={handleOnBlur} onChange={handleRoleOnChange}>
                                <FormLabel component="legend">Role</FormLabel>
                                <RadioGroup
                                    aria-label="role"
                                    name="role"
                                >
                                    <FormControlLabel value="teacher" control={<Radio />} label="Teacher" onClick={controlRadio} />
                                    <FormControlLabel value="student" control={<Radio />} label="Student" />

                                </RadioGroup>
                            </FormControl>
                            {
                                role === 'teacher' ? <TextField
                                    id="teacher_initial"
                                    name="teacherInitial"
                                    label="Your Initial"
                                    variant="standard"
                                    sx={{ width: "90%", mt: 2 }}
                                    onBlur={handleOnBlur}
                                /> :
                                    ''
                            }
                            <br />
                            <Button variant="contained" sx={{ mt: 3, px: 9, bgcolor: "#0EA5E9" }} type="submit">Register</Button>
                        </form>
                        <Typography variant="caption" display="block" gutterBottom sx={{ mt: 2, textAlign: 'center' }}>
                            Already have an account?<NavLink to="/login">Login</NavLink>
                        </Typography>
                        {user?.email && <div severity="success">User Created successfully!</div>}
                        {authError && <div severity="error">{authError}</div>}
                    </Grid>


                </Grid>


            </Container >
            <Footer></Footer>
        </div>
    );
};

export default Register;