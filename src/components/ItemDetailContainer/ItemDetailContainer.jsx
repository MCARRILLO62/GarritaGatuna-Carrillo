import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState();

  const [loading, setLoading] = useState(true);

  const getItem = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(fetch("/products.json").then((res) => res.json()));
      }, 2000);
    });
  };

  useEffect(() => {
    getItem()
      .then((res) => res.find((item) => item.id === productId))
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="container mt-5">
          <div className="spinner-border spinner-color" role="status"></div>
          <div className="sr-only spinner-color mt-2">Cargando...</div>
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
