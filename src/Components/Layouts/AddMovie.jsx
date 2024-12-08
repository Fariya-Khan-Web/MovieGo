import { Result } from 'postcss';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { Rating } from 'react-simple-star-rating'
import '../../App.css'
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const [rating, setRating] = useState(0);

    const navigate = useNavigate()


    const email = user.email
    console.log(email)
    const urlValidation = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|svg|webp))$/i;

    const onSubmit = movie => {
        console.log(movie);

        const movieWithRate = { ...movie, rating , email }
        console.log(movieWithRate)

        if (movieWithRate.rating < 1) {
            return toast.error('Add ratings', { position: 'top-center' })
        }

        fetch('http://localhost:3000/movies', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(movieWithRate)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Updated Successfully',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                console.log(data)
                reset()
                setRating(0)
                navigate(-1)
            })

    }

    const handleRating = (rate) => {
        setRating(rate)
        console.log(rate)
    }

    const handleReset = () => {
        // Set the initial value
        setRating(0)
    }


    return (
        <div>
            <div className='text-center w-[94%] md:w-2/3 lg:w-1/2 mx-auto'>
                <h1 className='text-4xl font-semibold mt-16'>Add a Movie to the Spotlight</h1>
                <p className=' my-5'>Bring your favorite movies to life on our platform! Fill in the details below to add a new movie to our collection and help others discover cinematic gems</p>
            </div>

            <form className='max-w-2xl w-[90%] mx-auto my-10 md:my-16' onSubmit={handleSubmit(onSubmit)}>

                {/* title */}
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Movie Title</label>
                    <input
                        className="w-full p-2 border border-gray-300 rounded  dark:bg-[#322f38] dark:text-white dark:border-gray-700"
                        {...register("title", {
                            required: "Title is required",
                            minLength: {
                                value: 2,
                                message: "Title must be at least 2 characters long",
                            },
                        })}
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                {/* poster */}
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Movie Poster</label>
                    <input
                        className="w-full p-2 border border-gray-300 rounded dark:bg-[#322f38] dark:text-white dark:border-gray-700"
                        {...register("Poster", {
                            required: "Photo URL is required",
                            pattern: {
                                value: urlValidation,
                                message: 'please enter a valid url'
                            }
                        })}
                    />
                    {errors.Poster && <p className="text-red-500 text-sm">{errors.Poster.message}</p>}
                </div>

                <div className='grid gap-4 md:grid-cols-2'>

                    {/* Year */}
                    <div className="mb-4">
                        <label className="block mb-2  font-medium">Release Year</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded dark:bg-[#322f38] dark:text-white dark:border-gray-700"
                            {...register("year", { required: "Enter a year" })}
                        >
                            <option value="">Select a year</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                        </select>
                        {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
                    </div>


                    {/* Genre */}
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Genre</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded dark:bg-[#322f38] dark:text-white dark:border-gray-700"
                            {...register("genre", { required: "Genre is required" })}
                        >
                            <option value="">Select a Genre</option>
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Horror">Horror</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Romance">Romance</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Animation">Animation</option>
                        </select>
                        {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
                    </div>

                </div>


                <div className='grid gap-4 md:grid-cols-2'>

                    {/* Duration */}
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Duration</label>
                        <input type='number'
                            className="w-full p-2 border border-gray-300 rounded dark:bg-[#322f38] dark:text-white dark:border-gray-700"
                            {...register("duration", {
                                required: "Movie duration must be 59+",
                                min: 60, message: 'minmum 60'
                            })}
                        />
                        {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
                    </div>

                    {/* Rating */}

                    <div className='App '>
                        <label className="block font-medium">Rating</label>
                        {/* set initial value */}
                        <Rating className='my-2' onClick={handleRating} initialValue={rating} />
                    </div>

                </div>


                {/* Description */}
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Movie Description</label>
                    <input
                        className="w-full p-2 border border-gray-300 rounded dark:bg-[#322f38] dark:text-white dark:border-gray-700"
                        {...register("description", {
                            required: "Provide a short description",
                            minLength: {
                                value: 10,
                                message: "Summery must be at least 10 characters long",
                            },
                            maxLength: {
                                value: 200,
                                message: "Summery must be within 200 characters long",
                            },
                        })}
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>


                <input type="submit" className="p-2 w-full my-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl hover:bg-[#ffc107]/10" />
            </form>
        </div>
    );
};

export default AddMovie;