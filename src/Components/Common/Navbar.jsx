import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

const Navbar = () => {

    const { user, signOutUser, dark, setDark} = useContext(AuthContext)
    


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('User signed out successfully', { position: "top-center" })
            })
    }

    const handleTheme =()=>{
        setDark(!dark)
        document.body.classList.toggle("dark");
        console.log(dark)
    }

    const links =
        <>
            <Link to='/' className='hover:text-[#ffc107] '>Home</Link>
            <Link to='/allmovie' className='lg:mx-3 hover:text-[#ffc107]'>All movies</Link>
            {
                user &&
                <>
                    <Link to='/addmovie' className='hover:text-[#ffc107]'>Add Movies</Link>
                    <Link to='/myfavorites' className='lg:mx-3 hover:text-[#ffc107]'>My Favorites</Link>
                </>
            }
            <Link to='/' className='hover:text-[#ffc107]'>Contact Us</Link>
        </>


    return (
        <div className='border-b dark:border-gray-700 dark:bg-[#222028] dark:text-white w-full'>
            <div className="navbar w-[96%] max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-4 ml-[-20px]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content dark:bg-[#322f38]  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="p-2 font-bold text-xl md:text-2xl ml-[-20px]">Movie<span className='text-[#ffc107]'>GO</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex'>
                                <div className='flex group relative'>

                                    <div className="btn btn-ghost btn-circle avatar">
                                        <img className='w-full rounded-full'
                                            alt="avatar"
                                            src={user.photoURL} />
                                    </div>

                                    <div className='p-2 px-4 absolute top-12 -left-4 z-20 bg-white dark:bg-[#222028] border border-gray-700 text-xl font-semibold rounded opacity-0 group-hover:opacity-100'>{user.displayName}</div>

                                </div>
                                <Link onClick={handleSignOut} className="py-2 mx-2 px-4 border-2 border-[#ffc107] rounded-md hover:bg-[#ffc107]/10 hover:rounded-2xl">Sign Out</Link>
                            </div>
                            :
                            <div>
                                <Link to='/login' className="py-2 px-4 border-r-0 border-2 border-[#ffc107] rounded-md hover:bg-[#ffc107]/10 hover:rounded-l-2xl rounded-r-none">Login</Link>
                                <Link to='/register' className="py-2 px-4 border-2 border-[#ffc107] rounded-md hover:bg-[#ffc107]/10 hover:rounded-r-2xl rounded-l-none">Register</Link>
                            </div>
                    }
                </div>


                {/* theme controll */}
                <div onClick={handleTheme} className='ml-1'>
                    {
                        dark?
                        <BsMoonStars className='text-3xl hover:text-[#ffc107]/70'/>
                        :
                        <MdOutlineLightMode className='text-3xl hover:text-[#ffc107]/70' />
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;