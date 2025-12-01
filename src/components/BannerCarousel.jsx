import React, { useEffect, useState } from "react";

export default function BannerCarousel({ banners = [] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!banners.length) return;
    const t = setInterval(() => setI(v => (v + 1) % banners.length), 4000);
    return () => clearInterval(t);
  }, [banners.length]);

  if (!banners.length) return null;

  return (
    <div>
      <div className="banner">
        <img src={banners[i]} alt={`banner-${i}`} />
      </div>
      <div style={{ display:"flex", gap:8 }}>
        <button onClick={() => setI(v => (v - 1 + banners.length) % banners.length)} className="btn">{"<"}</button>
        <button onClick={() => setI(v => (v + 1) % banners.length)} className="btn">{">"}</button>
      </div>
    </div>
  );
}
