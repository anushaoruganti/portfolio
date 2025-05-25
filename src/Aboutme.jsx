import "./Aboutme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Aboutme() {
  return (
    <div id="aboutme">
      <div id="icons">
        <a href="https://www.linkedin.com/in/anusha-oruganti-00b8a2231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Fo5TtOh9RSKeZcxRwnYBLg%3D%3D" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} id="icon" size="2x" />
        </a>
        <a href="https://github.com/anushaoruganti" target="_blank">
          <FontAwesomeIcon icon={faGithub} id="icon" size="2x" />
        </a>
      </div>
      <div id="content">
        <h1>Hi👋</h1>
        <p id="name1">
          I'm <span>Anusha Oruganti</span>
        </p>
        <p>
          Aspiring Full-Stack Developer | Proficient in Python, JavaScript,
          SQL, HTML/CSS | Enjoys solving algorithmic challenges (LeetCode),
          building end-to-end projects & learning new tech every day!
        </p>
        <div id="btn">
          <a href="mailto:anushaoruganti2707@gmail.com">
            <span>
              Get In Touch <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </a>
        </div>
      </div>
      <div id="pic">
        <img src="../pics/anupic.jpg" />
      </div>
    </div>
  );
}
export default Aboutme;
