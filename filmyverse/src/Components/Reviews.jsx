import React from 'react';
import ReactStars from 'react-stars';
import { useState } from 'react';

const Reviews = () => {
    const [rating,setRating] = useState(5)
  return (
    <div className="mt-4 w-full">
      <ReactStars
        count={5}
        size={30}
        color2={"#ffd700"}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      <input
        type="text"
        placeholder="Share Your Thoughts"
        className="w-full p-2 outline-none header"
      />
      <button className="p-2 mt-3 bg-green-700 w-full">Share</button>
    </div>
  );
}

export default Reviews