import React from "react";
import { Link } from "react-router-dom";

export default function RestaurantCard({ r }) {
  return (
    <div className="card">
      <Link to={`/restaurant/${r.id}`}>
        <img className="img" src={r.img} alt={r.name} />
      </Link>
      <div className="content">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <h3 style={{ marginBottom:6 }}>{r.name}</h3>
          <div className="badge">{r.rating} ★</div>
        </div>
        <div style={{ color:"#666", marginBottom:8 }}>{r.cuisines}</div>
        <div style={{ color:"#666" }}>{r.time} • ₹{r.price} for one</div>
        {r.offer && <div style={{ marginTop:8, color:"#ef4444" }}>{r.offer}</div>}
      </div>
    </div>
  );
}
