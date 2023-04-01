import React from "react";
import logoSVG from "../../../assets/image/logo.svg"
import githubSVG from "../../../assets/image/github.svg"

const Reminder = () => {
    return <div className="relative h-10 mt-5 mb-10">
  <img src={logoSVG} alt="logo" className="absolute top-3 left-8 sm:left-32 w-48" />
  <a href="https://github.com/CWS-CTRL/svgloading" target="_blank" rel="noopener noreferrer">
    <img src={githubSVG} alt="github" className="absolute top-5 right-8 sm:right-32  w-12" />
  </a>

</div>
    
}

export default Reminder