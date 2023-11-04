import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    totalCost: 0,
    addItem: () => { },
    removeItem: () => { },
    clearCart: () => { }
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
            setTotalQuantity(prevTotalQuantity => prevTotalQuantity + quantity);
            setTotalCost(prevTotalCost => prevTotalCost + (item.price * quantity))
        } else {
            alert("El producto ya fue agregado anteriormente")
        }
    }

    const removeItem = (itemId) => {
        const removedProduct = cart.find(prod => prod.id === itemId);
        if (removedProduct) {
            const cartUpdated = cart.filter(prod => prod.id !== itemId);
            setCart(cartUpdated);
            setTotalQuantity(prevTotalQuantity => prevTotalQuantity - removedProduct.quantity);
            setTotalCost(prevTotalCost => prevTotalCost - (removedProduct.price * removedProduct.quantity))
        }
    }

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotalCost(0);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalCost }}>
            {children}
        </CartContext.Provider>
    )
}