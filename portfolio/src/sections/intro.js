import React from "react";
import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile.webp";
import resume from "../assets/resume.pdf";

function Intro() {
  return (
    <Box
      id="intro"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gridGap: "0",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Verdana",
      }}
    >
      <Box
        className="intro-left"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "3rem",
            fontWeight: "500",
            textAlign: "left",
          }}
        >
          Hi, I'm <br />
          Tony Chen
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: "1.1rem",
            color: "grey",
            fontWeight: "500",
            textAlign: "left",
            mt: "0.4em",
          }}
        >
          Software Engineer
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            mt: "2.0em",
            fontSize: "1.0rem",
          }}
        >
          <Typography
            color="secondary"
            component="a"
            href={resume}
            target="_blank"
          >
            View Resume
          </Typography>
        </Button>
      </Box>
      <Box className="intro-right">
        <Box
          component="img"
          alt="profile image"
          src={profile_img}
          sx={{
            maxHeight: "450px",
            maxWidth: "450px",
            height: "100%",
            width: "100%",
            borderRadius: "50%",
          }}
        />
      </Box>
    </Box>
  );
}

export default Intro;
