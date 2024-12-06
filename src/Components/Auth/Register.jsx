import React, { useContext, useState } from 'react';
import { TbEyeglass, TbEyeglassOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    const handleSubmit = e =>{
        e.preventDefault()

        const form = new FormData(e.target)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')

        createUser(email, password)
        .then(result => {
            console.log(result)
            
        })
        .catch(err => {console.log(err)})

    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-[#222028] rounded-md w-[94%] max-w-md shrink-0 shadow-2xl my-10 relative">
                <h1 className='font-semibold text-2xl mx-auto mt-6'>Register now</h1>
                <hr className=' w-10/12 mx-auto mt-6' />
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className=" ">Name</span>
                        </label>
                        <input type="text" placeholder="your name" name='name' className="input input-bordered bg-[#222028]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className=" ">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered bg-[#222028]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className=" ">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name='photo' className="input input-bordered bg-[#222028]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Password</span>
                        </label>
                        <input type={show ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered bg-[#222028]" required />
                        <label className="label">
                            <p className="label-text-alt hover:text-[#ffc107]">Forgot password?</p>
                        </label>
                    </div>
                    <div className="form-control mt-3">
                        <button className="p-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl">Login</button>
                        <button className="p-2 my-3 border-2 border-[#ffc107] rounded-md hover:rounded-2xl">Login With Google</button>
                    </div>
                    <p>Already have an account? <Link to='/register' className='hover:text-[#ffc107] link'>Login</Link> now</p>
                </form>
                <div onClick={handleShow} className='absolute bottom-[244px] right-12' >
                    {show? <TbEyeglassOff />: <TbEyeglass/>}
                </div>
            </div>
        </div>
    );
};

export default Register;