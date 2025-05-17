import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';
 

function App() {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500  shadow-lg" />
      <Skills></Skills>
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500  shadow-lg" />
      <Projects></Projects>
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500  shadow-lg" />
      <Education></Education>
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500  shadow-lg" />
      <Contact></Contact>
      <Footer></Footer>
      <Analytics />
    </>
  );
}

export default App;
