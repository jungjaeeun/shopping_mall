import React, { createContext, useCallback, useContext, useState } from "react";

type CartState = Set<number>; // Set<number>로 변경

interface CartContextType {
  cart: CartState;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const initialState: CartState = new Set();

const CartContext = createContext<CartContextType>({
  cart: initialState,
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartState>(initialState);

  const addToCart = useCallback((id: number) => {
    setCart((prevCart) => new Set(prevCart).add(id));
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((prevCart) => {
      const newCart = new Set(prevCart);
      prevCart.delete(id);
      return newCart;
    });
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
