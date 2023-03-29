import React from "react";
import logoSVG from "../../../assets/image/logo.svg"
import githubSVG from "../../../assets/image/github.svg"

const Reminder = () => {
    return <div className="relative h-10 mt-5 mb-10">
  <img src={logoSVG} alt="logo" className="absolute top-3 left-10 sm:left-1/6 w-44" />
  <a href="https://github.com/CWS-CTRL/svgloading" target="_blank" rel="noopener noreferrer">
    <img src={githubSVG} alt="github" className="absolute top-4 right-10 sm:right-1/6 w-12" />
  </a>

</div>
    
    // return <div className="grid grid-cols-2 mt-5 mb-10">
    //     <div className="ml-10"><img src={logoSVG} alt="logo" className="w-40" /></div>
    //     <div className="grid justify-center align-middle"><img src={ githubSVG} alt="github" className="w-10" /></div>
    //     <div></div>
    // </div>
}

export default Reminder