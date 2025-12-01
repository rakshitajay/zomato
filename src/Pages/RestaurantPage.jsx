import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const MOCK = {
  id: "1", name: "Food Hub", img: "https://picsum.photos/1000/400?random=41",
  cuisines: "Indian, Chinese", rating: 4.6, time: "28 min", price: 300,
  menu: [{ id: "m1", name: "Veg Biryani", price: 180 }, { id: "m2", name: "Paneer Butter", price: 220 }]
};

export default function RestaurantPage() {
  const { id } = useParams();
  // for demo we use MOCK always
  const r = MOCK;
  const { dispatch } = useCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item, restaurantId: r.id } });
  };

  return (
    <div className="container" style={{ paddingTop:18 }}>
      <Link to="/">← Back</Link>
      <div className="res-header" style={{ marginTop:10 }}>
        <img src={r.img} alt={r.name} style={{ width:240, height:160, objectFit:"cover", borderRadius:8 }} />
        <div>
          <h2>{r.name}</h2>
          <div style={{ color:"#666" }}>{r.cuisines} • {r.time}</div>
          <div style={{ marginTop:8 }}><strong>{r.rating} ★</strong></div>
        </div>
      </div>

      <h3 style={{ marginTop:18 }}>Menu</h3>
      <div className="menu" style={{ marginTop:8 }}>
        {r.menu.map(m => (
          <div key={m.id} className="item" style={{ justifyContent:"space-between", width:"100%" }}>
            <div>
              <div style={{ fontWeight:600 }}>{m.name}</div>
              <div style={{ color:"#666" }}>₹{m.price}</div>
            </div>
            <div>
              <button className="btn" onClick={() => addToCart(m)}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
