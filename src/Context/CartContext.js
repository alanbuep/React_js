import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {}
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
            setTotalQuantity(prevTotalQuantity => prevTotalQuantity + quantity);
        } else {
            console.error("El producto ya fue agregado")
        }
    }
    
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated);
        setTotalQuantity(prevTotalQuantity => prevTotalQuantity - cartUpdated.quantity);
    }

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}