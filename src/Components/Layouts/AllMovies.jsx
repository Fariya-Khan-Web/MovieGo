import React, { useEffect, useState } from 'react';
import Movie from '../AllmovieComp/Movie';

const AllMovies = () => {

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMovies(data)
        })
    }
        ,[])


    return (
        <div>
            <div className='text-center w-[94%] md:w-2/3 lg:w-1/2 mx-auto'>
                <h1 className='text-4xl font-semibold mt-16'>All Movies at a Glance</h1>
                <p className=' my-5'>Immerse yourself in the world of cinema with our extensive collection of movies. Explore every genre and find the perfect story to enjoy. Discover, browse, and dive into a universe of unforgettable tales.</p>
            </div>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto my-20 w-[90%]'>
                {
                    movies.map(movie => <Movie key={movie._id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export default AllMovies;