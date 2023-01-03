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
      style={{
        width: "70px",
        height: "70px",
        backgroundColor: "rgba(68, 41, 242, 0.7)",
        border: "5px solid rgba(39, 147, 242, 0.5) ",
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
      <SlArrowUp />
    </Button>
  );
};

export default BackToTop;
