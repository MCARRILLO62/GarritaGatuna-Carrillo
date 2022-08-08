import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, "items", productId);
    getDoc(queryProduct)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productId]);

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
