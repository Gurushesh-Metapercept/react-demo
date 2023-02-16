import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <input type="text" placeholder="Search products" />

      <nav>
        <ul>
          <li>
            <Link to="featured">Featured</Link>
          </li>
          <li>
            <Link to="new">New</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
