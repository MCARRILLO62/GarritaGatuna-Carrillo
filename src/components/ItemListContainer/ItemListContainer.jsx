import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoriaId } = useParams();

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoriaId) {
      setLoading(true);
      setTimeout(() => {
        fetch("/products.json")
          .then((res) => res.json())
          .then((data) =>
            data.filter((product) => product.marca === categoriaId)
          )
          .then((data) => setItems(data))
          .catch(console.log("error"))
          .finally(() => setLoading(false));
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        fetch("/products.json")
          .then((res) => res.json())
          .then((data) => setItems(data))
          .catch(console.log("error"))
          .finally(() => setLoading(false));
      }, 2000);
    }
  }, [categoriaId]);

  return (
    <div className="container mt-5 fs-5">
      {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
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
