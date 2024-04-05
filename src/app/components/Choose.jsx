"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { AIlogo, Ellipse } from './Icons';
import Image from 'next/image';
import MeatingImg from '../../../public/assets/images/meating.png'
const ChooseUs = () => {
    const Items = [
        { id: 1, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 2, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 3, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 4, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
    ]
    return (
        <div id='chooseUs' className="pb-7 sm:pb-10 md:pb-20 lg:pb-[150px] relative overflow-hidden">
            <div className=' absolute top-0 left-0 animate-pulse hidden lg:flex'><Ellipse /></div>
            <div className=' absolute bottom-[15%] right-0 animate-pulse hidden lg:flex'><Ellipse /></div>
            <div className="container mx-auto px-3 flex flex-col items-center justify-center overflow-hidden">
                <p className='flex items-center'><AIlogo />Why Choose Us</p>
                <h2 className="mt-1 h2 md:mt-2 max-w-[521px] text-center font-light font-Outfit text-2xl md:text-4xl lg:text-5xl leading-8 lg:leading-[57px]">Driving Innovation & <span className='font-semibold'>Transforming Industries</span></h2>
                <div className='flex flex-col w-full mt-[52px]'>
                    <Swiper spaceBetween={24}
                        slidesPerView={1}
                        centeredSlides={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false, }}
                        loop={true}
                        pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true, bulletActiveClass: "swiper-pagination-bullet-active", }}
                        modules={[Pagination,]}
                        breakpoints={{
                            567: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className='w-full'>
                        {
                            Items.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`border border-[#EEDDFB] rounded-xl p-[18px] max-w-[364px] w-full min-h-[208px] overflow-auto`}>
                                        <span className='border-[7px] text-sm font-bold font-Outfit flex items-center justify-center rounded-full bg-gradient-to-tr from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent border-[#F4EAFC] h-9 w-9'>{items.id}</span>
                                        <p className='mt-3 text-xl font-normal font-Outfit text-[#131200]'>{items.title}</p>
                                        <p className='mt-1 text-base font-Exo font-normal text-[#5A594D]'>{items.para}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="swiper-pagination"><span className='swiper-pagination-bullet'></span></div>
                </div>
                <Image className='w-full max-h-[527px] mt-[31px]' src={MeatingImg} alt='meating' height={527} width={1140} />
            </div>
        </div>
    )
}
export default ChooseUs