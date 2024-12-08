import React, { useContext } from 'react';
import Banner from '../HomeComp/Banner';
import { AuthContext } from '../Provider/AuthProvider';
import Partners from '../HomeComp/Partners';
import Featured from '../HomeComp/Featured';
import ThisYear from '../HomeComp/ThisYear';

const Home = () => {

    return (
        <div className='dark:bg-[#222028] dark:text-white'>
            <Banner/>
            <Featured/>
            <ThisYear/>
            <Partners/>
        </div>
    );
};

export default Home;