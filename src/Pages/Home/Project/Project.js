import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom";
import CircleIcon from '@mui/icons-material/Circle';

export default function Project(props) {
  const project = props.project;
  const history = useHistory();

  let statusColor = "#808000";
  if(project.status === "Accepted"){
    statusColor = "#008000";
  }else if(project.status === "pending"){
    statusColor = "#CCCC00";
  }


  const handleDelete = (id) => {
    const confirmDelete = window.confirm('The Project will be deleted forever!! ARE YOU SURE?');
    if (confirmDelete) {
      fetch(`https://secure-ravine-11487.herokuapp.com/projects/${id}`, {
        method: 'DELETE'
      }).then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            alert('successfully deleted');
            history.go(0);
          }
        })
    }
  };
  return (
    <Box sx={{ p: 2, mb: 2, borderRadius: "16px", backgroundColor: "#F5F5F5" }}>
      <Grid container rowSpacing={2}>
        <Grid item xs={11}>
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            Course Code: {project.courseCode}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <DeleteForeverIcon  onClick={() => { handleDelete(project._id) }} sx={{ cursor: 'pointer', color:"#E30B5C" }} />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "left" }}>
          <Typography variant="h5" sx={{ textAlign: "left" }}>
            {project.tittle}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "left" }}>
          <p>{project.description}</p>
        </Grid>
        <Grid item xs={11}>
          <Grid container >
            <Grid item xs={6} sm={3} sx={{ textAlign: "left" }}>
              <p>Status: <CircleIcon style={{color:statusColor, height:"20px", width:"20px"}} /> {project.status}</p>
            </Grid>
            <Grid item xs={6} sm={4}>
              <p>Date: {project.date}</p>
            </Grid>
            <Grid item xs={12} sm={5} sx={{ textAlign: "right" }}>
              <Typography sx={{ display: 'flex', flexWrap: 'wrap', alignItems: "center" }}>Language: {project.language.map(lang => <Typography ml={1} p={1} border={1} borderRadius={"15px"} variant="p" key={lang}>{lang}</Typography>)}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <NavLink to={`/updateProject/${project._id}`}><EditIcon /></NavLink>
        </Grid>
      </Grid>
    </Box>
  );
}
