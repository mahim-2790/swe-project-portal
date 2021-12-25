import { Typography, TextField, FormControl } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";

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


export default function SearchForm(props) {
  const { setSearchLanguage, setSearchTittle } = props;
  const [languageName, setlanguageName] = useState([]);



  const handleChangeLanguage = (event) => {
    const {
      target: { value }
    } = event;
    setlanguageName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setSearchLanguage(value);
  }

  const handleChangeTittle = (e) => {
    const value = e.target.value;
    setSearchTittle(value);
  };

  return (
    <Box sx={{ my: 2, p: 2, borderRadius: "15px", bgcolor: "#F5F5F5" }}>
      <Typography
        sx={{ textAlign: "left", fontWeight: "bold", color: "#707070" }}
      >
        Search With Tittle or Language
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={8} sm={8}>
          <TextField
            id="tittle"
            name="tittle"
            label="Tittle"
            variant="outlined"
            sx={{ width: "100%", mt: 1 }}
            onChange={handleChangeTittle}
          />
        </Grid>
        <Grid item xs={4} sm={4}>

          <FormControl sx={{ width: "90%", mt: 1 }}>
            <InputLabel id="language-label">Language</InputLabel>
            <Select
              labelId="language-label"
              id="language"
              multiple
              value={languageName}
              onChange={handleChangeLanguage}
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
    </Box>
  );
}
