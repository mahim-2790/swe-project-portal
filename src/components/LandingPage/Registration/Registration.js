import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LandingHeader from '../LandingHeader/LandingHeader';

const Registration = () => {
    const [registrationData, setRegistrationData] = useState({});
    const { createUser } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = { ...registrationData };
        newRegistrationData[field] = value;
        setRegistrationData(newRegistrationData);
        // e.preventDefault();
    };
    const handleOnSubmit = e => {
        createUser(registrationData.email, registrationData.password, registrationData.name, registrationData.role);
        e.preventDefault();
    };
    return (
        <div>
            <LandingHeader></LandingHeader>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'medium', my: 3 }}>
                Registration
            </Typography>
            <form onSubmit={handleOnSubmit} >
                <TextField
                    id="name"
                    label="Your Name"
                    variant="standard"
                    sx={{ width: "20%", mt: 2 }}
                    onBlur={handleOnBlur}
                />
                <br />
                <TextField
                    id="id"
                    label="ID"
                    variant="standard"
                    sx={{ width: "20%", mt: 2 }}
                    onBlur={handleOnBlur}
                />
                <br />
                <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    type="email"
                    sx={{ width: "20%", mt: 2 }}
                    onBlur={handleOnBlur}
                />
                <br />
                <TextField
                    id="password"
                    label="Password"
                    variant="standard"
                    type="password"
                    sx={{ width: "20%", mt: 2 }}
                    onBlur={handleOnBlur}
                />
                <br />

                <TextField
                    id="confirm-password"
                    label="Confirm Password"
                    variant="standard"
                    type="password"
                    sx={{ width: "20%", mt: 2 }}
                    onBlur={handleOnBlur}
                />
                <br />

                <FormControl component="fieldset" sx={{ width: "20%", mt: 3, textAlign: 'left' }}>
                    <FormLabel component="legend">Role</FormLabel>
                    <RadioGroup
                        aria-label="role"

                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
                        <FormControlLabel value="student" control={<Radio />} label="Student" />

                    </RadioGroup>
                </FormControl>
                <br />
                <Button variant="contained" type="submit" sx={{ mt: 3 }}>Register</Button>
            </form>
            <Typography variant="caption" display="block" gutterBottom sx={{ mt: 1, textAlign: 'center' }}>
                Already have an account?<Link to="/login">Login</Link>
            </Typography>
        </div>
    );
};

export default Registration;