import React from "react";
import "./NavBar.css";
import { FaUserAlt } from "react-icons/fa";

function NavBar() {
  return (
    <div className="navbar">
      <p>Gemini Chatbox</p>
      <FaUserAlt size={"20px"} />
    </div>
  );
}

export default NavBar;
