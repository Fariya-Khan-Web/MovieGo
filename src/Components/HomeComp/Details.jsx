import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import star from '../../assets/star-half-empty.png'

const Details = () => {

    const { id } = useParams()

    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovie(data)
            })
    }, [])

    const { title, Poster, genre, rating,  duration, year, description } = movie

    const handleDelete = () =>{
        

    }

    console.log(id)
    return (
        <div className='max-w-screen-xl w-[94%] mx-auto my-10'>
            <div className=' md:flex  gap-5'>
                <img className='h-[500px] mx-auto rounded' src={Poster} alt="" />
                <div className=''>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold'>{title}</h1>
                    <hr className='my-5 w-[80%]'/>
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
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 my-6'>
                <button className='p-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>Add to Favorite</button>
                <button onClick={handleDelete} className='p-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10'>Delete Movie</button>
            </div>
        </div>
    );
};

export default Details;