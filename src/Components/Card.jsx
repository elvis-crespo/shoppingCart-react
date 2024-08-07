import  { useState } from 'react'
import '../styles/card.css'

export const Card = ({ img, title, description, price, handleAdd, handleRemove, handleIncrement, handleDecrement }) => {

  const [added, setAdded] = useState(false)

  const clickAdd = () => {
    handleAdd()
    setAdded(true)
  } 

  const clickRemove = () => {
    handleRemove()
    setAdded(false)
  } 

  return (
    <div className='tarjeta'>
      <img src={img} alt={title} className='tarjeta-imagen' />
      <div className='tarjeta-contenido'>
        <h3 className='tarjeta-titulo'>{title}</h3>
        <p className='tarjeta-descripcion'>{description}</p>
        <p className='tarjeta-precio'>{price}</p>

        {
          added
            ? <button
              type='button'
              className='boton-quitar'
              onClick={clickRemove}
            >
              Remove from cart
            </button>
            : <button
              type='button'
              className='boton-agregar'
              onClick={clickAdd}
            >
              Add form cart
            </button>
        }
      </div>
    </div>
  )
}
