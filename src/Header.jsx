import React, { useState, useEffect, useRef } from 'react';
import './css/Header.css';
import icon from './assets/icon.png';
import menu from './assets/menu.svg';

function Header({ scrollToRef, aboutRef, contactRef, skillsRef, projectsRef }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);
  const menuContainerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target)
      ) {
        setSidebarVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <header>
      <div className="content">
        <div className='logoSection'>
          <img src={icon} alt="nebereus icon" />
          <p>RENREAL</p>
        </div>
        <nav>
          <a onClick={() => scrollToRef(aboutRef)}>About</a>
          <a onClick={() => scrollToRef(skillsRef)}>Skills</a>
          <a onClick={() => scrollToRef(projectsRef)}>Projects</a>
          <a onClick={() => scrollToRef(contactRef)}>Contact</a>
        </nav>
        <div className='menuContainer' onClick={toggleSidebar} ref={menuContainerRef}>
          <img src={menu} alt="menu-icon" />
        </div>
      </div>

      <nav ref={sidebarRef} className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
        <a onClick={() => scrollToRef(aboutRef)}>About</a>
        <a onClick={() => scrollToRef(skillsRef)}>Skills</a>
        <a onClick={() => scrollToRef(projectsRef)}>Projects</a>
        <a onClick={() => scrollToRef(contactRef)}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
