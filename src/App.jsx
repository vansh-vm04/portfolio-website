import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';
import SideComponent from "./components/LinksBar";
 

function App() {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
      <SideComponent/>
      <Analytics />
    </>
  );
}

export default App;
