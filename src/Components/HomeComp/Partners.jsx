import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import themeforest from '../../assets/partners/themeforest.png'
import audiojungle from '../../assets/partners/audiojungle.png'
import codecanyon from '../../assets/partners/codecanyon.png'
import activeden from '../../assets/partners/activeden.png'
import photodune from '../../assets/partners/photodune.png'
import docean from '../../assets/partners/3docean.png'


const Partners = () => {

    const { dark } = useContext(AuthContext)
    return (
        <div className='w-[96%] mx-auto max-w-screen-xl'>
            <h1 className='text-4xl font-semibold mt-10'>Our Partners</h1>
            <p className='my-5 w-[70%]'>We strive for long-term cooperation with our partners, and our team is always ready to meet and consider new opportunities for mutual benefits. If you would like to become our partner, we are always open to new offers and look forward to hearing from you.</p>
            {
                dark ?
                    <div className='my-6 grid md:grid-cols-2 lg:grid-cols-6 border dark:border-gray-700'>
                        <div className='flex justify-start p-4'>
                            <img className='w-14 h-14' src={themeforest} />
                            <h2 className='text-2xl font-medium my-2'>ThemeForest</h2>
                        </div>


                        <div className='flex justify-start p-4'>
                            <img className='w-14 h-14' src={audiojungle} />
                            <h2 className='text-2xl font-medium my-2'>AudioJungle</h2>
                        </div>


                        <div className='flex justify-start p-4'>
                            <img className='w-14 h-14' src={codecanyon} />
                            <h2 className='text-2xl font-medium my-2'>CodeCanyon</h2>
                        </div>


                        <div className='flex justify-start p-4'>
                            <img className='w-14 h-14' src={activeden} />
                            <h2 className='text-2xl font-medium my-2'>Activeden</h2>
                        </div>


                        <div className='flex justify-start p-4'>
                            <img className='w-14 h-14' src={photodune} />
                            <h2 className='text-2xl font-medium my-2'>photodune</h2>
                        </div>


                        <div className='flex justify-start p-4 '>
                            <img className='w-14 h-14' src={docean} />
                            <h2 className='text-2xl font-medium my-2'>3docean</h2>
                        </div>
                    </div>
                    :
                    <div className='my-6 grid grid-cols-2 lg:grid-cols-6 border dark:border-gray-700'>
                        <img className='p-5 py-8' src="https://flixgo.volkovdesign.com/main/img/partners/themeforest-light-background.png" alt="" />
                        <img className='p-5 py-8' src="https://flixgo.volkovdesign.com/main/img/partners/audiojungle-light-background.png" alt="" />
                        <img className='p-5 py-8' src="https://flixgo.volkovdesign.com/main/img/partners/codecanyon-light-background.png" alt="" />
                        <img className='p-5 py-8' src="https://flixgo.volkovdesign.com/main/img/partners/activeden-light-background.png" alt="" />
                        <img className='p-5 py-8' src="https://flixgo.volkovdesign.com/main/img/partners/photodune-light-background.png" alt="" />
                        <img className='p-5 py-8' src="https://flixgo.volkovdesign.com/main/img/partners/3docean-light-background.png" alt="" />

                    </div>
            }

        </div>
    );
};

export default Partners;