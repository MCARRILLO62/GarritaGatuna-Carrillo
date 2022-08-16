import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { NavLink } from "react-router-dom";

const CatListing = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeLink = () => {
    const active = ({ isActive }) =>
      isActive ? "nav-link active-link" : "nav-link";
    return active;
  };

  useEffect(() => {
    const db = getFirestore();
    const queryCategories = collection(db, "categories");

    getDocs(queryCategories)
      .then((resp) =>
        setCategories(resp.docs.map((cat) => ({ id: cat.id, ...cat.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <p className="fw-light nav-load fs-5">Cargando categorías</p>
      ) : (
        <>
          <NavLink to="/" className={activeLink()}>
            Inicio
          </NavLink>
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/category/${cat.category}`}
              className={activeLink()}
            >
              {cat.name}
            </NavLink>
          ))}
        </>
      )}
    </>
  );
};

export default CatListing;
