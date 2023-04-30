import "./App.css";
import About from "./sections/about";
import Experience from "./sections/experience";
import Project from "./sections/project";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
