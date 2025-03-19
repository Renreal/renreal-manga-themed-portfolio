import React from "react";
import { FaReact,FaCss3,FaHtml5,FaGithub,FaBootstrap,FaDocker, FaJava} from "react-icons/fa";
import { RiSupabaseLine, RiFirebaseLine } from "react-icons/ri";
import { GoDatabase } from "react-icons/go";
import { SiKubernetes, SiGithubactions, SiArgo, SiPostman, SiRancher,SiPostgresql,SiJavascript } from "react-icons/si"
import PandaComponent from "./PandaComponent.jsx";
import CatComponent from "./CatComponent.jsx";
const FetchSkillsIcon = () => {
  return (
    
    <div className="skillsContainer">
      <div className="l-container">work experience section</div>
      <div className="right-container">
      <span className="r-container-title">TOOLS AND TECHNOLOGIES
      </span>
      <div className="right-container-title-icon">
        <div>
          <div className="tech-container">
          <span>Supabase <a><RiSupabaseLine /></a></span>
          <span>Firebase <a><RiFirebaseLine /></a></span>
          <span>MySql <a><GoDatabase /></a></span>
          <span>Postgre<a><SiPostgresql /></a></span>
          <span>Postman<a><SiPostman /></a></span>
          <span>Docker<a><FaDocker /></a></span>
          <span>Kubernetes<a><SiKubernetes /></a></span>
          <span>Rancher<a><SiRancher /></a></span>
          <span>ArgoCD<a><SiArgo /></a></span>
          <span>ReactJS<a><FaReact /></a></span>
          <span>Bootsrap<a><FaBootstrap /></a></span>
          <span>Javascript<a><SiJavascript /></a></span>
          <span>Java<a><FaJava /></a></span>
          <span>Github Actions<a><SiGithubactions /></a></span>
          
          </div>
        </div>
       </div>

      </div>
    </div>
  );
};

export default FetchSkillsIcon;
