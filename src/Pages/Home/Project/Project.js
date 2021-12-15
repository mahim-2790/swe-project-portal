import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material";

export default function Project(props) {
  const project = props.project;

  return (
    <Box sx={{  p: 2, mb: 1, borderRadius: "16px", backgroundColor:"#F2F8FE"}}>
      <Grid container rowSpacing={2}>
        <Grid item xs={11}>
          <Typography variant="h5" sx={{ textAlign: "left" }}>
          {project.tittle}
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
          <DeleteForeverIcon />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "left" }}>
          <p>{project.description}</p>
        </Grid>
        <Grid item xs={11}>
          <Grid container > 
            <Grid item xs={3} sx={{ textAlign: "left" }}>
              <p>Status: {project.status}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Date: {project.date}</p>
            </Grid>
            <Grid item xs={5} sx={{ textAlign: "right" }}>
              <Typography sx={{display:'flex',flexWrap: 'wrap', alignItems:"center"}}>Language: {project.language.map(lang=><Typography ml={1} p={1} border={1} borderRadius={"15px"} variant="p">{lang}</Typography>)}</Typography>
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
          <EditIcon />
        </Grid>
      </Grid>
    </Box>
  );
}
