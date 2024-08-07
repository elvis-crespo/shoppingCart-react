import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const CartPageE = () => {

  const { shoppingList, addPurchase, incrementPurchase, decrementPurchase, removePurchase }
    = useContext(CartContext)

  const calculateTotal = () => {
    return shoppingList.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)
  }

  const handlePrint = () => {
    print()
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">amount</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            shoppingList.map(item => (
              <tr key={item.id}>
                <th>{item.title}</th>
                <td>{item.price}</td>
                <td>
                  <button
                    className='btn btn-ouline-primary'
                    onClick={() => decrementPurchase(item.id)}
                  >
                    -
                  </button>

                  <button
                    className='btn btn-primary'
                  >
                    {item.amount}
                  </button>

                  <button
                    className='btn btn-ouline-primary'
                    onClick={() => incrementPurchase(item.id)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => removePurchase(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          }


          <th><b>Total: </b></th>
          <td></td>
          <td></td>
          <td>${calculateTotal()}</td>


        </tbody>
      </table>

      <div className='d-grid grad-2'>
        <button
          className='btn btn-primary'
          onClick={handlePrint}
          disabled={shoppingList < 1}
        >Buy</button>
      </div>
    </>
  )
}
