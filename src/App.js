import { BrowserRouter } from "react-router-dom";
import "./App.css";
import BackToTop from "./components/BackToTop";
import MyNavbar from "./components/MyNavbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App" id="home">
      <BrowserRouter>
        <MyNavbar />
        <Home />
        <Projects />
        <About />
        <Contact />
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
