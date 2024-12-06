import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('User signed out successfully', { position: "top-center" })
            })
    }

    const links =
        <>
            <Link className='hover:text-[#ffc107]'>Home</Link>
            <Link className='md:mx-3 hover:text-[#ffc107]'>All movies</Link>
            {
                user &&
                <>
                    <Link className='hover:text-[#ffc107]'>Add Movies</Link>
                    <Link className='md:mx-3 hover:text-[#ffc107]'>My Favorites</Link>
                </>
            }
            <Link className='hover:text-[#ffc107]'>something</Link>
        </>


    return (
        <div className='border-b border-gray-700 w-full'>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                                <div className="btn btn-ghost btn-circle avatar">
                                    <img className='w-full rounded-full'
                                        alt="avatar"
                                        src={user.photoURL} />
                                </div>
                                <Link onClick={handleSignOut} className="py-2 mx-2 px-4 border-2 border-[#ffc107] rounded-md hover:rounded-2xl">Sign Out</Link>
                            </div>
                            :
                            <div>
                                <Link to='/login' className="py-2 px-4 border-r-0 border-2 border-[#ffc107] rounded-md hover:rounded-l-2xl rounded-r-none">Login</Link>
                                <Link to='/register' className="py-2 px-4 border-2 border-[#ffc107] rounded-md hover:rounded-r-2xl rounded-l-none">Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;