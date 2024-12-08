import React, { useContext, useState } from 'react';
import { TbEyeglass, TbEyeglassOff } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { updateCurrentUser, updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser, loginGoogle, user, setUser, updateUserProfile } = useContext(AuthContext)
    const [show, setShow] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const handleShow = () => {
        setShow(!show)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')

        const regex1 = /^.{6,}$/;

        if (!regex1.test(password)) {
            return toast.error('password must contain be at least 6 characters', { position: "top-center" });
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Must have an Uppercase letter in the password', { position: "top-center" });
        }
        if (!/[a-z]/.test(password)) {
            return toast.error('Must have a Lowercase letter in the password', { position: "top-center" });
        }

        createUser(email, password)
            .then(result => {
                setUser(result.user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {

                    })
                    .catch(err => {

                    })
                toast.success('User created successfully', { position: "top-center" })
                navigate('/')
            })
            .catch(err => {
                toast.error('Error', { position: "top-center" })
            })

    }

    const handleGoogle = () => {
        loginGoogle()
            .then(result => {
                setUser(result.user)
                toast.success('User created successfully', { position: "top-center" })
                navigate('/')
            })
            .catch(err => {
                toast.error('Error', { position: "top-center" })
            })
    }


    return (
        <div className='flex justify-center items-center dark:bg-[#222028] dark:text-white'>
            <div className="card  rounded-md w-[94%] max-w-md shrink-0 shadow-2xl my-10 relative dark:bg-[#322f38]">
                <h1 className='font-semibold text-2xl mx-auto mt-6'>Register now</h1>
                <hr className=' w-10/12 mx-auto mt-6' />
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className=" ">Name</span>
                        </label>
                        <input type="text" placeholder="your name" name='name' className="input input-bordered dark:bg-[#322f38]  dark:border-gray-700" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className=" ">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered dark:bg-[#322f38]  dark:border-gray-700" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className=" ">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name='photo' className="input input-bordered dark:bg-[#322f38]  dark:border-gray-700" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Password</span>
                        </label>
                        <input type={show ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered dark:bg-[#322f38]  dark:border-gray-700" required />

                    </div>
                    <div className="form-control mt-3">
                        <button className="p-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl">Register</button>
                    </div>
                </form>
                <button onClick={handleGoogle} className="p-2 -mt-4 w-[86%] mx-auto border-2 border-[#ffc107] rounded-md hover:rounded-2xl">Login With Google</button>
                {/* hover:font-semibold hover:bg-[#ffc107] */}
                <p className='text-center my-4'>Already have an account? <Link to='/login' className='hover:text-[#ffc107] link'>Login</Link> now</p>
                <div onClick={handleShow} className='absolute bottom-[198px] right-12' >
                    {show ? <TbEyeglassOff /> : <TbEyeglass />}
                </div>
            </div>
        </div>
    );
};

export default Register;