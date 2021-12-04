import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const LandingHeader = () => {
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={""} alt="logo" />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
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