import { useEffect, useState } from "react";
import { useLocationStore } from "../context/LocationContext";

export default function useRestaurants(filters = {}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { location } = useLocationStore();

  // Read saved admin restaurants
  const saved = JSON.parse(localStorage.getItem("restaurants")) || [];

  // Default restaurants
  const defaultRestaurants = [
    {
      id: "1",
      name: "Food Hub",
      img: "https://picsum.photos/800/400?random=1",
      cuisines: "Indian, Chinese",
      rating: 4.6,
      time: "28 min",
      price: 300,
      offer: "20% OFF",
      location: "Dhanbad",
      menu: [
        { id: "m1", name: "Veg Biryani", price: 180 },
        { id: "m2", name: "Paneer Butter Masala", price: 220 }
      ]
    },
    {
      id: "2",
      name: "Your Next Restaurant",
      img: "https://picsum.photos/800/400?random=2",
      cuisines: "Pizza, Fast Food",
      rating: 4.3,
      time: "20 min",
      price: 250,
      offer: "10% OFF",
      location: "Sindri",
      menu: [
        { id: "m3", name: "Margherita", price: 250 },
        { id: "m4", name: "Fries", price: 80 }
      ]
    }
  ];

  // Merge default + admin restaurants
  const allRestaurants = [...defaultRestaurants, ...saved];

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      let out = allRestaurants;

      if (filters.q) {
        out = out.filter((r) =>
          r.name.toLowerCase().includes(filters.q.toLowerCase())
        );
      }

      if (filters.cuisine) {
        out = out.filter((r) =>
          r.cuisines?.toLowerCase().includes(filters.cuisine.toLowerCase())
        );
      }

      if (filters.price) {
        out = out.filter((r) => r.price <= filters.price);
      }

      if (filters.rating) {
        out = out.filter((r) => r.rating >= filters.rating);
      }

      if (filters.deliveryMax) {
        out = out.filter((r) => parseInt(r.time) <= filters.deliveryMax);
      }

      
      setItems(out);
      setLoading(false);
    }, 200);
  }, [
    filters.q,
    filters.cuisine,
    filters.price,
    filters.rating,
    filters.deliveryMax,
    location
  ]);

  return { items, loading, hasMore: false, loadMore: () => {} };
}
