import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div id="footer">
    <p>ContactMe</p>
      <a
        href="https://www.linkedin.com/in/anusha-oruganti-00b8a2231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Fo5TtOh9RSKeZcxRwnYBLg%3D%3D"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} id="icon" size="lg" />
      </a>
      <a href="https://github.com/anushaoruganti" target="_blank">
        <FontAwesomeIcon icon={faGithub} id="icon" size="lg" />
      </a>
      <a href="mailto:anushaoruganti2707@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} id="icon" size="lg"/>
      </a>
    </div>
  );
}

export default Footer;
