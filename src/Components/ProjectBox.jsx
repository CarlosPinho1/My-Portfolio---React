import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    SpaceXDesc:
      "This project involved replicating the SpaceX website using Bootstrap and Sass. It greatly improved my React skills and introduced me to Vercel for hosting. By working on this project, I gained a clearer understanding of responsive design and modern styling techniques, and effectively deployed a polished, professional site.",
    SpaceXGithub: "https://github.com/CarlosPinho1/SpaceX-Website---Bootstrap-Project",

    CrudDesc:
      "This project is a CRUD application for managing users, built with Node.js and MySQL. It helped me enhance my server-side skills and database management expertise. I gained hands-on experience in creating, reading, updating, and deleting user records, providing a robust understanding of full-stack development.",
    CrudGithub: "https://github.com/CarlosPinho1/CRUD_FullStack",

    GitFavoritesDesc:
      "This project involves consuming the GitHub API to create a list of my favorite users. It allowed me to learn about API integration, route management, JavaScript, and front-end development. By working on this project, I enhanced my skills in interacting with APIs and building dynamic web interfaces.",
    GitFavoritesGithub: "https://github.com/CarlosPinho1/GitHubFavoritesProject--JS",

    BankApiDesc:
      "This project involves developing a banking API using Node.js and TypeScript. Currently in progress, it aims to provide robust endpoints for managing transactions and accounts. Working on this project has deepened my understanding of API design, TypeScript features, and server-side development.",
    BankApiGithub: "https://github.com/EshaalB/Landing-Page--React-",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>


      </div>
    </div>
  );
};
export default ProjectBox;
