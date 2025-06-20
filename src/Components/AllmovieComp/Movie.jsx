import React from 'react';
import star from '../../assets/star-half-empty.png'
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {

    const { _id, title, Poster, year, rating, genre, duration, description } = movie
    return (
        <div className='grid grid-cols-2 gap-2 border dark:border-none bg-white/70 dark:bg-[#292533] rounded-md shadow-xl'>
            <div className=''>
                <img className='w-full h-full rounded-l-md' src={Poster} alt="" />
            </div>
            <div className='flex flex-col p-4'>
                <h3 className='text-2xl font-medium'>{title}<span className='text-sm font-normal text-gray-500'> ({year})</span></h3>
                <div className='flex justify-between'>
                    <p><span className='hover:text-[#ffc107] link'>{genre}</span></p>
                    <div className='text flex my-auto'>
                      <div className=''>{rating}</div>
                      <img className='w-5 h-5 my-auto' src={star} alt="" />
                    </div>
                </div>
                <div className='text-sm font-semibold my-2'>Duration: <span className='font-normal'>{duration}m</span></div>
                {/* <p className='overflow-hidden text-ellipsis text-sm flex-grow'>{description}</p> */}
                <p className='overflow-hidden text-ellipsis text-sm flex-grow'>{description.slice(0, 130)}...</p>
                <Link to={`/allmovie/${_id}`} className='p-2 border-2 text-center border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>See Details</Link>
            </div>
        </div>

    );
};

export default Movie;