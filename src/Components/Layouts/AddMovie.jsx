import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddMovie = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [rating, setRating] = useState(0);

    const urlValidation = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|svg))$/i;

    const onSubmit = data => {
        console.log(data);


        
    }



    return (
        <div>
            <div className='text-center w-[94%] md:w-2/3 lg:w-1/2 mx-auto'>
                <h1 className='text-4xl font-semibold mt-16'>Add a Movie to the Spotlight</h1>
                <p className='text-base-content my-5'>Bring your favorite movies to life on our platform! Fill in the details below to add a new movie to our collection and help others discover cinematic gems</p>
            </div>

            <form className='max-w-2xl w-[90%] mx-auto my-10 md:my-16' onSubmit={handleSubmit(onSubmit)}>

                {/* title */}
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Movie Title</label>
                    <input
                        className="w-full p-2 border border-gray-300 rounded"
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
                        className="w-full p-2 border border-gray-300 rounded"
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
                            className="w-full p-2 border border-gray-300 rounded"
                            {...register("year", { required: "Enter a year" })}
                        >
                            <option value="">Select a Genre</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                        {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
                    </div>


                    {/* Genre */}
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Genre</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded"
                            {...register("genre", { required: "Genre is required" })}
                        >
                            <option value="">Select a Genre</option>
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Horror">Horror</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                        </select>
                        {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
                    </div>

                </div>


                <div className='grid gap-4 md:grid-cols-2'>

                    {/* Duration */}
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Duration</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            {...register("duration", { required: "Movie duration must be 59+",
                                min: 60, message:'minmum 60' })}
                        />
                        {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
                    </div>

                    {/* Rating */}


                </div>


                {/* Description */}
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Movie Description</label>
                    <input
                        className="w-full p-2 border border-gray-300 rounded"
                        {...register("description", {
                            required: "Provide a short description",
                            minLength: {
                                value: 10,
                                message: "Title must be at least 10 characters long",
                            },
                        })}
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>


                <input type="submit" className="p-2 w-full my-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl" />
            </form>
        </div>
    );
};

export default AddMovie;