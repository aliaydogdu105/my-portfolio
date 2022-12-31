import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Home />
        <Projects />
        <About />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
