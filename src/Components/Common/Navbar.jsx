import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const links =
        <>
            <Link>Home</Link>
            <Link className='md:mx-3'>All movies</Link>

            <Link>Add Movies</Link>
            <Link className='md:mx-3'>My Favorites</Link>
            
            <Link>My Favorites</Link>
        </>


    return (
        <div className="navbar bg-base-100 w-[96%] max-w-screen-xl mx-auto">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="p-2 font-bold text-xl md:text-2xl ml-[-20px]">MovieGO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn">Login</Link>
                <Link to='/register' className="btn">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;