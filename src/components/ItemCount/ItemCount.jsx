import React, { useState } from "react";
import Toast from "../../helpers/Toast";

import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const validateStock = (stock) => {
    if (stock > 0) {
      return onAdd(count);
    }
  };

  const suma = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Toast(`Unidades máximas en stock: ${stock}.`);
    }
  };

  const resta = () => {
    if (count > initial) {
      setCount(count - 1);
    } else {
      Toast(`Por favor, seleccionar ${initial} unidad(es) o más.`);
    }
  };

  return (
    <div className="container-flex d-flex cont-producto mt-3 p-0">
      <div className="d-flex bg-white border border-secondary rounded mb-3 col-4 me-3">
        <button className="border-0 bg-transparent" onClick={resta}>
          -
        </button>
        <h6 className="w-100 mt-1 align-self-center px-1">{count}</h6>
        <button className="border-0 bg-transparent" onClick={suma}>
          +
        </button>
      </div>
      <div className="align-self-center col-10">
        <button
          className="btn button-detail rounded fs-6 mb-3 fw-bold"
          onClick={() => validateStock(stock)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
