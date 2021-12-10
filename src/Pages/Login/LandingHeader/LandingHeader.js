import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import diuLogo from '../../../Asset/images/daffodil-international-university-logo.png';

const LandingHeader = () => {
    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: "#F2F8FE" }} sx={{ boxShadow: 0 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={diuLogo} alt="logo" style={{ width: 35 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            style={{ color: "#707070" }}
                            sx={{ mx: 2, display: { xs: 'flex', md: 'flex' } }}
                        >
                            SWE Project Portal
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default LandingHeader;