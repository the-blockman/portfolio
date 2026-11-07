import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Toolkit from "./components/Toolkit.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";

function App() {
  useScrollReveal();
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Toolkit />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
