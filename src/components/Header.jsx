import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink style={navLinkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyle} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyle} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
