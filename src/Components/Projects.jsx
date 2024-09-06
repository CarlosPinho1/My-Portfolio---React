import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/Film.png";
import GymImage from "../images/gym.png";
import ColourImage from "../images/colour.png";
import BackpackImage from "../images/backpack.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="SpaceX" />
        <ProjectBox projectPhoto={FilmImage} projectName="Crud" />
        <ProjectBox projectPhoto={ColourImage} projectName="GitFavorites" />
        <ProjectBox projectPhoto={BackpackImage} projectName="BankApi" />
      </div>
    </div>
  );
};

export default Projects;
