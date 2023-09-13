import React from "react";
import LinkedIn from "../assets/contact/LinkedIn.png";
import GitHub from "../assets/contact/GitHub.png";
import Mail from "../assets/contact/Mail.png";
import { motion } from "framer-motion";

const Contact = () => {
  const year = new Date();
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      id="contact"
    >
      <motion.h2
        className=" text-white display-3 my-5 p-2 border border-2 bg-black w-auto text-center"
        style={{ "font-family": "Audiowide, sans-serif" }}
        initial={{
          scale: 0.9,
        }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: "0.9",
          delay: "0.3",
        }}
      >
        Contact Me
      </motion.h2>
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
      <div>
        <p>
          <span>&#10084;</span> {year.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Contact;
