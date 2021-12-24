import { Button, Chip, FormControl, Grid, Link, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
// import { useHistory } from 'react-router-dom';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

const names = [
    "C",
    "C++",
    "JAVA",
    "Swing",
    "HTML",
    "CSS",
    "Bootstrap",
    "Python",
    "JS",
    "PHP",
    "React.js",
    "Node.js",
    "Vue.js",
    "Larval"
];


const TeacherViewForm = (props) => {

    const projectId = props.projectId.projectId;
    console.log(projectId);



    const [project, setProject] = useState({});
    const [courseCode, setcourseCode] = useState("");
    const [teacherInitial, setTeacherInitial] = useState("");
    const [section, setSection] = useState('');
    const [languageName, setlanguageName] = useState([]);
    const [tittle, setTittle] = useState("");
    const [description, setDescription] = useState("");
    const [functionalRequirement, setFunctionalRequirement] = useState("");
    const [nonFunctionalRequirement, setNonFunctionalRequirement] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [driveLink, setDriveLink] = useState("");
    const [upcomingFeature, setUpcomingFeature] = useState("");


    useEffect(() => {
        fetch(`http://localhost:5000/project/${projectId}`)
            .then(res => res.json())
            .then(data => {
                setProject(data)
                setlanguageName(data.language);
                setcourseCode(data.courseCode);
                setSection(data.section);
                setTeacherInitial(data.teacherInitial);
                setTittle(data.tittle);
                setDescription(data.description);
                setFunctionalRequirement(data.functionalRequirement);
                setNonFunctionalRequirement(data.nonFunctionalRequirement);
                setGithubLink(data.githubLink);
                setDriveLink(data.driveLink);
                setUpcomingFeature(data.upcomingFeature);
            })
    }, [projectId])


    // const history = useHistory();

    const handleChangeCouseCode = (event) => {
        setcourseCode(event.target.value);

    };
    const handleChangeTeacherInitial = (event) => {
        setTeacherInitial(event.target.value);

    };
    const handleChangeSection = (event) => {
        setSection(event.target.value);

    };

    const handleChangeLanguage = (event) => {
        const {
            target: { value }
        } = event;
        setlanguageName(
            // On autofill we get a the stringified value.
            typeof value === "string" ? value.split(",") : value
        );

    };

    const handleChangeTittle = e => {
        setTittle(e.target.value);

    };

    const handleChangeDescription = e => {
        setDescription(e.target.value);

    };
    const handleChangeFunctionalRequirement = e => {
        setFunctionalRequirement(e.target.value);

    };
    const handleChangeNonFunctionalRequirement = e => {
        setNonFunctionalRequirement(e.target.value);

    };
    const handleChangeGithubLink = e => {
        setGithubLink(e.target.value);

    };
    const handleChangeDriveLink = e => {
        setDriveLink(e.target.value);

    };
    const handleChangeUpcomingFeature = e => {
        setUpcomingFeature(e.target.value);

    };





    // const updateProject = (obj) => {

    //     fetch(`http://localhost:5000/updateProject/${project._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(obj)
    //     }).then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount === 1) {
    //                 alert('successfully updated!!');
    //                 history.push('/home');
    //             }

    //         });
    // }


    // updateProject(project)

    console.log(project);




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
                                    Student ID: {project.student_id}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" sx={{ textAlign: "left" }}>
                                    Student Name: Mahim
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
                            <Grid item xs={12} style={{display:"flex",  justifyContent:"left"}}>
                                {
                                    languageName.map(language => <Typography key={language} mr={1}
                                        p={1}
                                       
                                        border={1}
                                        borderRadius={"15px"}
                                        variant="p"
                                        key={language}
                                    >
                                        {language}
                                    </Typography>)
                                }
                            </Grid>
                        </Grid>
                        <br />
                        {/* <TextField
                            id="description"
                            name="description"
                            label="Description"
                            variant="outlined"
                            multiline
                            maxRows={10}
                            rows={3}
                            onChange={handleChangeDescription}
                            value={description}
                            sx={{ width: "100%", mt: 2 }}
                            InputProps={{
                                readOnly: true,
                            }}
                        /> */}
                         <Grid item mt={2} xs={12}>
                                <Typography variant="h6" sx={{ textAlign: "left" }}>
                                   <span><strong>Description</strong></span><p style={{marginTop:"0"}}>{project.description}</p>
                                </Typography>
                        </Grid>

                        <br />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" sx={{ textAlign: "left" }}>
                                   <span><strong>Functional-Requirement</strong></span> <p  style={{marginTop:"0"}}>{project.functionalRequirement}</p>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                     <Typography variant="h6" sx={{ textAlign: "left" }}>
                                        <span><strong>Nonfunctional-Requirement</strong></span> <p  style={{marginTop:"0"}}>{project.nonFunctionalRequirement}</p>
                                    </Typography>
                                </Grid>
                        </Grid>
                        <Grid item xs={12} mt={2}>
                              <Typography variant="h6" sx={{ textAlign: "left" }}>
                                        <span><strong>Upcoming Feature</strong></span> <p  style={{marginTop:"0"}}>{project.upcomingFeature}</p>
                             </Typography>
                        </Grid>
                        <Grid item xs={12} mt={2}>
                        <Typography variant="h6" sx={{ textAlign: "left" }}><strong>Links</strong></Typography>
                            {/* <a target="_blank" href={project.githubLink}><GitHubIcon style={{width:"40px", height:"40px"}}/>  </a> 
                            <a href='www.google.com'> <CloudCircleIcon style={{width:"40px", height:"40px"}}/> </a>
                            <Link to="www.google.com" target={'_blank'}>Link</Link> */}
                            {/* {window.open(project.githubLink) target='_blank'} */}
                        </Grid>
                       

                        <Button
                            variant="contained"
                            type="Update"
                            sx={{ mt: 3, px: 9, bgcolor: "#0EA5E9" }}
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </div>
    );
};

export default TeacherViewForm;