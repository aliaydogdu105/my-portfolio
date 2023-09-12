import { easeInOut } from "framer-motion";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { SlArrowUp } from "react-icons/sl";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      onClick={scrollToTop}
      className="backToTop"
      style={{
        width: "65px",
        height: "65px",
        backgroundColor: "rgba(68, 41, 242, 0.5)",
        border: "1px solid rgba(39, 147, 242, 0.5) ",
        position: "fixed",
        bottom: "5vh",
        borderRadius: "10px",
        right: "5vw",
        fontSize: "20px",
        zIndex: "1",
        cursor: "pointer",
        display: visible ? "inline" : "none",
      }}
    >
      <SlArrowUp size="30px" className="text-light" />
      {/* <img
        src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/6a4aeae39e2054b3d9a33cc8e5a05816.svg"
        alt="back to top"
      /> */}
      {/* <svg
        viewBox="0 0 24 24"
        width="42"
        height="42"
        stroke="#fff"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg> */}
    </Button>
  );
};

export default BackToTop;
