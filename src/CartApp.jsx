import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { BuyPage } from './Pages/BuyPage'
import { CartPageE } from './Pages/CartPageE'
import { ProductProvider } from './Context/ProductProvider'
import { CartProvider } from './Context/CartProvider'


export const CartApp = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <NavBar></NavBar>
        <div className='container'>
          <Routes>
            <Route path='/' element={<BuyPage></BuyPage>}></Route>
            <Route path='/carts' element={<CartPageE></CartPageE>}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductProvider>
    // <div>CartApp</div>
  )
}
