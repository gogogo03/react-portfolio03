import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
// import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Education/>
      {/* <Experience/> */}
      <Certificate/>
      <Skills/>
      <Contact/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://github.com/gogogo03/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn for more!
        </a>
      </header>
    </div>
  );
}

export default App;
