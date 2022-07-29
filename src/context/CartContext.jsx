import {
  Children,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, SetCartList] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) {
      SetCartList(items);
    }
  }, []);

  const addItem = (item, quantity) => {
    if (isInCart(item.id, cartList)) {
      console.log("El item ya está en el carrito");
      const itemIndex = cartList.indexOf(
        cartList.find((object) => object.id == item.id)
      );
      if (cartList[itemIndex].quantity + quantity > item.stock) {
        console.log("Stock superado. No se añadieron nuevas unidades");
      } else {
        cartList[itemIndex].quantity = quantity + cartList[itemIndex].quantity;
        console.log(quantity + " unidades agregadas al item existente.");
        SetCartList(cartList);
        localStorage.setItem("cartItems", JSON.stringify(cartList));
      }
    } else {
      SetCartList([...cartList, { ...item, quantity: quantity }]);
      localStorage.setItem("cartItems", JSON.stringify(cartList));
    }
  };

  const isInCart = (id, cartList) => {
    if (cartList.map((productId) => productId.id).includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider value={{ cartList, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
