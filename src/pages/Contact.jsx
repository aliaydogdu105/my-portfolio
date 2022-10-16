import React from "react";
import { FaLinkedin, FaRegEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact d-flex justify-content-center align-items-center vh-100">
      <div>
        <a
          href="https://www.linkedin.com/in/aliaydogdu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={50} />
        </a>
      </div>
      <div>
        <a
          href="mailto:aliaydogdu105@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegEnvelope size={50} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/aliaydogdu105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={50} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
