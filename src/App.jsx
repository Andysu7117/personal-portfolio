import AboutMe from "/Components/AboutMe";
import Contact from "/Components/Contact";
import Navbar from "/Components/Navbar";
import Projects from "/Components/Projects";
import Resume from "/Components/Resume";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact />
      <Resume />
    </main>
  );
}
