import React from "react";
import "./Logo.css";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    // <Tilt
    //   className="Tilt shadow"
    //   options={{ max: 25 }}
    //   style={{ height: 100, width: 100, backgroundColor: "#f6fff8" }}
    // >
    //   <div className="Tilt-inner">
    <img className="logo" src={require("./logo-small.png")} alt="logo"></img>
    //   </div>
    // </Tilt>
  );
};

export default Logo;
