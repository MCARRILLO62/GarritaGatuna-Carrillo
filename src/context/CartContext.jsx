import { createContext, useState, useContext, useEffect } from "react";

import Toast from "../helpers/Toast";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, SetCartList] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartList));
  }, [cartList]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id, cartList)) {
      const itemIndex = cartList.indexOf(
        cartList.find((object) => object.id === item.id)
      );
      if (cartList[itemIndex].quantity + quantity > item.stock) {
        Toast("Stock superado. No se añadieron nuevas unidades", 8);
      } else {
        cartList[itemIndex].quantity = quantity + cartList[itemIndex].quantity;
        Toast(`${quantity} unidad(es) agregadas al item existente.`, 8);
        SetCartList(cartList);
      }
    } else {
      SetCartList([...cartList, { ...item, quantity: quantity }]);
      Toast(`${quantity} unidad(es) añadidas al carrito.`, 8);
    }
  };

  const isInCart = (id, cartList) => {
    if (cartList.map((productId) => productId.id).includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  const emptyCart = () => {
    SetCartList([]);
  };

  const removeCartItem = (itemId) => {
    SetCartList(cartList.filter((product) => product.id !== itemId));
  };

  const cartTotal = () => {
    const priceTotal = cartList.map(
      (product) => product.price * product.quantity
    );
    return priceTotal.reduce((x, y) => x + y);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addItem, emptyCart, cartTotal, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
