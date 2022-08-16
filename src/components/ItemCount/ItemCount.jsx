import { useState } from "react";
import Toast from "../../helpers/Toast";

import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const activeButton = () => {
    const buttonClass =
      stock > 0
        ? "btn button-detail rounded fs-6 mb-3 fw-bold"
        : "btn button-detail rounded fs-6 mb-3 fw-bold disabled";
    return buttonClass;
  };

  const validateStock = (stock) => {
    if (stock > 0) {
      return onAdd(count);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Toast(`Unidades máximas en stock: ${stock}.`, 8);
    }
  };

  const substract = () => {
    if (count > initial) {
      setCount(count - 1);
    } else {
      Toast(`Por favor, seleccionar ${initial} unidad(es) o más.`, 8);
    }
  };

  return (
    <div className="container-flex d-flex cont-producto mt-3 p-0">
      <div className="d-flex bg-white border border-secondary rounded mb-3 col-4 me-3">
        <button className="border-0 bg-transparent" onClick={substract}>
          -
        </button>
        <h6 className="w-100 mt-1 align-self-center px-1">{count}</h6>
        <button className="border-0 bg-transparent" onClick={add}>
          +
        </button>
      </div>
      <div className="align-self-center col-10">
        <button className={activeButton()} onClick={() => validateStock(stock)}>
          {stock > 0 ? "Agregar al carrito" : "Stock agotado"}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
