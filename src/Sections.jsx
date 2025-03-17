import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion"; // 👈 Import useInView
import Certificates from "../sections/certificates.jsx";
import "./css/Sections.css";
import profile from "./assets/me.png";
import profile2 from "./assets/after.jpg";
import Skills from "../sections/Skills.jsx";
import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io";
import { FaGoogleDrive } from "react-icons/fa";

function Sections({ aboutRef, contactRef, skillsRef, projectsRef }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedNav, setSelectedNav] = useState("viewTools");

  const aboutInView = useInView(aboutRef, { threshold: 0.2 });
  const skillsInView = useInView(skillsRef, { threshold: 0.2 });
  const projectsInView = useInView(projectsRef, { threshold: 0.2 });
  const contactInView = useInView(contactRef, { threshold: 0.2 });

  return (
    <div className="wrapper" ref={aboutRef}>
      {/* About Section */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, x: -50 }}
        animate={aboutInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="imageContainer">
          <img src={isHovered ? profile2 : profile} alt="anime pic" />
        </div>

        <motion.div
          className="aboutTextOuterContainer"
          initial={{ opacity: 0, x: 50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="aboutInnerContainer">
            <p>
              Hello! I'm Renreal. I have a background in DevOps and a degree in
              computer engineering. I enjoy building and automating software
              solutions, and I'm continuously learning. Whether it’s a job
              opportunity or you just want to say hi, my inbox is always open!
            </p>
            <span>
              <div className="socials">
                <a
                  href="https://www.linkedin.com/in/renreal-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href="https://github.com/Renreal"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=renrealmae09@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoIosMail />
                </a>
              </div>
              <a
                className="resume-link"
                href="https://drive.google.com/file/d/1wA3MZJ4RZvRCmPvTvrDHMYfyrNPq138A/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogleDrive /> Click to View Resume
              </a>
            </span>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        className="skills-section"
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Certificates />
      </motion.section>

      <Skills />

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        className="projects-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>
        <p>This is the projects section.</p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact</h2>
        <p>This is the contact section.</p>
      </motion.section>
    </div>
  );
}

export default Sections;
