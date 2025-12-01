import React, { useState } from "react";
import Header from "../components/Header";
import BannerCarousel from "../components/BannerCarousel";
import CategorySlider from "../components/CategorySlider";
import PromotionsSlider from "../components/PromotionsSlider";
import FiltersBar from "../components/FiltersBar";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import useRestaurants from "../hooks/useRestaurants";

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [priceRange, setPriceRange] = useState(null);
  const [rating, setRating] = useState(null);
  const [deliveryMax, setDeliveryMax] = useState(null);

  const { items, loading } = useRestaurants({ q: query, cuisine: selectedCuisine, price: priceRange, rating, deliveryMax });

  const banners = [
    "https://picsum.photos/1200/400?random=101",
    "https://picsum.photos/1200/400?random=102",
    "https://picsum.photos/1200/400?random=103"
  ];

  const categories = [
    { id:"pizza", name:"Pizza", img:"https://picsum.photos/400?random=201" },
    { id:"burger", name:"Burger", img:"https://picsum.photos/400?random=202" },
    { id:"biryani", name:"Biryani", img:"https://picsum.photos/400?random=203" },
  ];

  const promos = [
    { image:"https://picsum.photos/500/300?random=211", title:"20% OFF", subtitle:"On selected restaurants" },
    { image:"https://picsum.photos/500/300?random=212", title:"Free delivery", subtitle:"Above ₹299" }
  ];

  return (
    <div>
      <div className="container">
        <Header searchValue={query} onSearchChange={setQuery} />
        <BannerCarousel banners={banners} />
        <CategorySlider categories={categories} onSelect={(c) => setSelectedCuisine(c.name)} />
        <PromotionsSlider promos={promos} />
        <FiltersBar query={query} setQuery={setQuery} selectedCuisine={selectedCuisine} setSelectedCuisine={setSelectedCuisine} priceRange={priceRange} setPriceRange={setPriceRange} rating={rating} setRating={setRating} />
        {loading ? <Shimmer rows={6} /> : (
          <div className="grid" style={{ marginTop:16 }}>
            {items.map(r => <RestaurantCard key={r.id} r={r} />)}
          </div>
        )}
      </div>
    </div>
  );
}

