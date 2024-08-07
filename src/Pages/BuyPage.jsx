import { Card as muiCard } from '@mui/material'
import { Card as CustomCard } from '../Components/Card.jsx'
import { useContext} from 'react'
import { ProductContext } from '../Context/ProductContext.jsx'
import { CartContext } from '../Context/CartContext.jsx'

export const BuyPage = () => {

  const { products } = useContext(ProductContext)

  const { shoppingList, addPurchase, incrementPurchase, decrementPurchase, removePurchase }
    = useContext(CartContext)

const handleAdd = (purchase) => {
  addPurchase(purchase)
}  
const handleRemove = (id) => {
  removePurchase(id)
}    
const handleIncrement = (id) => {

}
const handleDecrement = (id) => {

}    

  return (
    <>
      <h1>Buys: </h1>
      <hr />

      {products.map(product => (
        <CustomCard
          key={product.id}
          img={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          handleAdd={() => handleAdd(product)}
          handleRemove={() => handleRemove(product.id)}
        >
        </CustomCard>
      ))}
    </>
  )
}
