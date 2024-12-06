import React from 'react';
import cd from '../../assets/cd.png'
import { Navigate, useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate()

    const handleBack =()=>{
        navigate('/')
    }

    return (
        <div className='min-h-screen flex justify-center items-center text-white'>
            <div>
            <div className='flex'>
                <div className='text-[100px] md:text-[200px]'>4</div>
                <div><img className='w-32 md:w-56 my-5 md:my-10' src={cd} alt="" /></div>
                <div className='text-[100px] md:text-[200px]'>4</div>
            </div>
            <div className='text-3xl md:text-5xl text-center -mt-10 mb-6'>page not found</div>
            <button onClick={handleBack} className='p-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl md:mx-44 mx-20'>Go Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;