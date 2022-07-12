import { useState, useEffect } from "react";

import logo from "../../img/Logo-mini.png";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const onAdd = (count) => {
    console.log(`${count} unidades añadidas al carrito.`);
  };

  const productos = [
    {
      id: "1",
      name: "1st Choice Esterilizado",
      image: "/assets/1SR-CHOICE-ESTERILIZADO.jpg",
      price: "115",
    },
    {
      id: "2",
      name: "1st Choice Adult",
      image: "/assets/1ST-CHOICE-ADULT-INDOOR.jpg",
      price: "140",
    },
    {
      id: "3",
      name: "1st Choice Hipoalergénico",
      image: "/assets/1ST-CHOICE-HIPO.jpg",
      price: "145",
    },
    {
      id: "4",
      name: "Bravery Adulto Salmón",
      image: "/assets/BRAVERY-ADULT-SALMON.jpg",
      price: "250",
    },
    {
      id: "5",
      name: "Brit-Care Senior Weight Control",
      image: "/assets/BRIT-SENIOR.png",
      price: "140",
    },
    {
      id: "6",
      name: "Brit-Care Urinary Health",
      image: "/assets/BRIT-STERILIZED-URINARY-HEALTH.jpg",
      price: "155",
    },
    {
      id: "7",
      name: "Hill's Perfect Digestion",
      image: "/assets/Hills-Perfect-Digestion.png",
      price: "180",
    },
    {
      id: "8",
      name: "Nutram Ideal Solution Support",
      image: "/assets/i17-nutram.jpg",
      price: "120",
    },
    {
      id: "9",
      name: "Purina Pro Plan Adult+",
      image: "/assets/Pro-Plan-Cat-Adult-7-3kg.png",
      price: "95",
    },
    {
      id: "10",
      name: "Purina Pro Plan Adult",
      image: "/assets/Pro-Plan-Cat-Adult-pollo--766x1024.png",
      price: "85",
    },
    {
      id: "11",
      name: "Purina Pro Plan Kitten",
      image: "/assets/Pro-Plan-Cat-Kitten--761x1024.png",
      price: "125",
    },
    {
      id: "12",
      name: "Nutram Balanced Wellness",
      image: "/assets/S5-NUTRAM.jpg",
      price: "145",
    },
  ];

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const task = new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });

  useEffect(() => {
    task
      .then((res) => setItems(res))
      .catch(console.log("error"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mt-5 fs-5">
      {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
      {loading ? (
        <div className="container mt-5">
          <div className="spinner-border text-success" role="status"></div>
          <div className="sr-only text-success mt-2">Cargando...</div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;