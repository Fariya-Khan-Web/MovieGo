import React, { useState } from 'react';
import halfstar from "../../assets/star-half-empty.png"

const Rating = ({ rating }) => {
      const star = Array(rating).fill("★")
    return (
        <div className='flex text-yellow-400 text-3xl items-center' >
            {star.map((s, idx)=> <div key={idx}>{s}</div>)}

        </div>
    );
};

export default Rating;