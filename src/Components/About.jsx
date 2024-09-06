import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Carlos Eduardo Pinho</b> and I am from São Paulo,
            Brazil. I'm a <b>FullStack web developer</b>  with a good level of English and experience in conversations, which facilitates communication with international teams and clients. Currently, I am transitioning into a career in software development, where I am applying the knowledge I have acquired. Recently, I completed a Fullstack Developer certification in TypeScript, which deepened my skills in Node.js and other related technologies.<br />
            <br />
            My experience is primarily focused on backend development with Node.js. I use frameworks like Express.js to build RESTful APIs, and I am proficient in working with relational databases like PostgreSQL and non-relational databases like MongoDB. I am capable of efficiently modeling data, optimizing database performance, and ensuring that applications are scalable and provide a high-quality user experience..
            <br />
            <br /><b>My core skills </b> Node.js for developing scalable backend applications, databases (PostgreSQL and MongoDB), secure authentication and authorization, version control with Git, automated testing with Jest and Mocha, and deploy and DevOps practices. I am focused on applying these skills to solidify my career in software development, leveraging my previous experience to significantly contribute to the creation of efficient and innovative technological solutions.
            <br />
          </p>
          <a href="Resume.pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Typescript" />
        <Skills skill="Node" />
        <Skills skill="React" />
        <Skills skill="Javascript" />
        <Skills skill="Bootstrap" />
        <Skills skill="Github" />
        <Skills skill="Git" />
        <Skills skill="Npm" />
      </div>
    </>
  );
};

export default About;
