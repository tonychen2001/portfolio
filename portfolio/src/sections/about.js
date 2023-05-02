import React from "react";
import "../styles/about.css";
import { Box } from "@mui/material";

function About() {
  return (
    <Box
      id="about"
      className="about"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <h1>About</h1>
      <p>
        An introduction about myself. Could include button to download resume,
        picture, short description.
      </p>
    </Box>
  );
}

export default About;
