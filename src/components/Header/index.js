import React from "react";
import "./header.css";
import logo_white from "../../assets/logo_white.png";
import search_icon from "../../assets/search-icon.svg";

const Header = () => {
  return (
    <div className="header">
        <div className = "item-container">
            <div className="the-peak-logo">
                <img className="logo-style" src={logo_white} alt="the-pack-logo" />
            </div>
            <div className="search-bar">
                <img className="search-icon" src={search_icon} alt="search-icon" />
            </div>
      </div>
    </div>
  );
};

export default Header;
