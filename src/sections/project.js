import React from "react";
import "../styles/project.css";
import { Box, Paper, Typography } from "@mui/material";

const projects = [
  {
    id: 0,
    title: "Social Strategist",
    description:
      "A web app to help users manage their Reddit accounts. View insights such as number of upvotes and comments received/given. Schedule posts to be uploaded at a later time.",
    technologies: [
      "Angular",
      "Express",
      "Bee-Queue",
      "Blob Storage",
      "Docker",
      "DigitalOcean",
    ],
  },
  {
    id: 1,
    title: "Portfolio",
    description:
      "This website. It showcases my work experience and projects. I was interested in using React so I decided to turn this into a little project.",
    technologies: ["React", "Material UI"],
  },
  {
    id: 2,
    title: "Endgame",
    description:
      "A platformer game written in MIPS32 assembly. The objective is to collect stones being guarded by enemies.",
    technologies: ["MIPS32"],
  },
];

function Project() {
  return (
    <Box
      id="project"
      sx={{
        pt: "55px",
        mb: "8.0em",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: "1.0em",
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gridGap: "3.0em",
        }}
      >
        {projects.map((project) => (
          <Paper
            key={project.id}
            elevation={3}
            sx={{
              p: "1.6em",
              pb: "5.5em",
              "&:hover": {
                boxShadow: "14",
              },
              position: "relative",
            }}
          >
            <Typography
              variant="h3"
              color="secondary"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
                mb: "0.5em",
              }}
            >
              {project.title}
            </Typography>
            <Typography>{project.description}</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                position: "absolute",
                bottom: "1.0em",
              }}
            >
              {project.technologies.map((technology) => (
                <Typography
                  key={technology}
                  sx={{
                    fontSize: "0.9rem",
                    mr: "1.5em",
                    color: "grey",
                  }}
                >
                  {technology}
                </Typography>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Project;
