import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cartList, emptyCart, cartTotal, removeCartItem } = useCartContext();

  return (
    <>
      <div className="container text-start w-75 mt-4">
        {cartList.length > 0 ? (
          <div>
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
                    <td className="col-2 fs-5 align-middle">{product.name}</td>
                    <td className="col-2">
                      <img
                        className="w-50"
                        src={product.image}
                        alt={product.name}
                      />
                    </td>
                    <td className="col-2 fs-5 align-middle">{product.price}</td>
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
