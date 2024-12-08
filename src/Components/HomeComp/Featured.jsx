import React, { useEffect, useState } from 'react';
import Movie from '../AllmovieComp/Movie';
import { Link } from 'react-router-dom';

const Featured = () => {

    const [featured, setFeatured] = useState([])

    useEffect(() => {
        fetch('https://movie-portal-server-one.vercel.app/movies/top6')
            .then(res => res.json())
            .then(data => {
                setFeatured(data)
            })
    }
        , [])
    return (
        <div className='max-w-screen-xl w-[94%] mx-auto mt-20'>
            <h2 className='text-4xl font-semibold'>Top Movies, The Best of the Best</h2>
            <p className='my-4 md:w-[70%]'>Discover the best of cinema with our Top Movies section! A list of the six highest-rated films based on user reviews and ratings. Browse through these outstanding movies and find your next favorite film to watch, all in one place!</p>
            <div className='grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 my-10 '>
                {
                    featured.map(movie => <Movie key={movie._id} movie={movie} />)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/allmovie' className='p-3 px-20 mx-auto border-2 border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>See all movies</Link>
            </div>
        </div>
    );
};

export default Featured;