import React from "react";
import { useLocationStore } from "../context/LocationContext";
import { useTheme } from "../context/ThemeContext";

export default function Header({ searchValue = "", onSearchChange = () => {} }) {
  const { location, setLocation } = useLocationStore();
  const { dark, toggle } = useTheme();
  const detectLocation = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      const place = data.city || data.region || data.country_name || "Unknown";
      setLocation(place);
    } catch (e) {
      console.error(e);
      setLocation("Unknown");
    }
  };

  return (
    <div className="container header" style={{ borderBottom: "1px solid #eee" }}>
      <div className="left">
        <div>
          <div style={{ fontSize: 12, color: "#666" }}>Select Location</div>
          <div style={{ fontWeight: 700 }}>{location}</div>
        </div>
        <button className="loc-btn" onClick={detectLocation}>Detect My Location</button>
      </div>

      <div className="search">
        <input value={searchValue} onChange={e => onSearchChange(e.target.value)} placeholder="Search restaurants..." />
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button className="btn" onClick={toggle}>{dark ? "Light Mode" : "Dark Mode"}</button>
      </div>
    </div>
  );
}
