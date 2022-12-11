import './education.css';
import logo from '../img/nemsu.png';
function Education() {
    return (
      <div className="education" id="education">
        <div class="content">
        <h1>EDUCATION</h1>
        <img src={logo}/>
        <h1>North Eastern Mindanao State University</h1>
        <p>LIANGA CAMPUS<br></br>Lianga, Surigao del Sur</p>
        <h3>College of Information Technology Education</h3>
        <p>Bachelor of Science in Computer Science</p>
        </div>
      </div>
    );
  }
  
  export default Education;