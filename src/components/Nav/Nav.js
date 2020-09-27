import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Buttons/PrimaryButton";
import "./Nav.css";

const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div className="navbar">
        <Logo />
        <Button value="Sign Out" page="signin" onRouteChange={onRouteChange} />
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <Logo />
        <div className="nav-items">
          {/* eslint-disable-next-line */}
          <Button
            theme="btn-dark"
            page="signin"
            value="Sign In"
            onRouteChange={onRouteChange}
          />
          <Button
            page="register"
            value="Register"
            onRouteChange={onRouteChange}
          />
        </div>
      </div>
    );
  }
};

export default Nav;
