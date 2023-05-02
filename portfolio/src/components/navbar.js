import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const sections = [
  { title: "About", url: "#about" },
  { title: "Experience", url: "#experience" },
  { title: "Project", url: "#project" },
  { title: "Contact", url: "#footer" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="fixed"
        sx={{
          height: "52px",
          justifyContent: "center",
          backgroundColor: "#F2F3F5",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
          }}
        >
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              color: "black",
              textDecoration: "none",
              fontFamily: "Roboto",
              fontWeight: "500",
              letterSpacing: "0.05em",
            }}
          >
            TC
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {sections.map((section) => (
              <Typography
                key={section.title}
                noWrap
                component="a"
                href={section.url}
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "0.9em",
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                  marginLeft: "2em",
                }}
              >
                {section.title}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon color="primary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={null}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "flex", sm: "none" }, mt: "25px" }}
            >
              {sections.map((section) => (
                <MenuItem key={section.title} onClick={handleCloseNavMenu}>
                  <Typography
                    component="a"
                    href={section.url}
                    sx={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "1.0em",
                    }}
                  >
                    {section.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default Navbar;
