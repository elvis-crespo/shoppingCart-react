import { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([])

  const fethProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
    setProducts(data)
  }

  useEffect(() => {
    fethProducts()

  }, [])


  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}
