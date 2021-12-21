import React from 'react';
import { Box, Grid, Avatar, Typography } from "@mui/material";
import useAuth from '../../hooks/useAuth';

export default function Profile() {
    const { userDetail } = useAuth();
    return (
        <Box>
            <Grid container spacing={1}>

                <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://www.w3schools.com/w3images/avatar2.png"
                        sx={{ width: "500px", height: "500px" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", }}>
                    <Typography variant='h3' pb={1} sx={{ textAlign: "left" }}>Name: {userDetail.displayName}</Typography>
                    <Typography variant='h4' sx={{ textAlign: "left" }}>Email: {userDetail.email}</Typography>
                    <Typography variant='h4' sx={{ textAlign: "left" }}>ID: {userDetail.id}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
