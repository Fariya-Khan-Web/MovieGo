import React from 'react';
import star from '../../assets/star-half-empty.png'
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {

    const { _id, title, Poster, year, rating, genre, duration, description } = movie
    return (
        <div className='grid grid-cols-2 gap-2'>
            <div className=''>
                <img className='w-full h-full rounded' src={Poster} alt="" />
            </div>
            <div className='flex flex-col'>
                <h3 className='text-2xl font-medium'>{title}<span className='text-sm font-normal text-gray-500'> ({year})</span></h3>
                <div className='flex justify-between'>
                    <p><span className='hover:text-[#ffc107] link'>{genre}</span></p>
                    <div className='text flex my-auto'>
                      <div className=''>{rating}</div>
                      <img className='w-5 h-5 my-auto' src={star} alt="" />
                    </div>
                </div>
                <div className='text-sm font-semibold my-2'>Duration: <span className='font-normal'>{duration}m</span></div>
                <p className='overflow-hidden text-ellipsis text-sm flex-grow'>{description}</p>
                <Link to={`/allmovie/${_id}`} className='p-2 border-2 text-center border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>See Details</Link>
            </div>
        </div>
        // <div className='max-w-screen-xl w-[94%] mx-auto my-10'>
        //     <div className='grid md:grid-cols-2 gap-5'>
        //         <div className='w-full h-full'>
        //             <img className='h-full w-full mx-auto rounded' src={Poster} alt="" />
        //         </div>
        //         <div className='flex flex-col'>
        //             <h1 className='text-4xl md:text-3xl lg:text-2xl font-semibold'>{title}</h1>
        //             <hr className='my-5 w-[80%]' />
        //             {/* <div className='md:text-lg lg:text-xl my-5 md:w-[70%]'>{description}</div> */}
        //             <div className='flex-grow font-bold'>
        //                 <div className=' my-3'>Release Year: <span className='font-normal'>{year}</span></div>
        //                 <div className=' my-3'>Duration: <span className='font-normal'>{duration}</span></div>
        //                 <div className=' my-3 flex gap-1'>Rating:
        //                     <div className='ml-2'>{rating}</div>
        //                     <img className='w-5 h-5 my-auto' src={star} alt="" />
        //                 </div>
        //                 <div className=' my-3'>Genre: <span className='font-normal'>{genre}</span></div>
        //             </div>
        //             <Link to={`/allmovie/${_id}`} className='p-2 border-2 text-center border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>See Details</Link>
        //         </div>
        //     </div>

        // </div>

    );
};

export default Movie;