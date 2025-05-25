import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
function Project2() {
  return (
    <div id="allproj">
      <div id="project">
        <img src="../pics/proj2.png" id="image" width={260} />
        <h3>Carrds-Using-JS</h3>
        <p>
          Developed a dynamic product listing interface using HTML, CSS, and
          JavaScript, enabling real-time rendering of items with details like
          title, image, price, and rating. Integrated a responsive card layout
          and implemented delete functionality with event-driven interaction.
        </p>
        <div id="projlinks">
          <a
            href="https://github.com/anushaoruganti/cards/blob/main/index.html"
            target="_blank"
          >
            {" "}
            Code
            <FontAwesomeIcon icon={faGithub} id="icon" size="lg" />
          </a>
          <a href="https://anushaoruganti.github.io/cards/" target="_blank">
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

export default Project2;
