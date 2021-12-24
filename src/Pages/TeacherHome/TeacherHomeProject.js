import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CircleIcon from '@mui/icons-material/Circle';

export default function TeacherHomeProject(props) {
  const project = props.project;
  const history = useHistory();
  let statusColor = "#808000";
  if(project.status === "Accepted"){
    statusColor = "#008000";
  }else if(project.status === "pending"){
    statusColor = "#CCCC00";
  }

  return (
    <Box sx={{ p: 2, my: 2, borderRadius: "16px", backgroundColor: "#F2F8FE" }} onClick={() => history.push(`/teacher/viewProject/${project._id}`)}>
      <Grid container rowSpacing={2} px={2}>
        <Grid item xs={4}>
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            Course Code: {project.courseCode}
          </Typography>
        </Grid>
        <Grid item xs={4} >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            ID: {project.student_id}
          </Typography>
        </Grid>
        <Grid item xs={4}        >
          <Typography variant="h6" sx={{ textAlign: "right" }}>
            Section: {project.section}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "left" }}>
          <Typography variant="h4" sx={{ textAlign: "left" }}>
            {project.tittle}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "left" }}>
          <p>{project.description}</p>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3} sx={{ textAlign: "left" }}>
              <p>Status: <CircleIcon style={{color:statusColor, height:"20px", width:"20px"}} /> {project.status} </p> 
            </Grid>
            <Grid item xs={6} sm={4} sx={{ textAlign: "center" }}>
              <p>Date: {project.date}</p>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography
                sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
              >
                Language:{" "}
                {project.language.map((lang) => (
                  <Typography
                    ml={1}
                    p={1}
                    border={1}
                    borderRadius={"15px"}
                    variant="p"
                    key={lang}
                  >
                    {lang}
                  </Typography>
                ))}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
