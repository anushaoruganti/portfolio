import "./Project.css";
import Project3 from "./Project3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Project2 from "./Prokect2";
function Project() {
  return (
    <div id="projectscon">
      <h1>Projects</h1>
      <div id="allproj">
        <div id="project">
          <img src="../pics/projectmins.png" id="image" width={260} />
          <h3>DINA-Restro</h3>
          <p>
            Built a responsive web page for Dina Restro using HTML and CSS,
            featuring a custom layout that highlights restaurant offerings, menu
            plans, and customer testimonials. Emphasized clean design principles
            and ensured a mobile-friendly, intuitive user experience.
          </p>
          <div id="projlinks">
            <a
              href="https://github.com/anushaoruganti/DINA-Restro-page-css-html/blob/main/index.html"
              target="_blank"
            >
              {" "}
              Code
              <FontAwesomeIcon icon={faGithub} id="icon" size="lg" />
            </a>
            <a
              href="https://anushaoruganti.github.io/DINA-Restro-page-css-html/"
              target="_blank"
            >
              Live-Demo
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="sm"
                style={{ color: "#000" }}
              />{" "}
            </a>
          </div>
        </div>
        <Project2></Project2>
        <Project3></Project3>
      </div>
      
    </div>
  );
}

export default Project;
