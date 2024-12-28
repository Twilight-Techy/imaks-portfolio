import ContactPage from "./ContactPage";
import ProjectSection from "../Components/ProjectSection";
import HomeSection from "../Components/HomeSection";
import AboutSection from "../Components/AboutSection"
import ServicesSection from "../Components/ServicesSection";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactPage />
    </>
  );
};

export default HomePage;
