import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Box } from '@mui/system';
import ApproveProject from './TeacherHomeProject';
import { Typography, TextField, Grid, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
const TeacherHomeProjects = () => {
    const [projects, setProjects] = useState([]);
    const [teacher, setTeacher] = useState({});
    const { userDetail } = useAuth();
    const [semester, setSemester] = useState("");
    const [searchId, setSearchId] = useState("");
    const [filteredProject, setFilteredProject] = useState([]);


    useEffect(() => {
        async function getTeacher() {
            let res = await fetch(`https://secure-ravine-11487.herokuapp.com/teachers/${userDetail?.id}`);
            let data = await res.json();
            setTeacher(data);
        }
        getTeacher();
    }, [userDetail])

    useEffect(() => {
        async function fetchProjects() {
            let res = await fetch(`https://secure-ravine-11487.herokuapp.com/teacher/projects/${teacher?.teacherInitial}`);
            let data = await res.json();
            setProjects(data);
            setFilteredProject(data);
        }
        fetchProjects();
    }, [teacher?.teacherInitial]);


    const handleChangeSemester = (event) => {
        setSemester(event.target.value);
        event.preventDefault();
    };

    const handleIdOnChnage = e => {
        setSearchId(e.target.value);
        e.preventDefault();
    };
    console.log(semester, searchId);

    useEffect(() => {
        let filtered = [];
        if (semester) {
            filtered = projects.filter(project => project?.semester === semester.toLowerCase());
            setFilteredProject(filtered);

            if (searchId) {
                filtered = filtered.filter(project => project?.student_id === searchId)
                setFilteredProject(filtered);
            }
        }
        else if (searchId) {
            filtered = projects.filter(project => project?.student_id === searchId)
            setFilteredProject(filtered);
        }
        else setFilteredProject(projects);
    }, [searchId, semester, projects])



    return (
        <>
            <Box sx={{ my: 1, p: 2, borderRadius: "15px", bgcolor: "#F5F5F5" }}>
                <Typography
                    sx={{ textAlign: "left", fontWeight: "bold", color: "#707070" }}
                >
                    Filter As
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField
                            id="student_id"
                            name="student_id"
                            label="Student id"
                            variant="outlined"
                            sx={{ width: "100%", mt: 0 }}
                            onChange={handleIdOnChnage}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl required sx={{ minWidth: "100%" }}>
                            <InputLabel id="semester">Semester</InputLabel>
                            <Select
                                labelId="semester"
                                id="semester"
                                name="semester"
                                value={semester}
                                label="Semester"
                                onChange={handleChangeSemester}
                                required
                            >
                                <MenuItem value="Spring-2021">Spring-2021</MenuItem>
                                <MenuItem value="Summer-2021">Summer-2021</MenuItem>
                                <MenuItem value="Fall-2021">Fall-2021</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>
            </Box>
            <div sx={{ mt: 5 }}>
                {
                    filteredProject.map(project => <ApproveProject key={project._id} project={project} />)
                }

            </div>
        </>

    );
};

export default TeacherHomeProjects;