import React from "react";
// import { FaRegEnvelope } from "react-icons/fa";
import LinkedIn from "../assests/LinkedIn.png";
import GitHub from "../assests/GitHub.png";
import mail from "../assests/mail.png";
const Contact = () => {
  return (
    <div className="contact d-flex flex-column flex-sm-row justify-content-center align-items-center vh-100">
      <div className="col-sm-3 col-5">
        <a
          href="mailto:aliaydogdu105@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-100" src={mail} alt="Mail" />
        </a>
      </div>

      <div className="col-sm-3 col-5">
        <a
          href="https://www.linkedin.com/in/aliaydogdu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-100" src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
      <div className="col-sm-3 col-5">
        <a
          href="https://github.com/aliaydogdu105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-100" src={GitHub} alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
