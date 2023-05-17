import React, { useRef, useState } from 'react'
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { FaArrowRight, FaArrowLeft, FaFacebook, FaTwitter, FaGooglePlus, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';
import cozinha from '../../../public/cozinha.jpg'
import person from '../../../public/personDepoimentos.png'
import "swiper/css";
import "swiper/css/navigation";

export default function Depoimentos() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [_, setInit] = useState();

    return (
        <div className='relative h-fit' id="depoimentos">
            <Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                loop={true}
                slidesPerView={1}
                initialSlide={1}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    pauseOnMouseEnter: false,
                }}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                  }}
                onInit={() => setInit(true)}
                className='mt-72 md:mt-52 md:h-1/4 h-fit'
            >
                <SwiperSlide>

                    <div className='bg-white md:h-[500px] h-[300px] opacity-40'>
                        <Image
                            src={cozinha}
                            style={{ objectPosition: 'bottom', objectFit: 'cover', height: '100%' }}
                            quality={100}
                        />
                    </div>
                    <div className='absolute top-0 w-full h-full md:text-base text-xs py-2'>
                        <div className='flex md:w-7/12 justify-between m-auto h-full'>
                            <div className='flex flex-col md:w-1/2 w-9/12 m-auto gap-2 md:px-10 px-5 items-start h-full justify-center'>
                                <p className='text-[#670a0a] font-bold'>Depoimentos</p>
                                <p className='font-extrabold md:text-2xl text-sm'>Ariane Alcântara</p>
                                <p className='mt-2 font-semibold md:text-base text-xs'>Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade.</p>
                                <div className='flex w-full mt-4 md:mt-10 justify-between'>
                                    <p className='font-bold'>Assinatura</p>
                                    <div>
                                        <p className='font-bold'>Arianealcantara</p>
                                        <p className='font-semibold'>Design gráfico</p>
                                        <div className='flex gap-2 mt-2'>
                                            <FaFacebook />
                                            <FaTwitter />
                                            <FaGooglePlus />
                                            <FaInstagram />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div
                                className='hidden md:flex h-[550px] w-fit'
                            >
                                <Image
                                    src={person}
                                    style={{ objectPosition: 'center', objectFit: 'contain' }}
                                    className='h-[550px]'
                                    quality={100}
                                />
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='bg-white md:h-[500px] h-[300px] opacity-40'>
                        <Image
                            src={cozinha}
                            style={{ objectPosition: 'bottom', objectFit: 'cover', height: '100%' }}
                            quality={100}
                        />
                    </div>
                    <div className='absolute top-0 w-full h-full md:text-base text-xs py-2'>
                        <div className='flex md:w-7/12 justify-between m-auto h-full'>
                            <div className='flex flex-col md:w-1/2 w-9/12 m-auto gap-2 md:px-10 px-5 items-start h-full justify-center'>
                                <p className='text-[#670a0a] font-bold'>Depoimentos</p>
                                <p className='font-extrabold md:text-2xl text-sm'>Ariane Alcântara</p>
                                <p className='mt-2 font-semibold md:text-base text-xs'>Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade.</p>
                                <div className='flex w-full mt-4 md:mt-10 justify-between'>
                                    <p className='font-bold'>Assinatura</p>
                                    <div>
                                        <p className='font-bold'>Arianealcantara</p>
                                        <p className='font-semibold'>Design gráfico</p>
                                        <div className='flex gap-2 mt-2'>
                                            <FaFacebook />
                                            <FaTwitter />
                                            <FaGooglePlus />
                                            <FaInstagram />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div
                                className='hidden md:flex h-[550px] w-fit'
                            >
                                <Image
                                    src={person}
                                    style={{ objectPosition: 'center', objectFit: 'contain' }}
                                    className='h-[550px]'
                                    quality={100}
                                />
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
            <div className='absolute z-30  top-0 w-full h-full'>
                <div className='md:w-9/12  m-auto h-full flex justify-between'>
                    <div className='prev  flex items-center justify-center'>
                        <button  className="prev cursor-pointer bg-bg-arch w-fit h-fit p-4 rounded-full"> <FaArrowLeft size={18} /></button>
                    </div>
                    <div className='cursor-pointer next flex items-center justify-center'>
                        <button className="next cursor-pointer bg-bg-arch w-fit h-fit p-4 rounded-full"> <FaArrowRight size={18} /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
