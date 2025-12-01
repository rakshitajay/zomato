import React from "react";

export default function FiltersBar({ query, setQuery, selectedCuisine, setSelectedCuisine, priceRange, setPriceRange, rating, setRating }) {
  return (
    <div className="filters">
      <input className="btn" style={{ minWidth:220 }} value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." />
      <select className="btn" value={selectedCuisine || ""} onChange={e => setSelectedCuisine(e.target.value)}>
        <option value="">All Cuisines</option>
        <option value="indian">Indian</option>
        <option value="pizza">Pizza</option>
        <option value="biryani">Biryani</option>
      </select>
      <select className="btn" value={priceRange || ""} onChange={e => setPriceRange(Number(e.target.value) || null)}>
        <option value="">Any Price</option>
        <option value="200">≤ ₹200</option>
        <option value="300">≤ ₹300</option>
        <option value="500">≤ ₹500</option>
      </select>
      <select className="btn" value={rating || ""} onChange={e => setRating(Number(e.target.value) || null)}>
        <option value="">Any Rating</option>
        <option value="4">≥ 4.0</option>
        <option value="4.5">≥ 4.5</option>
      </select>
    </div>
  );
}
