import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import proj3 from "../pics/proj3.png"
function Project3() {
  return (
    <div id="allproj">
      <div id="project">
        <img src={proj3} id="image" width={260} />
        <h3>Khadija-using-Bootstrap</h3>
        <p>
          Built a responsive web page for Hijaba Clothing using HTML, CSS, and
          Bootstrap, featuring a custom layout that showcases clothing
          collections, seasonal offers, and customer testimonials. Emphasized
          clean design principles and ensured a mobile-friendly, intuitive user
          experience.
        </p>
        <div id="projlinks">
          <a
            href="https://github.com/anushaoruganti/bootstrap-prac/blob/master/practice.html"
            target="_blank"
          >
            {" "}
            Code
            <FontAwesomeIcon icon={faGithub} id="icon" size="lg" />
          </a>
          <a href="https://anushaoruganti.github.io/bootstrap-prac/practice.html" target="_blank">
            Live-Demo
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="sm"
              style={{ color: "#000" }}
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project3;
