import React from "react";

import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <a href="/#" className="link-style">
        <i className="bi bi-cart-fill fs-3 cart-icon" />
      </a>
    </div>
  );
};

export default CartWidget;
