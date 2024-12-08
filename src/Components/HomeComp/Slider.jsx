import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; 
import 'swiper/css/scrollbar';
import '../../App.css';

// import required modules
import { Parallax, Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import slide1 from '../../assets/banner-posters/interstellar-poster.jpg'
import slide2 from '../../assets/banner-posters/conjuring-poster.jpg'
import slide3 from '../../assets/banner-posters/oppenheimer-poster.jpg'

const Slider = () => {
    return (

        <div className=' md:max-w-screen-xl lg:w-11/12 lg:my-7 mx-auto text-white'>
            <Swiper
                // install Swiper modules
                modules={[ Parallax, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                // navigation  
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
                scrollbar={{ draggable: true }}
                parallax={true}
                loop={true}
                onSwiper={(swiper) =>{}}
                onSlideChange={() => {}}
            >
                <SwiperSlide className='bg-[#1a191f] w-full'>
                    <div className='relative'>
                        <img className='h-[750px] w-full rounded-lg' src={slide1} />
                        <div className='absolute bottom-0 left-0 z-10 hover:bg-black hover:bg-opacity-25 md:pl-16 lg:pl-24 pb-8 p-5'>
                            <h1 className='text-6xl font-semibold'>Interstellar</h1>
                            <p className='md:w-[70%] lg:w-[60%] py-4 text-lg font-medium'>When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.</p>
                            <button className='p-2 px-3 text-lg border-2 border-[#ffc107] rounded-md hover:bg-[#ffc107]/20 hover:rounded-2xl mb-10'>Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[#1a191f]'>
                    <div>
                        <img className='h-[750px] w-full rounded-lg' src={slide2} />
                        <div className='absolute bottom-0 left-0 z-10 hover:bg-black hover:bg-opacity-25 md:pl-16 lg:pl-24 pb-8 p-5'>
                            <h1 className='text-6xl font-semibold'>The Conjuring 2</h1>
                            <p className='md:w-[70%] lg:w-[60%] py-4 text-lg font-medium'>Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.</p>
                            <button className='p-2 px-3 text-lg border-2 border-[#ffc107] rounded-md hover:bg-[#ffc107]/20 hover:rounded-2xl mb-10'>Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[#1a191f]'>
                    <div className=''>
                        <img className='h-[750px] w-full rounded-lg' src={slide3} />
                        <div className='absolute bottom-0 left-0 z-10 hover:bg-black hover:bg-opacity-25 md:pl-16 lg:pl-24 pb-8 p-5'>
                            <h1 className='text-6xl font-semibold'>Oppenheimer</h1>
                            <p className='md:w-[70%] lg:w-[60%] py-4 text-lg font-medium'>A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.</p>
                            <button className='p-2 px-3 text-lg border-2 border-[#ffc107] rounded-md hover:bg-[#ffc107]/20 hover:rounded-2xl mb-10'>Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;