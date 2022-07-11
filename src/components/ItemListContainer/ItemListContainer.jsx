import React from 'react'
import logo from '../../img/Logo-mini.png'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {

  const onAdd = (count) => {
      console.log(`${count} unidades añadidas al carrito.`);

  }

  return (
    <div className='container mt-5 fs-5'>
      <img src={logo} alt="logo" className='mb-5'/>
      <p>Garrita Gatuna te ofrece la mayor variedad de comida,juguetes,accesorios y arena para gatos directo a la puerta de tu casa. Hacemos delivery de las necesidades básicas para tu mascota en 24 horas o menos.</p>
      <p className='mb-5'>Conocemos de primera mano lo que es cuidar a tu hijo gatuno, y lo difícil que puede ser mantener sus garritas ocupadas. Por ello, estamos comprometidos a brindarte productos de calidad y novedades que harán tu día a día más agradable al lado de tu hijo gatuno.</p>

      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer