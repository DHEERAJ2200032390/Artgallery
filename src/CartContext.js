import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (artwork) => {
    // Check if artwork already exists in cart (optional)
    const existingItem = cartItems.find((item) => item.id === artwork.id);
    if (existingItem) {
      // Update quantity if already in cart (optional)
      setCartItems(
        cartItems.map((item) =>
          item.id === artwork.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...artwork, quantity: 1 }]);
    }
  };

  // Implement other cart-related functions (e.g., remove item, update quantity)

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
