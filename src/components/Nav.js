import { Link } from 'react-scroll';
import './nav.css';
function Nav() {
    return (
      <div className="nav">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >HOME
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >ABOUT
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >EDUCATION
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="certificate"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >CERTIFICATE
          </Link>
        </li>
        <li>
        <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >SKILS
          </Link>
        </li>
        <li>
        <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >CONTACT
          </Link>
        </li>
      </div>
    );
  }
  
  export default Nav;