import React from 'react';
import Soon from './Soon';

const ThisYear = () => {
    return (
        <div className='w-[94%] mx-auto max-w-screen-xl my-20'>
            <h1 className='text-4xl font-semibold'>Comming Soon on Theaters, Get Ready</h1>
            <p className='my-4 md:w-[70%]'>Get ready for the excitement! Explore our 'Coming Soon to Theaters' section to discover the most anticipated movies hitting the big screen. Mark your calendars and be the first to experience the magic of cinema!</p>
            <Soon/>
        </div>
    );
};

export default ThisYear;