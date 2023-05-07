import React from "react";
import { Box, Typography } from "@mui/material";

const technologies = [
  "Python",
  "Bash",
  "Java",
  "JavaScript",
  "SQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Grafana",
];

function About() {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        pt: "55px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "3.0rem",
          fontWeight: "500",
        }}
      >
        About
      </Typography>
      <Typography
        variant="p"
        sx={{
          mt: "1.0em",
          px: { xs: "0.0em", sm: "3.0em" },
          maxWidth: "830px",
          textAlign: "center",
        }}
      >
        I am a senior at the University of Toronto pursuing an Honours B.Sc in
        Computer Science (Co-op) preparing to graduate in August 2023. My
        interests include big data, cloud computing, and backend development.
        <br />
        <br />
        My journey into software development began in a grade 10 computer
        science class that I took out of curiousity. Amused with the ability to
        create something by writing my logical thoughts onto a screen, I knew
        that I wanted to pursue software development as a career.
        <br />
        <br />
        My other hobbies include snowboarding, working out, watching movies, and
        walking in nature.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mt: "2.5em",
          fontWeight: "500",
        }}
      >
        Technologies I've worked with:
      </Typography>
      <Box
        component="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
          gridRowGap: "0.5em",
          gridColumnGap: "3.5em",
          mt: "0.5em",
          textAlign: "left",
        }}
      >
        {technologies.map((technology) => (
          <Box
            component="li"
            key={technology}
            sx={{
              color: "#1DB954",
            }}
          >
            <Typography color="primary">{technology}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default About;
