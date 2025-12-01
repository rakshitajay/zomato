import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { state, dispatch } = useCart();

  return (
    <div className="cart-wrap">
      <h2>Cart</h2>
      {!state.items.length && <div>Your cart is empty</div>}
      {state.items.map((it, idx) => (
        <div key={idx} className="cart-item">
          <div>
            <div style={{ fontWeight:700 }}>{it.name || "Item"}</div>
            <div style={{ color:"#666" }}>₹{it.price}</div>
          </div>
          <div>
            <button className="btn" onClick={() => dispatch({ type: "REMOVE", payload: idx })}>Remove</button>
          </div>
        </div>
      ))}

      <div style={{ marginTop:12 }}>
        <div><strong>Total:</strong> ₹{state.total}</div>
        <div style={{ marginTop:10 }}>
          <button className="loc-btn" onClick={() => dispatch({ type: "CLEAR" })}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
}
