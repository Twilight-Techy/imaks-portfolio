import Project from "./Project";
import weatherapp from "../assets/Images/weather_app_site.png";
import loancalc from "../assets/Images/loan-calculator.png";
import todolist from "../assets/Images/todo-list-app.png";
import indecision from "../assets/Images/indecision app.png";
import metabnb from "../assets/Images/metabnb_clone_site.png";
import huddleclone from "../assets/Images/hudle_clone_site.png";
import confris from "../assets/Images/confris.png"
import retgrow from "../assets/Images/retgrow.png"
import cosmix from "../assets/Images/cosmix.png"
import dwitter from "../assets/Images/dwitter.png"

const ProjectsSection = () => {
  // console.log(window.location.pathname); // to get the current href

  return (
    <section id="projects">
      <h2>Some of my works</h2>
      <div className="projects-container">
        <Project
          title="Confris API"
          img_src={confris}
          description="The ultimate platform for streamlined conference paper management, supporting, owners, editors, authors, and reviewers."
          img_alt="Confris' landing page"
          live_link="https://conferencecycle.com/"
          code_link="#"
          aos="fade-right"
          duration="2000"
        ></Project>
        <Project
          title="Retgrow Learn"
          img_src={retgrow}
          img_alt="Retgrow Learn's landing page."
          description="Web app built for Retgrow Initiative to aid their students' tech learning paths."
          live_link="https://retgrow-learn.onrender.com/"
          code_link="https://github.com/Twilight-Techy/Retgrow-Learn"
          aos="fade-left"
          duration="2000"
        />
        <Project
          title="Cosmix"
          description="A simple real time chat application with direct messaging and chat rooms."
          img_alt="image of a weather app screen"
          img_src={cosmix}
          live_link="https://cosmix-social.onrender.com"
          code_link="https://github.com/Twilight-Techy/Cosmix"
          aos="fade-right"
          duration="2000"
        />
        <Project
          title="Dwitter"
          img_src={dwitter}
          description="Your tiny social network."
          live_link="https://dwitter-network.onrender.com"
          code_link="https://github.com/Twilight-Techy/Dwitter"
          aos="fade-left"
          duration="2000"
        />
      </div>
      <div className="gh_link_wrapper">
        <a
          href="https://github.com/Twilight-Techy"
          target="_blank"
          className="github_link"
        >
          <button className="gh-btn">My Github</button>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
