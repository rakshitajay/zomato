// src/components/Menu.jsx
import React from "react";
import { useCart } from "../context/CartContext";

export default function Menu({ menu = [], restaurantId, restaurantName }) {
  const { dispatch, state } = useCart();

  function addToCart(item) {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        restaurantId,
        name: item.name,
        price: item.price,
        img: item.img || "", // optional
      },
    });
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {menu.map((m) => (
        <div key={m.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex gap-3 items-start">
          <div className="flex-1">
            <div className="font-semibold">{m.name}</div>
            <div className="text-sm text-gray-500">{m.desc}</div>
            <div className="text-sm font-medium mt-2">₹{m.price}</div>
          </div>
          {m.img && <img src={m.img} alt={m.name} className="w-20 h-20 object-cover rounded" />}
          <div>
            <button
              onClick={() => addToCart(m)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
