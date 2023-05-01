import "./App.css";
import { Box, Container } from "@mui/material";
import About from "./sections/about";
import Experience from "./sections/experience";
import Project from "./sections/project";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Container>
        <About />
        <Experience />
        <Project />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
