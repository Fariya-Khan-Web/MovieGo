import React, { useEffect, useState } from 'react';
import Movie from '../AllmovieComp/Movie';
import { FiSearch } from 'react-icons/fi';

const AllMovies = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('');



    const handleSearch = (event) => {
        setSearch(event.target.value.toLowerCase());
        setMovies(filteredMovies)
    };

    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(search));

    useEffect(() => {
        fetch('https://movie-portal-server-one.vercel.app//movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
    }
        , [])


    return (
        <div>
            <div className='text-center w-[94%] md:w-2/3 lg:w-1/2 mx-auto'>
                <h1 className='text-4xl font-semibold mt-16'>All Movies at a Glance</h1>
                <p className=' my-5'>Immerse yourself in the world of cinema with our extensive collection of movies. Explore every genre and find the perfect story to enjoy. Discover, browse, and dive into a universe of unforgettable tales.</p>
            </div>
            <label className="input input-bordered dark:bg-[#322f38] dark:text-white w-[94%] mx-auto max-w-screen-xl my-10 flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" value={search}
                    onChange={handleSearch} />
                <button className=' hover:text-[#ffc107]/70'><FiSearch /></button>
            </label>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto my-16 w-[90%]'>
                {
                    movies.map(movie => <Movie key={movie._id} movie={movie} />)
                }
            </div>
        </div>
    );
};

export default AllMovies;