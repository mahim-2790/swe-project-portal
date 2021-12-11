import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export default function Project(props) {
  const project = props.project;

  return (
    <Box sx={{ border: 1, p: 2, mb: 1, borderRadius: "16px" }}>
      <Grid container>
        <Grid item xs={11} sx={{}}>
          <Box
            sx={{
              py: 1.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <h2>{project.tittle}</h2>
            <p>{project.description}</p>
          </Box>

          <Box
            sx={{
              pr: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <h4>Status: {project.status}</h4>
            <h4>Date: {project.date}</h4>
            <h4>Language: {project.language}</h4>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%"
            }}
          >
            <DeleteForeverIcon onClick={() => console.log("hello")} />
            <EditIcon />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
