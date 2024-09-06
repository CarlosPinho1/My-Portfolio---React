import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Developed by Carlos Eduardo Pinho &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/CarlosPinho1" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/carlos-oliveira-pinho/?locale=en_US" target="_blank">
          <FaLinkedin />
        </a>

        <a href="mailTo:carlosopinho01@outlook.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
