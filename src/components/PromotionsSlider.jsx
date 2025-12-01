import React from "react";

export default function PromotionsSlider({ promos = [] }) {
  return (
    <div style={{ display:"flex", gap:12, overflowX:"auto", marginBottom:16 }}>
      {promos.map((p, idx) => (
        <div key={idx} className="promo-card" style={{ minWidth:220 }}>
          <img src={p.image} alt={p.title} />
          <div style={{ paddingTop:8 }}>
            <div style={{ fontWeight:700 }}>{p.title}</div>
            <div style={{ color:"#666" }}>{p.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
