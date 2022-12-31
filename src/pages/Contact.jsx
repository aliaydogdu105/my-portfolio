import React from "react";
import LinkedIn from "../assets/contact/LinkedIn.png";
import GitHub from "../assets/contact/GitHub.png";
import Mail from "../assets/contact/Mail.png";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="text-white text-center my-5">Contact Me</h1>
      <div className="contact d-flex flex-column flex-sm-row justify-content-center align-items-center">
        <div className="qr col-sm-3 col-5">
          <a
            href="mailto:aliaydogdu105@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-100" src={Mail} alt="Mail" />
          </a>
        </div>

        <div className="qr col-sm-3 col-5">
          <a
            href="https://www.linkedin.com/in/aliaydogdu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-100" src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div className="qr col-sm-3 col-5">
          <a
            href="https://github.com/aliaydogdu105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-100" src={GitHub} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
