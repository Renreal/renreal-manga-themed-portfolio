import React from "react";
import { FaReact,FaCss3,FaHtml5,FaBootstrap,FaDocker} from "react-icons/fa";
import { RiSupabaseLine, RiFirebaseLine } from "react-icons/ri";
import { GoDatabase } from "react-icons/go";
import { SiKubernetes, SiGithubactions, SiArgo, SiPostman, SiRancher } from "react-icons/si"
import PandaComponent from "./PandaComponent.jsx";
import CatComponent from "./CatComponent.jsx";
const FetchSkillsIcon = () => {
  return (
    <div className="skillsContainer">
      <div className="left-container">
      <CatComponent/>

      </div>
      <div className="right-container">
      Tools and technologies I'm familiar with (but not limited to)
        <div>
          <FaReact />
          <FaHtml5 />
          <FaCss3 />
          <FaBootstrap />
          <RiSupabaseLine />
          <RiFirebaseLine />
          <GoDatabase />
          <FaDocker />
          <SiKubernetes />
          <SiGithubactions />
          <SiArgo />
          <SiPostman />
          <SiRancher />
        </div>
      </div>
    </div>
  );
};

export default FetchSkillsIcon;
