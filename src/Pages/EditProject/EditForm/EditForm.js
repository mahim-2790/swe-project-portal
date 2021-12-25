import { Button, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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


const EditForm = (props) => {

    const projectId = props.projectId.projectId;

    const date = new Date().toLocaleDateString();

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
        fetch(`https://secure-ravine-11487.herokuapp.com/project/${projectId}`)
            .then(res => res.json())
            .then(data => {
                setProject(data)
                setlanguageName(Object.values(data.language));
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
    console.log(teacherInitial);


    const history = useHistory();

    const handleChangeCouseCode = (event) => {
        setcourseCode(event.target.value);
        assignValue(event.target.name, event.target.value);
    };
    const handleChangeTeacherInitial = (event) => {
        setTeacherInitial(event.target.value);
        assignValue(event.target.name, event.target.value);
    };
    const handleChangeSection = (event) => {
        setSection(event.target.value);
        assignValue(event.target.name, event.target.value);
    };

    const handleChangeLanguage = (event) => {
        const {
            target: { value }
        } = event;
        setlanguageName(
            // On autofill we get a the stringified value.
            typeof value === "string" ? value.split(",") : value
        );
        assignValue(event.target.name, typeof value === "string" ? value.split(",") : value);
    };

    const handleChangeTittle = e => {
        setTittle(e.target.value);
        assignValue(e.target.name, e.target.value);
    };

    const handleChangeDescription = e => {
        setDescription(e.target.value);
        assignValue(e.target.name, e.target.value);
    };
    const handleChangeFunctionalRequirement = e => {
        setFunctionalRequirement(e.target.value);
        assignValue(e.target.name, e.target.value);
    };
    const handleChangeNonFunctionalRequirement = e => {
        setNonFunctionalRequirement(e.target.value);
        assignValue(e.target.name, e.target.value);
    };
    const handleChangeGithubLink = e => {
        setGithubLink(e.target.value);
        assignValue(e.target.name, e.target.value);
    };
    const handleChangeDriveLink = e => {
        setDriveLink(e.target.value);
        assignValue(e.target.name, e.target.value);
    };
    const handleChangeUpcomingFeature = e => {
        setUpcomingFeature(e.target.value);
        assignValue(e.target.name, e.target.value);
    };

    const assignValue = (field, value) => {
        const newValue = { ...project };
        newValue[field] = value;
        setProject(newValue);
    };



    const updateProject = (obj) => {

        fetch(`https://secure-ravine-11487.herokuapp.com/updateProject/${project._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    alert('successfully updated!!');
                    history.push('/home');
                }

            });
    }



    const handleOnSubmit = e => {
        assignValue('modifiedDate', date);
        const filtered = {};
        for (const key in project) {
            if (key !== '_id') {
                filtered[key] = project[key];
            }
        }
        updateProject(filtered);

        e.preventDefault();
    };

    return (
        <div>
            <Box>
                <form onSubmit={handleOnSubmit}>
                    <Typography
                        sx={{ textAlign: "left", fontWeight: "bold", color: "#707070" }}
                    >
                        Course Details
                    </Typography>
                    <Box sx={{ my: 1, p: 2, borderRadius: "15px", bgcolor: "#F2F8FE" }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <FormControl required sx={{ minWidth: "100%" }}>
                                    <InputLabel id="course-code">Course Code</InputLabel>
                                    <Select
                                        labelId="course-code"
                                        id="courseCode"
                                        name="courseCode"
                                        value={courseCode}
                                        label="Course Code"
                                        onChange={handleChangeCouseCode}
                                        required
                                    >
                                        <MenuItem value="SE223">SE223</MenuItem>
                                        <MenuItem value="SE332">SE332</MenuItem>
                                        <MenuItem value={30}>SE421</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={0} sm={6}></Grid>
                            <Grid item xs={6} sx={{ mt: 1.5 }}>
                                <FormControl required sx={{ minWidth: "100%" }}>
                                    <InputLabel id="course-code">Teacher Initial</InputLabel>
                                    <Select
                                        labelId="teacherInitial"
                                        id="teacherInitial"
                                        name="teacherInitial"
                                        label="Teacher Initial"
                                        value={teacherInitial}
                                        onChange={handleChangeTeacherInitial}
                                        required
                                    >
                                        <MenuItem value="MSA">MSA</MenuItem>
                                        <MenuItem value="SsH">SsH</MenuItem>
                                        <MenuItem value="MR">MR</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sx={{ mt: 1.5 }}>
                                <FormControl required sx={{ minWidth: "100%" }}>
                                    <InputLabel id="course-code">Section</InputLabel>
                                    <Select
                                        labelId="section"
                                        id="section"
                                        name="section"
                                        value={section}
                                        label="Section"
                                        onChange={handleChangeSection}
                                        required
                                    >
                                        <MenuItem value="A">A</MenuItem>
                                        <MenuItem value="B">B</MenuItem>
                                        <MenuItem value="C">C</MenuItem>
                                        <MenuItem value="D">D</MenuItem>
                                        <MenuItem value="E">E</MenuItem>
                                        <MenuItem value="F">F</MenuItem>
                                    </Select>
                                </FormControl>
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
                            <Grid item xs={8}>
                                <TextField
                                    id="tittle"
                                    name="tittle"
                                    label="Tittle"
                                    variant="outlined"
                                    sx={{ width: "100%", mt: 2 }}
                                    onChange={handleChangeTittle}
                                    value={tittle}
                                    required
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl required sx={{ width: "100%", mt: 2 }}>
                                    <InputLabel id="language-label">Language</InputLabel>
                                    <Select
                                        labelId="language-label"
                                        id="language"
                                        name="language"
                                        multiple
                                        value={languageName}
                                        onChange={handleChangeLanguage}
                                        required
                                        input={
                                            <OutlinedInput id="select-multiple-chip" label="Chip" />
                                        }
                                        renderValue={(selected) => (
                                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <br />
                        <TextField
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
                            required
                        />
                        <br />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="functional-requirement"
                                    name="functionalRequirement"
                                    label="Functional Requirement"
                                    variant="outlined"
                                    multiline
                                    maxRows={10}
                                    rows={5}
                                    sx={{ width: "100%", mt: 2 }}
                                    onChange={handleChangeFunctionalRequirement}
                                    value={functionalRequirement}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="non-functional-requirement"
                                    name="nonFunctionalRequirement"
                                    label="Non Functional Requirement"
                                    variant="outlined"
                                    multiline
                                    maxRows={10}
                                    rows={5}
                                    sx={{ width: "100%", mt: 2 }}
                                    onChange={handleChangeNonFunctionalRequirement}
                                    value={nonFunctionalRequirement}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            id="github-link"
                            name="githubLink"
                            label="Github Link"
                            variant="outlined"
                            sx={{ width: "100%", mt: 2 }}
                            onChange={handleChangeGithubLink}
                            value={githubLink}

                        />
                        <TextField
                            id="drive-link"
                            name="driveLink"
                            label="Drive Link"
                            variant="outlined"
                            sx={{ width: "100%", mt: 2 }}
                            onChange={handleChangeDriveLink}
                            value={driveLink}

                        />
                        <TextField
                            id="upcoming-feature"
                            name="upcomingFeature"
                            label="Upcoming Feature"
                            variant="outlined"
                            multiline
                            maxRows={10}
                            rows={3}
                            sx={{ width: "100%", mt: 2 }}
                            onChange={handleChangeUpcomingFeature}
                            value={upcomingFeature}

                        />

                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ mt: 3, px: 9, bgcolor: "#0EA5E9" }}
                        >
                            Update
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ mt: 3, px: 9, bgcolor: "#0EA5E9" }}
                            onClick={() => { history.push('/home') }}
                        >
                            Cancel
                        </Button>
                    </Box>
                </form>

            </Box>
        </div>
    );
};

export default EditForm;