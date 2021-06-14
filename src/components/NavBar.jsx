import React from "react";
import { useState, useEffect } from "react";
import "../styles/navbar.css";

function NavBar() {
  const [show, handleShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
    return () => window.removeEventListener("scroll", null);
  }, []);
  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <img
        className="logo"
        src={require("../images/Netflix-logo.png")}
        alt="Netflix-logo"
      />
     
       <div className="optionsContainer">     
       <i className="fa fa-bell" />
       </div>
      <img
        className="avatar"
        src={require("../images/Avatar.png")}
        alt="Avatar"
      />
    </div>
  );
}

export default NavBar;
