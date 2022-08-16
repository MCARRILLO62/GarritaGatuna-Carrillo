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
import { useCartContext } from "../../context/CartContext";

import Toast from "../../helpers/Toast";

const Form = () => {
  const [formName, setFormName] = useState("");
  const [formMail, setFormMail] = useState("");
  const [formMailCheck, setFormMailCheck] = useState("");
  const [formPhone, setFormPhone] = useState("");

  const { cartList, emptyCart, cartTotal } = useCartContext();

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
      <button type="button" onClick={genOrder} className="btn btn-secondary">
        Generar orden
      </button>
    </form>
  );
};

export default Form;
