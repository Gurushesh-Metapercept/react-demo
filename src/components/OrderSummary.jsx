import React from "react";
import { useNavigate } from "react-router-dom";
export const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Order confirmed!</h3>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
