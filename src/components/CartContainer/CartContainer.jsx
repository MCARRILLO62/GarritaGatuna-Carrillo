import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "../Form/Form";
import CartListing from "../CartListing/CartListing";

const CartContainer = () => {
  const { cartList, emptyCart, cartTotal } = useCartContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const flushCart = () => {
    emptyCart();
    handleClose();
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
                  <CartListing />
                </tbody>
              </table>
              <div className="d-flex justify-content-between">
                <Button className="btn btn-secondary" onClick={handleShow}>
                  Vaciar carrito
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>¡Atención!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Si continuas, se eliminarán todos los productos de tu
                    carrito.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={flushCart}>
                      Continuar
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                      Cancelar
                    </Button>
                  </Modal.Footer>
                </Modal>
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
              <Form />
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
