import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import star from '../../assets/star-half-empty.png'
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const Details = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovie(data)
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

                fetch(`http://localhost:3000/movies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
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
        fetch(`http://localhost:3000/favorites/${user.email}`)
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

                fetch('http://localhost:3000/favorites', {
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


    console.log(id)
    return (
        <div className='max-w-screen-xl w-[94%] mx-auto my-10'>
            <div className='grid md:grid-cols-3 gap-2'>
                <div>
                    <img className=' mx-auto rounded' src={Poster} alt="" />
                </div>
                <div className='md:col-span-2 flex flex-col space-y-2'>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold'>{title}</h1>
                    <hr className='my-5 w-[80%]' />
                    <div className='md:text-lg lg:text-xl my-5 md:w-[70%]'>{description}</div>
                    <div className='flex-grow font-bold lg:text-2xl md:text-xl'>
                        <div className=' my-3'>Release Year: <span className='font-normal'>{year}</span></div>
                        <div className=' my-3'>Duration: <span className='font-normal'>{duration}</span></div>
                        <div className=' my-3 flex gap-1'>Rating:
                            <div className='ml-2'>{rating}</div>
                            <img className='w-5 h-5 my-auto' src={star} alt="" />
                        </div>
                        <div className=' my-3'>Genre: <span className='font-normal'>{genre}</span></div>
                    </div>
                    <Link to={`/movies/update/${_id}`} className='p-2 text-center border-2 border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>Update Movie</Link>
                    <button onClick={() => handleFavorite(_id)} className='p-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>Add to Favorite</button>
                    <button onClick={() => handleDelete(_id)} className='p-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>Delete Movie</button>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <Link to='/allmovie' className='p-2 w-full text-center  border-2 border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>All movies</Link>

            </div>

        </div>
    );
};

export default Details;