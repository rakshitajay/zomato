import React from "react";
export default function Shimmer({ rows = 5 }) {
  return (
    <div>
      {Array.from({ length: rows }).map((_,i) => (
        <div key={i} style={{ height:120, background:"#f3f4f6", borderRadius:8, marginBottom:12 }} />
      ))}
    </div>
  );
}
