import { Typography, TextField, Button, FormControl } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { Warning } from "@mui/icons-material";

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
  "Boostrap",
  "Python",
  "JS",
  "PHP",
  "React.js",
  "Node.js",
  "Vue.js",
  "Laravel"
];

// function getStyles(name, languageName, theme) {
//   return {
//     fontWeight:
//       languageName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium
//   };
// }

export default function AddProject() {
  // const { userDetail } = useAuth();
  const creationDate = new Date().toLocaleDateString();
  const user = JSON.parse(sessionStorage.getItem('user'));
  const id = user.id;
  const initialObj = {
    student_id: id,
    date: creationDate,
    status: 'pending'
  };
  const [courseCode, setcourseCode] = useState("");
  const [teacherInitial, setTeacherInitial] = useState("");
  const [section, setSection] = useState("");
  const [languageName, setlanguageName] = useState([]);
  const [insertionStatus, setInsertationStatus] = useState({});
  const history = useHistory();
  const [allProjects, setAllProjects] = useState([]);




  const [projectDetails, setProjectDetails] = useState(initialObj);


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

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    assignValue(field, value);
  }

  const assignValue = (field, value) => {
    const newValue = { ...projectDetails };
    newValue[field] = value;
    setProjectDetails(newValue);
  };


  const pushProject = () => {
    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(projectDetails)
    })
      .then(res => res.json())
      .then(data => setInsertationStatus(data))
  };




  const handleOnSubmit = e => {

    fetch(`http://localhost:5000/projects`)
      .then(res => res.json())
      .then(data => setAllProjects(data))

    const filteredProject = allProjects.filter(existingProject => existingProject.tittle === projectDetails.tittle);
    console.log(filteredProject);
    if (id) {
      if (filteredProject.length === 0) {
        pushProject();
        if (insertionStatus) {
          setProjectDetails(initialObj);
          alert(`Project is successfully created.`);
          history.push('/home');
        } else {
          alert('something went wrong');
        }
      }
      else {
        alert('Tittle with this project already exist');
      }
    } else {
      alert('Session Out Please Login Again');
    }

    e.preventDefault();
  };



  return (
    <Box>
      <form onSubmit={handleOnSubmit}>
        <Typography
          sx={{ textAlign: "left", fontWeight: "bold", color: "#707070" }}
        >
          Course Details
        </Typography>
        <Box sx={{ my: 1, p: 2, borderRadius: "15px", bgcolor: "#F2F8FE" }}>
          <Grid container spacing={1}>
            <Grid item xs={6} >
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
            <Grid item xs={6}>
            
              <TextField
                  id="semster"
                  name="semster"
                  label="Semester"
                  variant="outlined"
                  sx={{ width: "100%"}}
                  onBlur={handleOnChange}
                  required
                />
               
            </Grid>
            <Grid item xs={6} sx={{ mt: 1.5 }}>
              <FormControl required sx={{ minWidth: "100%" }}>
                <InputLabel id="course-code">Teacher Initial</InputLabel>
                <Select
                  labelId="teacherInitial"
                  id="teacherInitial"
                  name="teacherInitial"
                  value={teacherInitial}
                  label="Teacher Initial"
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
                onBlur={handleOnChange}
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
            onBlur={handleOnChange}
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
                onBlur={handleOnChange}
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
                onBlur={handleOnChange}
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
            onBlur={handleOnChange}
            required
          />
          <TextField
            id="drive-link"
            name="driveLink"
            label="Drive Link"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            onBlur={handleOnChange}
            required
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
            onBlur={handleOnChange}
            required
          />

          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 3, px: 9, bgcolor: "#0EA5E9" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
