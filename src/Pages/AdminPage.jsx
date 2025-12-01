import React, { useState } from "react";

export default function AdminPage() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    img: "",
    cuisines: "",
    rating: "",
    time: "",
    price: "",
    offer: "",
    location: "",
    menu: [],
  });

  const [menuItem, setMenuItem] = useState({
    name: "",
    price: "",
  });

  const handleAddMenuItem = () => {
    if (menuItem.name.trim() === "" || menuItem.price === "") return;

    setRestaurant({
      ...restaurant,
      menu: [...restaurant.menu, { id: Date.now(), ...menuItem }],
    });

    setMenuItem({ name: "", price: "" });
  };

  const handleSubmit = () => {
  if (!restaurant.name || !restaurant.img) {
    alert("Restaurant Name & Image URL are required.");
    return;
  }

  const stored = JSON.parse(localStorage.getItem("restaurants")) || [];

  const newRestaurant = {
    id: Date.now(),
    name: restaurant.name,
    img: restaurant.img,
    cuisines: restaurant.cuisines,
    rating: Number(restaurant.rating) || 4.0,
    time: restaurant.time || "30 min",
    price: Number(restaurant.price) || 200,
    offer: restaurant.offer || "",
    location: restaurant.location || "Unknown",
    menu: restaurant.menu
  };

  const updated = [...stored, newRestaurant];

  localStorage.setItem("restaurants", JSON.stringify(updated));

  alert("Restaurant Added Successfully!");

  // Reset state
  setRestaurant({
    name: "",
    img: "",
    cuisines: "",
    rating: "",
    time: "",
    price: "",
    offer: "",
    location: "",
    menu: []
  });
};

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Restaurant</h1>

      <div className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Restaurant Name"
          value={restaurant.name}
          onChange={(e) => setRestaurant({ ...restaurant, name: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Image URL"
          value={restaurant.img}
          onChange={(e) => setRestaurant({ ...restaurant, img: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Cuisines (comma separated)"
          value={restaurant.cuisines}
          onChange={(e) => setRestaurant({ ...restaurant, cuisines: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Rating (4.5)"
          value={restaurant.rating}
          onChange={(e) => setRestaurant({ ...restaurant, rating: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Delivery Time (e.g. 25 min)"
          value={restaurant.time}
          onChange={(e) => setRestaurant({ ...restaurant, time: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Price for One (₹300)"
          value={restaurant.price}
          onChange={(e) => setRestaurant({ ...restaurant, price: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Offer (optional)"
          value={restaurant.offer}
          onChange={(e) => setRestaurant({ ...restaurant, offer: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Location (City)"
          value={restaurant.location}
          onChange={(e) => setRestaurant({ ...restaurant, location: e.target.value })}
        />
      </div>

      {/* Menu items */}
      <h2 className="text-xl font-semibold mt-6">Add Menu Items</h2>

      <div className="flex gap-2 mt-2">
        <input
          className="border p-2 w-1/2"
          placeholder="Item Name"
          value={menuItem.name}
          onChange={(e) => setMenuItem({ ...menuItem, name: e.target.value })}
        />

        <input
          className="border p-2 w-1/3"
          placeholder="Price"
          value={menuItem.price}
          onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })}
        />

        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={handleAddMenuItem}
        >
          Add
        </button>
      </div>

      <ul className="mt-4">
        {restaurant.menu.map((item) => (
          <li key={item.id} className="border p-2 my-1 flex justify-between">
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-3 rounded mt-6 w-full"
      >
        Save Restaurant
      </button>
    </div>
  );
}
