import React, { useState } from "react";

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
      alert(`Unidades máximas en stock: ${stock}.`);
    }
  };

  const resta = () => {
    if (count > initial) {
      setCount(count - 1);
    } else {
      alert(`Por favor, seleccionar ${initial} unidad(es) o más.`);
    }
  };

  return (
    <div className="container d-flex flex-column bg-light cont-producto">
      <h3 className="fs-6 my-3 align-self-start">Producto</h3>
      <div className="d-flex bg-white border border-secondary rounded mb-3">
        <button className="border-0 bg-transparent ms-1" onClick={resta}>
          -
        </button>
        <h6 className="w-100 mt-1 align-self-center">{count}</h6>
        <button className="border-0 bg-transparent mx-1" onClick={suma}>
          +
        </button>
      </div>
      <button
        className="btn btn-outline-primary rounded fs-6 mb-2"
        onClick={() => validateStock(stock)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
