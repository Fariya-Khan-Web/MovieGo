import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import FavoriteMovie from '../AllmovieComp/FavoriteMovie';

const Favorites = () => {

    const {user} = useContext(AuthContext)
    const [favorite, setFavorite] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/favorites/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFavorite(data)
        })
    },[])

    return (
        <div>
            <h1 className='md:w-[60%] w-[90%] mx-auto text-4xl font-semibold mt-16 text-center'>Your Favorites: A Collection of What You Love</h1>
            <p className=' my-5 text-center w-[90%] md:w-[60%] mx-auto'>Welcome to Your Favorites! Here’s where all your top picks come together. Explore your saved selections and relive the experiences that captured your heart.</p>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto my-10 w-[90%]'>
                {
                    favorite.map(movie =>  <FavoriteMovie key={movie._id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export default Favorites;