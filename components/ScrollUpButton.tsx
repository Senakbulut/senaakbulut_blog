import React from "react";

const ScrollUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button className="top-button" onClick={scrollToTop}>
      <svg
        data-name="1-Arrow Up"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
      </svg>
    </button>
  );
};

export default ScrollUpButton;
