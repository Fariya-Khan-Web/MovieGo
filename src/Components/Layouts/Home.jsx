import React, { useContext } from 'react';
import Banner from '../HomeComp/Banner';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {

    return (
        <div className='dark:bg-[#222028] dark:text-white'>
            <Banner/>

        </div>
    );
};

export default Home;