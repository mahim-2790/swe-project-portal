import React from 'react'
import {Box, Grid, Typography, List, ListItem} from '@mui/material';
import footerLogo from '../../Asset/images/diulogoside.png';
import Arrow from '@mui/icons-material/ArrowForwardIos';

export default function Footer() {
    return (
        <Box px={3} py={2} mt={5} bgcolor={""} >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <img src={footerLogo} width={"45%"} height={"20%"} alt=''></img>
                    <Typography variant='subtitle1' align='left' style={{color:"#707070"}}>Daffodil International University (DIU) is recognized in independent government assessments as one of top graded universities in Bangladesh.</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant='h4' style={{color:"#3b566e"}}>Usefull Links</Typography>
                    <List>
                        <ListItem>
                            <Arrow /><a href='https://skill.jobs/' target="_blank" rel="noopener noreferrer">Skills Jobs</a>
                        </ListItem>
                        <ListItem>
                            <Arrow /><a href='http://internship.daffodilvarsity.edu.bd/?app=home' rel="noopener noreferrer" target="_blank">Internship Portal</a>
                        </ListItem>
                        <ListItem>
                            <Arrow /><a href='https://fd.daffodilvarsity.edu.bd/' target="_blank" rel="noopener noreferrer">Foundation Day</a>
                        </ListItem>
                        <ListItem>
                            <Arrow /><a href='http://studentportal.diu.edu.bd/' target="_blank" rel="noopener noreferrer">Student Portal</a>
                        </ListItem>
                        <ListItem>
                            <Arrow /><a href='https://daffodilvarsity.edu.bd/article/apps' target="_blank" rel="noopener noreferrer">Apps</a>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant='h4' style={{color:"#3b566e"}}>Get In Touch</Typography>
                    <Typography color={"#3b566e"} align='left' variant='subtitle1'>Islam Tower, Sobhanbag,<br></br>Mirpur Rd Dhaka-1207</Typography>
                    <Typography mt={1} color={"#3b566e"} align='left' variant='subtitle1'>daffodilvarsity.edu.bd/department/swe</Typography>
                    <Typography mt={1} color={"#3b566e"} align='left' variant='subtitle1'>Contact: 124-36-5956</Typography>


                </Grid>
                <Grid item xs={12}>
                <Typography style={{color:"#3b566e"}} variant='subtitle2'>Copyright © 2021 Daffodil International University. All Rights Reserved.</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
