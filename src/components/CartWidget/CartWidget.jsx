import React from "react";
import { useCartContext } from "../../context/CartContext";

import "./CartWidget.css";

const CartWidget = () => {
  const { cartList } = useCartContext();

  return (
    <div>
      <a href="/#" className="link-style">
        <i className="bi bi-cart-fill fs-3 cart-icon position-relative">
          <h6 className="position-absolute top-0 start-100 mt-2">
            {cartList.length > 0 ? (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-bg">
                {cartList.length}
              </span>
            ) : (
              ""
            )}
          </h6>
        </i>
      </a>
    </div>
  );
};

export default CartWidget;
