import { useCartContext } from "../../context/CartContext";

const CartListing = () => {
  const { cartList, removeCartItem } = useCartContext();

  return (
    <>
      {cartList.map((product) => (
        <tr key={product.id}>
          <td className="col-2 fs-5 align-middle">{product.name}</td>
          <td className="col-2">
            <img className="w-50" src={product.image} alt={product.name} />
          </td>
          <td className="col-2 fs-5 align-middle">{product.price}</td>
          <td className="col-2 fs-5 align-middle">{product.quantity}</td>
          <td className="col-1 align-middle">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => removeCartItem(product.id)}
            >
              <i className="bi bi-trash3" />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartListing;
