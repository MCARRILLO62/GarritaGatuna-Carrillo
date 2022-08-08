import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const db = getFirestore();
      const queryCollection = collection(db, "items");
      const queryCollectionFiltered = query(
        queryCollection,
        where("marca", "==", categoryId)
      );
      getDocs(queryCollectionFiltered)
        .then((resp) =>
          setItems(
            resp.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      const db = getFirestore();
      const queryCollection = collection(db, "items");
      getDocs(queryCollection)
        .then((resp) =>
          setItems(
            resp.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return (
    <div className="container mt-5 fs-5">
      {loading ? (
        <div className="container mt-5 ">
          <div className="spinner-border spinner-color" role="status"></div>
          <div className="sr-only spinner-color mt-2">Cargando...</div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
