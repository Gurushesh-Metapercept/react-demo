import React from "react";
import { NavLink } from "react-router-dom";
const Header = (props) => {
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
      <button onClick={props.toggleDarkModel}>Dark Mode</button>
    </div>
  );
};

export default Header;
