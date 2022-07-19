import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartContainer from "./components/CartContainer/CartContainer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const ItemDetailContainer = lazy(() =>
  import("./components/ItemDetailContainer/ItemDetailContainer")
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <body>
          <Routes>
            <Route index path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:productId"
              element={
                <Suspense
                  fallback={
                    <div className="container mt-5">
                      <div
                        className="spinner-border text-success"
                        role="status"
                      ></div>
                      <div className="sr-only text-success mt-2">
                        Cargando...
                      </div>
                    </div>
                  }
                >
                  <ItemDetailContainer />
                </Suspense>
              }
            />
            <Route path="/cart" element={<CartContainer />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </body>
      </div>
    </BrowserRouter>
  );
}
export default App;
