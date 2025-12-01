import React from "react";

export default function CategorySlider({ categories = [], onSelect = () => {} }) {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:12, margin:"18px 0" }}>
      {categories.map(c => (
        <div key={c.id} className="category-card" onClick={() => onSelect(c)} style={{ cursor:"pointer" }}>
          <img src={c.img} alt={c.name} />
          <div style={{ paddingTop:8, fontWeight:600 }}>{c.name}</div>
        </div>
      ))}
    </div>
  );
}
