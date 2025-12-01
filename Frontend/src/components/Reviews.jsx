// src/components/Reviews.jsx
import React, { useState } from "react";

export default function Reviews({ restaurantId }) {
  const [reviews, setReviews] = useState([
    { id: 1, user: "Asha", text: "Great food!", rating: 5 },
    { id: 2, user: "Rohit", text: "Good portion sizes", rating: 4 },
  ]);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  function addReview(e) {
    e.preventDefault();
    if (!text) return;
    setReviews((r) => [{ id: Date.now(), user: "You", text, rating }, ...r]);
    setText("");
    setRating(5);
  }

  return (
    <div>
      <form onSubmit={addReview} className="mb-4">
        <div className="flex gap-2 items-center">
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="border px-2 py-1 rounded">
            {[5,4,3,2,1].map((v) => <option key={v} value={v}>{v} ★</option>)}
          </select>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a review..."
            className="flex-1 border px-3 py-2 rounded"
          />
          <button className="bg-blue-600 text-white px-3 py-2 rounded">Add</button>
        </div>
      </form>

      <div className="space-y-4">
        {reviews.map((rv) => (
          <div key={rv.id} className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">{rv.user}</div>
                <div className="text-sm text-gray-500">{rv.text}</div>
              </div>
              <div className="text-sm font-medium">{rv.rating} ★</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
