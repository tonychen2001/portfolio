import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const socials = [
  {
    id: 0,
    social: "Email",
    url: "mailto:tonychen1100@hotmail.com",
    icon: (
      <MailIcon
        sx={{
          mr: "0.2em",
        }}
      />
    ),
  },
  {
    id: 1,
    social: "LinkedIn",
    url: "https://www.linkedin.com/in/tonychen8/",
    icon: (
      <LinkedInIcon
        sx={{
          mr: "0.2em",
        }}
      />
    ),
  },
  {
    id: 2,
    social: "GitHub",
    url: "https://github.com/tonychen2001",
    icon: (
      <GitHubIcon
        sx={{
          mr: "0.2em",
        }}
      />
    ),
  },
];

function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        py: "2.0em",
        backgroundColor: "#eeeeee",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: "0.2em",
          textAlign: "center",
        }}
      >
        Contact
      </Typography>
      <Typography
        sx={{
          mb: "0.5em",
          textAlign: "center",
          color: "#777",
        }}
      >
        I'm always open to new opportunities and connections.
        <br /> Feel free to reach out!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {socials.map((social) => (
          <Box
            key={social.id}
            sx={{
              mx: "2.0em",
              "&:hover": {
                color: "#1DB954",
                opacity: "0.8",
              },
            }}
          >
            <Typography
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{
                display: "flex",
                ":hover": {
                  color: "#1DB954",
                },
              }}
            >
              {social.icon}
              {social.social}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography
        sx={{
          mt: "1.5em",
          textAlign: "center",
          color: "#777",
          fontSize: "0.8em",
        }}
      >
        Designed & Built by Tony Chen
      </Typography>
    </Box>
  );
}

export default Footer;
