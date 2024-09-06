import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaNode
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si"; // Adiciona ícone de TypeScript

const Skills = ({ skill }) => {
  // Mapeamento de habilidades para ícones
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    Node: <FaNode />, 
    Typescript: <SiTypescript />, 
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill] || <span>Icon not found</span>} {/* Fallback para caso o ícone não seja encontrado */}
    </div>
  );
};

export default Skills;
