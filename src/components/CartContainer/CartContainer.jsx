import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

import Toast from "../../helpers/Toast";

const CartContainer = () => {
  const { cartList, emptyCart, cartTotal, removeCartItem } = useCartContext();

  const [formName, setFormName] = useState("");
  const [formMail, setFormMail] = useState("");
  const [formMailCheck, setFormMailCheck] = useState("");
  const [formPhone, setFormPhone] = useState("");

  const updateOrder = async (orderId) => {
    const db = getFirestore();
    const queryCollectionStock = collection(db, "items");

    const queryUpdateStock = query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cartList.map((prod) => prod.id)
      )
    );

    const batch = writeBatch(db);
    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).quantity,
          })
        )
      )
      .catch((err) => console.log(err));

    batch.commit();
    console.log(orderId);
    Toast(`Su orden con ID #${orderId} ha sido completada.`, 150);
  };
  const genOrder = () => {
    if ([formName, formMail, formMailCheck, formPhone].includes("")) {
      Toast("Por favor, complete todos los campos antes de proceder.");
    } else {
      if (formMail === formMailCheck) {
        const order = {};
        order.buyer = { name: formName, phone: formPhone, email: formMail };

        order.items = cartList.map((product) => {
          return {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
          };
        });
        order.date = new Date();
        order.total = cartTotal();

        const db = getFirestore();
        const queryOrders = collection(db, "orders");
        addDoc(queryOrders, order)
          .then(({ id }) => updateOrder(id))
          .catch((err) => console.log(err))
          .finally(() => emptyCart());
      } else {
        Toast("Verifica que ambos campos de e-mail coincidan.");
      }
    }
  };

  return (
    <>
      <div
        className="container-fluid text-start w-75 mt-4 row justify-content-around mx-auto aos-init"
        data-aos="zoom-out"
      >
        {cartList.length > 0 ? (
          <>
            <div className="col-8 me-2">
              <table className="table">
                <thead>
                  <h2 className="text-nowrap mb-4">Carrito de compras</h2>
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {cartList.map((product) => (
                    <tr key={product.id}>
                      <td className="col-2 fs-5 align-middle">
                        {product.name}
                      </td>
                      <td className="col-2">
                        <img
                          className="w-50"
                          src={product.image}
                          alt={product.name}
                        />
                      </td>
                      <td className="col-2 fs-5 align-middle">
                        {product.price}
                      </td>
                      <td className="col-2 fs-5 align-middle">
                        {product.quantity}
                      </td>
                      <td className="col-1 align-middle">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => removeCartItem(product.id)}
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={emptyCart}
                >
                  Vaciar Carrito
                </button>
                <div className="text-end fs-4">
                  <span className="fs-2">Total:</span>
                  <span className="px-2">
                    S/ {cartTotal()}
                    <small>.00</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-3 p-3 bg-light rounded-3 mt-3 ms-3">
              <h3>Completa tu orden</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setFormName(e.target.value)}
                    className="form-control"
                    id="inputName"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPhone" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="form-control"
                    id="inputPhone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputMail" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setFormMail(e.target.value)}
                    className="form-control"
                    id="inputMail"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputMailCheck" className="form-label">
                    Valida tu correo electrónico
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setFormMailCheck(e.target.value)}
                    className="form-control"
                    id="inputMailCheck"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={genOrder}
                  className="btn btn-secondary"
                >
                  Generar orden
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="container text-center">
            <h1 className="mb-3">Tu carrito está vacío</h1>
            <Link className="col-6 px-0" to="/">
              <button className="btn button-detail rounded fs-6 mb-3 fw-bold">
                Regresar al listado
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartContainer;
