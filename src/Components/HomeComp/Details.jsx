import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import star from '../../assets/star-half-empty.png'
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import Rating from '../Common/Rating';


const Details = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const { user, setUpdateMovieData } = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://movie-portal-server-one.vercel.app/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
                setUpdateMovieData(data)
            })
    }, [])

    const { _id, title, Poster, genre, rating, duration, year, description, email } = movie

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://movie-portal-server-one.vercel.app/movies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Movie removed from the list",
                                icon: "success"
                            });
                            navigate(-1)

                        }
                    })
            }
        });

    }


    const handleFavorite = () => {
        fetch(`https://movie-portal-server-one.vercel.app/favorites/${user.email}`)
            .then(res => res.json())
            .then(favorites => {
                const isAlreadyFavorited = favorites.some(fav => fav._id === _id);
                if (isAlreadyFavorited) {
                    Swal.fire({
                        icon: 'info',
                        title: 'Already Added',
                        text: 'This movie is already in your favorites!'
                    });
                    return;
                }

                const movieData = {
                    movie,
                    email: user.email
                };

                fetch('https://movie-portal-server-one.vercel.app/favorites', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(movieData)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Added to Favorites',
                            text: 'The movie has been added to your favorites!'
                        });
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'There was an issue adding the movie to your favorites.'
                        });
                    });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'There was an issue checking your favorites.'
                });
            });
    };


    return (
        <div className='max-w-screen-xl w-[94%] mx-auto my-24 border p-6 rounded-md'>


            <div className='grid md:grid-cols-3 gap-7'>

                <div className='w-full h-full'>
                    <img className='rounded' src={Poster} alt="" />
                </div>


                <div className='col-span-2 flex flex-col space-y-2'>

                    <div className='md:flex justify-between'>

                        <div className='flex gap-3 items-end'>
                            <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold'>{title}</h1>
                            <p className='text-gray-600 text-xl'>({year})</p>
                        </div>
                        <Rating rating={rating} />
                    </div>


                    <hr className='mt-10' />


                    <div className='md:text-lg lg:text-xl py-4'>{description}</div>



                    <div className='text-xl md:flex justify-between items-start flex-grow text-[#ffc107]'>

                        <div className='flex gap-4 text-lg text-gray-500'>
                            <div className=''>{duration}m</div>
                            <div className=''>#{genre}</div>

                        </div>



                        <div className='flex items-center md:justify-end max-sm:py-4 gap-2'>
                            <Link to={`update/${_id}`} className='p-2 border-2 border-[#ffc107] rounded-full hover:rounded-2xl hover:bg-[#ffc107]/10'><MdOutlineEdit /></Link>
                            <button onClick={() => handleFavorite(_id)} className='p-2 border-2 border-[#ffc107] rounded-full hover:rounded-2xl hover:bg-[#ffc107]/10'><CiHeart /></button>
                            <button onClick={() => handleDelete(_id)} className='p-2 border-2 border-[#ffc107] rounded-full hover:rounded-2xl hover:bg-[#ffc107]/10'><MdDeleteOutline /></button>
                        </div>
                    </div>

                    <div className='flex justify-center my-10'>
                        <Link to='/allmovie' className='p-2 w-full text-center  border-2 border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>All movies</Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Details;