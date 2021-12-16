import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SearchProject = (props) => {
    const { project } = props;
    return (
        <Box sx={{ p: 2, mb: 1, borderRadius: "16px", backgroundColor: "#ebf9e9" }}>
            <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{ textAlign: "left" }}>
                        Course Code: {project.courseCode}
                    </Typography>
                </Grid>

                <Grid item xs={12} sx={{ textAlign: "left" }}>
                    <Typography variant="h5" sx={{ textAlign: "left" }}>
                        {project.tittle}
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "left" }}>
                    <p>{project.description}</p>
                </Grid>
                <Grid item xs={12}>
                    <Grid container >
                        <Grid item xs={6} sm={3} sx={{ textAlign: "left" }}>
                            <p>Status: {project.status}</p>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <p>Date: {project.date}</p>
                        </Grid>
                        <Grid item xs={12} sm={5} sx={{ textAlign: "right" }}>
                            <Typography sx={{ display: 'flex', flexWrap: 'wrap', alignItems: "center" }}>Language: {project.language.map(lang => <Typography ml={1} p={1} border={1} borderRadius={"15px"} variant="p" key={lang}>{lang}</Typography>)}</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
};

export default SearchProject;