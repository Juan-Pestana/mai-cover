'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'

interface Irating {
  rating: number
  setRating: Dispatch<SetStateAction<number>>
}

function StarRating({ rating, setRating }: Irating) {
  const [hover, setHover] = useState(0)
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button
            type="button"
            key={index}
            className={`${
              index <= (hover || rating) ? 'text-yellow-400' : 'text-slate-400'
            } text-4xl lg:text-3xl`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        )
      })}
    </div>
  )
}

export default StarRating
