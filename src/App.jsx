import Navber from "./components/Navber/Navber.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import AboutSection from "./components/AboutSection/AboutSection.jsx";
import ProjectSection from "./components/ProjectSection/ProjectSection.jsx";
import ContactSection from "./components/ContactSection/ContactSection.jsx";
import ResumeSection from "./components/ResumeSection/ResumeSection.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import EducationSection from "./components/EducationSection/EducationSection.jsx";
import SkillsSection from "./components/SkillsSection/SkillsSection.jsx";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection.jsx";



function Test() {
    return null;
}
function App() {
  return (
      <div>
           <Navber/>
          <HeroSection/>
          <AboutSection/>
          <ProjectSection/>
          <Gallery/>
          <ResumeSection/>
          <ContactSection/>
          <Footer/>
          <EducationSection/>
          <SkillsSection/>
          <ExperienceSection/>
      </div>

  )
}

export default App;
