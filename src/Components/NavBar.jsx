import { ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

export const NavBar = () => {
    const { shoppingList } = useContext(CartContext)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand" href="#">Cart  </NavLink>
                  <h1 class="text-3xl font-bold underline text-cyan-200">
    Hello world!
  </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active"> Buys</NavLink>
                        </li>
                    </ul>
                    
                    <NavLink to='/carts'>
                        <Badge badgeContent={shoppingList.length} color="secondary">
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
