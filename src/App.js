import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import CartContextProvider from "./context/CartContext";

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
      <CartContextProvider>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route index path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoriaId"
                element={<ItemListContainer />}
              />
              <Route
                path="/item/:productId"
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
          </main>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}
export default App;
