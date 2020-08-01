import React from "react";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={Logo} alt="" />
        <h1>Todo List</h1>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default Header;
