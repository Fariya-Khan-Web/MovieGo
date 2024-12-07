import React, { useContext } from 'react';
import Banner from '../HomeComp/Banner';
import { AuthContext } from '../Provider/AuthProvider';
import Partners from '../HomeComp/Partners';

const Home = () => {

    return (
        <div className='dark:bg-[#222028] dark:text-white'>
            <Banner/>

            <Partners/>
        </div>
    );
};

export default Home;