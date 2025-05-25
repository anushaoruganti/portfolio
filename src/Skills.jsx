import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faSquareGit } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div id="skillset">
        <div id="setcon">
          <h2>FrontEnd</h2>
          <div id="allskills">
            <ul>
              <li>
                <FontAwesomeIcon icon={faHtml5} size="2x"style={{ color: "#e34c26" }}  />
                HTML
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{ color: "#264de4" }}/>
                CSS
              </li>
              <li>
                <FontAwesomeIcon icon={faJs} size="2x" style={{ color: "#f0db4f" }}/>
                Java Script
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} size="2x" style={{ color: "#61dafb" }}/>
                React JS
              </li>
              <li>
                <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ color: "#7952b3" }}/>
                Bootstrap
              </li>
            </ul>
          </div>
        </div>
        <div id="setcon">
          <h2>BackEnd</h2>
          <div id="allskills">
            <ul>
              <li>
                <FontAwesomeIcon icon={faPython} size="2x" style={{ color: "#3776AB" }}/>
                Python
              </li>
              <li>
                <FontAwesomeIcon icon={faSquareGit} size="2x" style={{ color: "#F05032" }}/>
                Git
              </li>
              <li><img src="../pics/sql.png" alt="MySQL" style={{ width: "32px", marginRight: "10px" }} />

                Mysql
                </li>
              <li>
                <FontAwesomeIcon icon={faGithub}  size="2x" style={{ color: "#333" }}/>
                GitHub
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
