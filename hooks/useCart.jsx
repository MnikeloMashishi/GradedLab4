import { Children, createContext, useContext, useState } from "react";

const Cartcontext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart((prevCart) => {
            // look if item already exists in cart
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id)

            // if it does just increase quantity
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity +1} : cartItem
                )
            }
            else{
                // if not add item to cart
                return [...prevCart, {...item, quantity: 1}]
            }
        });
    };

    const removeFromCart = (id) => {
        //allow user to remove item from cart if they want to 
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        //clear cart after completing order
        setCart([]);
    }

    return(
        <Cartcontext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </Cartcontext.Provider>
    )
}

export const useCart = () => useContext(Cartcontext);

// export const useCart = () => {
//     const context = useContext(Cartcontext);
//     if (context === undefined) {
//       throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
//   };