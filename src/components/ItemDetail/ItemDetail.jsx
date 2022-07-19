import React from "react";

const ItemDetail = ({ product }) => {
  const { name, image, price, text } = product;

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <img className="w-100 p-0" src={image} alt={name} />
          </div>
          <div className="col-6 d-flex flex-column mt-5">
            <h1 className="align-self-start">{name}</h1>
            <h3 className="align-self-start mt-3 mb-4">
              Precio: S/ {price}
              <small>.00</small>
            </h3>
            <p className="align-self-start text-start mt-4">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
