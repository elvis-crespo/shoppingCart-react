import { useReducer } from 'react'
import { CartContext } from './CartContext'

const initialState = []

export const CartProvider = ({ children }) => {


    const purchaseReducer = (state = { initialState }, action = {}) => {
        switch (action.type) {
            case '[CART] Add Purchase':
                return [...state, action.payload]

            case '[CART] Increment Purchase Quantity':
                return state.map(item => {
                    const cant = item.amount + 1
                    if(item.id === action.payload) return {...item, amount: cant}
                    return item
                })

            case '[CART] Decrement Purchase Quantity':
                return state.map(item => {
                    const cant = item.amount - 1
                    if(item.id === action.payload && item.amount > 1) return {...item, amount: cant}
                    return item
                })

            case '[CART] Remove Purchase':
                return state.filter(purch => purch.id !== action.payload)


            default:
                return state;
        }

    }

    //Usamos el useReducer para agg, elimiar los producros
    const [shoppingList, dispatch] = useReducer(purchaseReducer, initialState)

    const addPurchase = (purchase) => {
        purchase.amount = 1
        const action = {
            type: '[CART] Add Purchase',
            payload: purchase
        }
        dispatch(action)
    }
    const incrementPurchase = (id) => {
        const action = {
            type: '[CART] Increment Purchase Quantity',
            payload: id
        }
        dispatch(action)
    }
    const decrementPurchase = (id) => {
        const action = {
            type: '[CART] Decrement Purchase Quantity',
            payload: id
        }
        dispatch(action)
    }
    const removePurchase = (id) => {
        const action = {
            type: '[CART] Remove Purchase',
            payload: id
        }
        dispatch(action)
    }


    return (
        <CartContext.Provider value={{ shoppingList, addPurchase, incrementPurchase, decrementPurchase, removePurchase }}>
            {children}
        </CartContext.Provider>
    )
}
