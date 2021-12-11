import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export default function Project() {
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
            <h2>Hostel Management System</h2>
            <p>a very good project. we will... see more</p>
          </Box>

          <Box
            sx={{
              pr: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <h4>Done</h4>
            <h4>19/11/2021</h4>
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
