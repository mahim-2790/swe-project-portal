import React from 'react'
import {Grid, Typography, Box} from '@mui/material';
import Aboutsvg from '../../Asset/images/about.svg'

export default function About() {
    return (
        <Box mt={6} px={3} bgcolor={"#F8F8FF"} >   
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant='h4' textAlign={"left"} style={{color:"#707070"}}>About SPP</Typography>
                    <Typography variant='subtitle1' mt={1}  align='left' style={{color:"#707070"}}>Welcome to SWE Project Portal.SWE Project Portal a.k.a SPP provides a single point access to all semester project information for both students and teachers.<br></br>
                    All the students of department of SWE have to do a mandatory development project, research project or internship. Over a year, a student needs to attend six regular followups, three grand followups, prepare their report, presentation and lots of other stuffs. To ease up the entire process and keep track of each and every projects, SPP was created.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={Aboutsvg} width={"80%"} height={"80%"} alt='' ></img> 
                </Grid>
            </Grid>
        </Box>
    )
}
