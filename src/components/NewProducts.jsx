import React, { useContext } from "react";
import { ColorContext } from "../App";

export const NewProducts = () => {
  const color = useContext(ColorContext);
  return (
    <div>
      <h3 style={{ color: color }}>New Products</h3>
      {console.log(color)}
    </div>
  );
};
