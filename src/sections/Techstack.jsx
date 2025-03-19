import React from "react";
import { FaReact,FaCss3,FaHtml5,FaBootstrap,FaDocker} from "react-icons/fa";
import { RiSupabaseLine, RiFirebaseLine } from "react-icons/ri";
import { GoDatabase } from "react-icons/go";
import { SiKubernetes, SiGithubactions, SiArgo, SiPostman, SiRancher,SiPostgresql } from "react-icons/si"
import PandaComponent from "./PandaComponent.jsx";
import CatComponent from "./CatComponent.jsx";
const FetchSkillsIcon = () => {
  return (
    
    <div className="skillsContainer">
      
      <div className="right-container">
      <span>TOOLS AND TECHNOLOGIES
      </span>
      <div className="right-container-title-icon">
        <div>
          <div className="tech-container">
          <span>Supabasei <a><RiSupabaseLine /></a></span>
          <span>Supabasei <a><RiSupabaseLine /></a></span>
          
          </div>
          <RiFirebaseLine />
          <GoDatabase />
          <SiPostgresql/>
          <SiPostman/>
        </div>
       </div>

      </div>
    </div>
  );
};

export default FetchSkillsIcon;
