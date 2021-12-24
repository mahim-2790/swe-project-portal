import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Box } from '@mui/system';
import ApproveProject from './TeacherHomeProject';
import { Typography, TextField,Grid, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
const TeacherHomeProjects = () => {
    const [projects, setProjects] = useState([]);
    const [teacher, setTeacher] = useState({});

    const { userDetail } = useAuth();
    const [semester, setSemester] = useState("");

    const handleChangeCouseCode = (event) => {
        setSemester(event.target.value);
        // assignValue(event.target.name, event.target.value);
      };
    //   const assignValue = (field, value) => {
    //     const newValue = { ...projectDetails };
    //     newValue[field] = value;
    //     setProjectDetails(newValue);
    //   };

    useEffect(() => {
        async function getTeacher() {
            let res = await fetch(`http://localhost:5000/teachers/${userDetail?.id}`);
            let data = await res.json();
            setTeacher(data);
        }
        getTeacher();
    }, [userDetail])

    useEffect(() => {
        async function fetchProjects() {
            let res = await fetch(`http://localhost:5000/teacher/projects/${teacher?.teacherInitial}`);
            let data = await res.json();
            setProjects(data);
        }
        fetchProjects();
    }, [teacher?.teacherInitial]);

    return (
        <>
         <Box sx={{ my: 1, p: 2, borderRadius: "15px", bgcolor: "#F2F8FE" }}>
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
                    sx={{ width: "100%", mt: 0}}
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
                        onChange={handleChangeCouseCode}
                        required
                        >
                        <MenuItem value="Spring-21">Spring 21</MenuItem>
                        <MenuItem value="Summer-21">Summer 21</MenuItem>
                        <MenuItem value="Fall-21">Fall 21</MenuItem>
                        </Select>
                 </FormControl>
                </Grid>

             </Grid>   
            </Box>    
        <div sx={{ mt: 5 }}>
            {
                projects.map(project => <ApproveProject key={project._id} project={project} />)
            }

        </div>
        </>

    );
};

export default TeacherHomeProjects;