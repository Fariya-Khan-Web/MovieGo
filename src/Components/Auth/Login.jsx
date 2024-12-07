import React, { useContext, useState } from 'react';
import { TbEyeglass, TbEyeglassOff } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {


    const { loginUser, loginGoogle, user, setUser, loading, setLoading } = useContext(AuthContext)
    const [show, setShow] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()


    const handleShow = () => {
        setShow(!show)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                setLoading(false)
                toast.success('User created successfully', {position: "top-center"})
                navigate(location?.state ? location?.state : '/')
            })
            .catch(err => { 
                console.log(err) 
                toast.error('Error', {position: "top-center"})
            })

    }

    const handleGoogle = () =>{
        loginGoogle()
        .then(result => {
            console.log(result.user)
            setUser(result.user)
            // setLoading(false)
            toast.success('User created successfully', {position: "top-center"})
            navigate(location?.state ? location?.state : '/')

        })
        .catch(err => {
            console.log(err)
            toast.error('Error', {position: "top-center"})

        })
    }
    // bg-[#222028]
    return (
        <div className='flex justify-center items-center dark:bg-[#222028] dark:text-white'>
            <div className="card  rounded-md w-[94%] max-w-md shrink-0 shadow-2xl my-10 relative dark:bg-[#322f38]">
                <h1 className='font-semibold text-2xl mx-auto mt-6'>Login your account</h1>
                <hr className=' w-10/12 mx-auto mt-6' />
                <form onSubmit={handleSubmit} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className=" ">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered dark:bg-[#322f38] dark:text-white dark:border-gray-700" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Password</span>
                        </label>
                        <input type={show ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered dark:bg-[#322f38] dark:text-white dark:border-gray-700" required />
                        <label className="label">
                            <span className="text-xs hover:text-[#ffc107]">Forgot password?</span>
                        </label>
                    </div>
                    <div className="form-control mt-3">
                        <button className="p-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl">Login</button>
                    </div>
                </form>
                <button onClick={handleGoogle} className="p-2 my-3 -mt-4 w-[86%] mx-auto border-2 border-[#ffc107] rounded-md hover:rounded-2xl">Login With Google</button>
                <p className='text-center my-4'>Don't have an account? <Link to='/register' className='hover:text-[#ffc107] link'>Register</Link> now</p>
                <div onClick={handleShow} className='absolute bottom-[244px] right-12' >
                    {show ? <TbEyeglassOff /> : <TbEyeglass />}
                </div>
            </div>
        </div>
    );
};

export default Login;