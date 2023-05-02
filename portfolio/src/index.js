import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  text: {
    primary: "#000000",
    secondary: "#FFFFFF",
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#1DB954",
    },
  },
  typography: {
    fontFamily: "Verdana, sans-serif",
    button: {
      textTransform: "none",
    },
    allVariants: {
      textDecoration: "none",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
