import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = { items: [], total: 0, restaurantId: null };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = action.payload;
      // restrict to same restaurant
      if (state.restaurantId && state.restaurantId !== item.restaurantId) {
        return { ...initialState, items: [item], total: item.price, restaurantId: item.restaurantId };
      }
      const items = [...state.items, item];
      const total = items.reduce((s, it) => s + it.price, 0);
      return { ...state, items, total, restaurantId: item.restaurantId };
    }
    case "REMOVE": {
      const id = action.payload;
      const items = state.items.filter((_, i) => i !== id);
      const total = items.reduce((s, it) => s + it.price, 0);
      return { ...state, items, total, restaurantId: items.length ? state.restaurantId : null };
    }
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
