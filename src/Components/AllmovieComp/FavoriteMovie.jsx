import React from 'react';
import { Link } from 'react-router-dom';
import star from '../../assets/star-half-empty.png'
import Swal from 'sweetalert2';


const FavoriteMovie = ({movie, movies, setFavorite}) => {

    const { _id, title, Poster, year, rating, genre, duration, description } = movie

    const handleRemove = (id) =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/favorites/${id}`, {
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
                            const remaining = movies.filter(movie => movie._id !== id)
                            setFavorite(remaining)
                            
                        }
                    })
            }
        });


    }

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
                <button onClick={()=>handleRemove(_id)} className='p-2 border-2 text-center border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>Remove</button>
            </div>
        </div>
    );
};

export default FavoriteMovie;