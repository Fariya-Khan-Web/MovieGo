import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className=' mx-auto'>
            <h1 className='text-4xl font-semibold my-16 max-w-screen-xl mx-auto w-[94%]'>Contact Us</h1>
            <hr className=' dark:border-gray-700 mx-auto' />
            <div className="my-16 grid md:grid-cols-2 max-w-screen-xl mx-auto w-[94%]">
                <div className='my-auto'>
                    <h1 className='text-4xl font-semibold'>Get In Touch</h1>
                    <p className='my-4 w-10/12'>We are always happy to help and provide more information about our services. You can contact us through email, phone, or by filling out the form on our website. Thank you for considering us!</p>
                    <div className='flex gap-6'>
                        <a href="https://www.facebook.com/fariyakhansana">
                            <FaFacebook className='text-2xl font-bold hover:text-[#ffc107]' />
                        </a>
                        <a href="https://www.instagram.com/_sanaisdead_/profilecard/?igsh=djltOG0xcWVxbDgy">
                            <FaInstagram className='text-2xl font-bold hover:text-[#ffc107]' />
                        </a>
                        <a href="https://x.com/Fariya_Khan_">
                            <FaTwitter className='text-2xl font-bold hover:text-[#ffc107]' />
                        </a>
                    </div>
                </div>
                <div className="card  rounded-md my-6 max-w-xl shrink-0 shadow-2xl relative dark:bg-[#322f38]">
                    <form  className="card-body grid md:grid-cols-2 md:grid-rows-5">
                        <div className="form-control">
                            <input type='text' placeholder="Your Name" name='password' className="input input-bordered dark:bg-[#322f38] dark:text-white dark:border-gray-700" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" name='email' className="input input-bordered dark:bg-[#322f38] dark:text-white dark:border-gray-700" required />
                        </div>
                        <div className="form-control col-span-2">
                            <input type='text' placeholder="Subject" name='password' className="input input-bordered dark:bg-[#322f38] dark:text-white dark:border-gray-700" required />
                        </div>
                        <div className="form-control dark:bg-[#322f38] dark:text-white dark:border-gray-700 col-span-2 row-span-2">
                            <input type='text' placeholder="Type Your Message...." name='password' className=" input " required />
                        </div>
                        <div className="form-control mt-3 col-span-2">
                            <button className="p-2 border-2 border-[#ffc107] rounded-md hover:rounded-2xl">Send</button>
                        </div>
                    </form>                    
                </div>
                <div>

                </div>

            </div>

        </div>
    );
};

export default Contact;