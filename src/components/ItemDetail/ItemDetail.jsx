import React from "react";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const { name, image, price, stock, text } = product;

  const onAdd = (count) => {
    console.log(`${count} unidades añadidas al carrito.`);
  };

  return (
    <div className="aos-init" data-aos="zoom-out">
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <img className="w-100 p-0" src={image} alt={name} />
          </div>
          <div className="col-5 d-flex flex-column mt-5">
            <h1 className="align-self-start">{name}</h1>
            <h3 className="align-self-start mt-3 mb-4">
              Precio:
              <strong className="ms-3">
                S/ {price}
                <small>.00</small>
              </strong>
            </h3>
            <div className="align-self-start stock-count">
              <p className="m-0 text-light fw-bold">
                Unidades en stock: {stock}
              </p>
            </div>
            <p className="align-self-start text-start mt-4">{text}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
