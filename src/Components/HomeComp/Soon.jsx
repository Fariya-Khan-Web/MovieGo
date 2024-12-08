import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import mulan from '../../assets/comming/mulan.webp'
import Baaghi from '../../assets/comming/Baaghi.jpg'
import flight from '../../assets/comming/flight-risk.avif'
import kraven from '../../assets/comming/Kraven.avif'
import money from '../../assets/comming/money-train.avif'
import witch from '../../assets/comming/witch.jpg'
import noname from '../../assets/comming/CXKohZvc_u6phWnamu.webp'
// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Soon = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={14}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <div className='h-96'>
                        <img className=' h-full rounded-md' src={mulan} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-96'>
                        <img className='h-full rounded-md' src={Baaghi} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-96'>
                        <img className='h-full rounded-md' src={flight} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-96'>
                        <img className='h-full rounded-md' src={kraven} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-96'>
                        <img className='h-full rounded-md' src={money} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-96'>
                        <img className='h-full rounded-md' src={witch} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-96'>
                        <img className='h-full rounded-md' src={noname} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
};

export default Soon;