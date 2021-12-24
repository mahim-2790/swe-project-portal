import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import CloudCircleIcon from '@mui/icons-material/CloudCircle';
// import { useHistory } from 'react-router-dom';

const TeacherViewForm = (props) => {

    const projectId = props.projectId.projectId;



    const [project, setProject] = useState({});
    const [student, setStudent] = useState({});
    const [languageName, setlanguageName] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/project/${projectId}`)
            .then(res => res.json())
            .then(data => {
                setProject(data)
                setlanguageName(data.language);
            })
    }, [projectId])

    useEffect(() => {
        fetch(`http://localhost:5000/students/${project?.student_id}`)
            .then(res => res.json())
            .then(data => {
                setStudent(data)
                console.log(data)
            })
    }, [project])



    const handleAcceptClick = e => {
        project.status = 'Accepted';
        updateProject();
        e.preventDefault();

    }
    const handleRejectClick = e => {
        project.status = 'rejected';
        updateProject();
        e.preventDefault();
    }






    const updateProject = () => {
        const filtered = {};
        for (const key in project) {
            if (key !== '_id') {
                filtered[key] = project[key];
            }
        }

        fetch(`http://localhost:5000/updateProject/${project._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(filtered)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    alert('successfully updated!!');
                    // history.push('/home');
                }

            });
    }








    return (
        <div>
            <Box>
                <form >
                    <Typography
                        sx={{ textAlign: "left", fontWeight: "bold", color: "#707070" }}
                    >
                        Student Details
                    </Typography>
                    <Box sx={{ my: 1, p: 2, borderRadius: "15px", bgcolor: "#F2F8FE" }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" sx={{ textAlign: "left" }}>
                                    ID: {project.student_id}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" sx={{ textAlign: "left" }}>
                                    Name: {student?.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Typography
                        sx={{ textAlign: "left", fontWeight: "bold", color: "#707070" }}
                    >
                        Course Details
                    </Typography>
                    <Box sx={{ my: 1, p: 2, borderRadius: "15px", bgcolor: "#F2F8FE" }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" sx={{ textAlign: "left" }}>
                                    Course Code: {project.courseCode}
                                </Typography>
                            </Grid>
                            <Grid item xs={0} sm={6}></Grid>
                            <Grid item xs={6} sx={{ mt: 1.5 }}>
                                <Typography variant="h6" sx={{ textAlign: "left" }}>
                                    Course Code: {project.teacherInitial}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ mt: 1.5 }}>
                                <Typography variant="h6" sx={{ textAlign: "left" }}>
                                    Course Code: {project.section}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Typography
                        sx={{ textAlign: "left", fontWeight: "bold", color: "#707070" }}
                    >
                        Project Details
                    </Typography>
                    <Box sx={{ my: 1, p: 2, borderRadius: "15px", bgcolor: "#F2F8FE" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h4" sx={{ textAlign: "left" }}>
                                    {project.tittle}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ display: "flex", justifyContent: "left" }}>
                                {
                                    languageName.map(language => <Typography key={language} mr={1}
                                        p={1}

                                        border={1}
                                        borderRadius={"15px"}
                                        variant="p"
                                    >
                                        {language}
                                    </Typography>)
                                }
                            </Grid>
                        </Grid>
                        <br />
                        <Grid item mt={2} xs={12}>
                            <Typography variant="h6" sx={{ textAlign: "left" }}>
                                <span><strong>Description</strong></span><p style={{ marginTop: "0" }}>{project.description}</p>
                            </Typography>
                        </Grid>

                        <br />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" sx={{ textAlign: "left" }}>
                                    <span><strong>Functional-Requirement</strong></span> <p style={{ marginTop: "0" }}>{project.functionalRequirement}</p>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" sx={{ textAlign: "left" }}>
                                    <span><strong>Nonfunctional-Requirement</strong></span> <p style={{ marginTop: "0" }}>{project.nonFunctionalRequirement}</p>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} mt={2}>
                            <Typography variant="h6" sx={{ textAlign: "left" }}>
                                <span><strong>Upcoming Feature</strong></span>
                                <p style={{ marginTop: "0" }}>{project.upcomingFeature}</p>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} mt={2}>
                            <Typography variant="h6" sx={{ textAlign: "left" }}><strong>Links</strong>
                                <p> <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>
                                <p> <a href={project.driveLink} target="_blank" rel="noopener noreferrer">Google Drive</a></p>
                            </Typography>
                        </Grid>


                        <Button
                            variant="contained"
                            type="Update"
                            sx={{ mt: 3, px: 9, bgcolor: "#0EA5E9" }}
                            onClick={handleAcceptClick}
                        >
                            Accept
                        </Button>
                        <Button
                            onClick={handleRejectClick}
                            variant="contained"
                            type="Update"
                            sx={{ mt: 3, px: 9, bgcolor: "#0EA5E9" }}
                        >
                            Reject
                        </Button>
                    </Box>
                </form>
            </Box>
        </div>
    );
};

export default TeacherViewForm;