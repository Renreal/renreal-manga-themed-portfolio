import React, { useRef } from 'react';
import Header from './Header.jsx';
import Sections from './Sections.jsx'; 


function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
  };
  return (
    <div className="container">

      <Header scrollToRef={scrollToRef} aboutRef={aboutRef} contactRef={contactRef} skillsRef ={skillsRef} projectsRef = {projectsRef}/>
      <Sections aboutRef={aboutRef} contactRef={contactRef} skillsRef ={skillsRef} projectsRef = {projectsRef}/>
    </div>
     
  );
}

export default App;
