import React from 'react';
import { Box, Grid, Avatar, Typography } from "@mui/material";

export default function Profile() {
    return (
        <Box>
            <Grid container spacing={1}>

                <Grid item xs={12} sm={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://www.w3schools.com/w3images/avatar2.png"
                        sx={{width:"500px", height:"500px"}}
                    />
                </Grid>
                <Grid item xs={12} sm={6} sx={{display:"flex", justifyContent:"center", alignItems:"flex-start", flexDirection:"column", }}>
                    <Typography variant='h3' pb={1} sx={{textAlign:"left"}}>Name: </Typography>
                    <Typography variant='h4' sx={{textAlign:"left"}}>Email: </Typography>
                    <Typography variant='h4' sx={{textAlign:"left"}}>ID: </Typography>
                    <Typography variant='h4' sx={{textAlign:"left"}}>Section: </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
