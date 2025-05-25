import './Qualification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendar } from '@fortawesome/free-solid-svg-icons';

function Qualification() {
  return (
    <div className="qualification" id='qualification'>
      <h1>Qualification</h1>

      <div className="tabs">
        <div className="tab active"><FontAwesomeIcon icon={faGraduationCap} /> Education</div>
      </div>

      <div className="timeline">
        <div className="timeline-entry left">
          <h3>Guru Nanak Institutions Technical Campus (GNITC)</h3>
          <p>Computer Science Engineering</p>
          <span><FontAwesomeIcon icon={faCalendar} /> 2019 - 2023</span>
        </div>

        <div className="timeline-entry right">
          <h3>Sri Chaitanya Junior College</h3>
          <p>Intermediate</p>
          <span><FontAwesomeIcon icon={faCalendar} /> 2017 - 2019</span>
        </div>

        <div className="timeline-entry left">
          <h3>Sri Chaitanya Techno School</h3>
          <p>10th</p>
          <span><FontAwesomeIcon icon={faCalendar} /> 2016 - 2017</span>
        </div>
      </div>
    </div>
  );
};

export default Qualification;


