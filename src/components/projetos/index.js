import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { FaArrowRight, FaArrowLeft, FaFacebook, FaTwitter, FaGooglePlus, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react'
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import fachadaDia from '../../../public/fachadaDia.jpg';
import "swiper/css";
import "swiper/css/navigation";
import { useMediaQuery } from 'react-responsive';

export default function Projetos() {

    const [slidesPerView, setSlidesPerView] = useState(3);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        if (isMobile) {
          setSlidesPerView(1);
        } else {
          setSlidesPerView(3);
        }
      }, [isMobile]);
    return (
        <div className="w-full pt-12 bg-zinc-100" id="Projetos">

        <div className='relative md:w-9/12  md:m-auto md: mt-10 text-center  h-fit'>
            <p className='font-extrabold text-2xl '>Nossos Projetos</p>
            <p className='text-zinc-400'>Veja nosso portifólio</p>
            <Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={40}
                loop={true}
                slidesPerView={slidesPerView}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: false,
                }}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                className='mt-10 md:h-fit'
            >
                <SwiperSlide className='relative'>
                    <div className=' md:h-[500px] '>
                        <Image
                            src={fachadaDia}
                            style={{ objectPosition: 'bottom', objectFit: 'cover', }}
                            quality={100}
                        />
                        <div className='absolute top-3 w-full '>
                            <div className='flex flex-col w-1/5 ml-5 py-2 bg-bg-arch items-center justify-center'>
                            <p className='font-bold'>26</p>
                            <p className='font-bold text-sm'>JUN</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className=' h-[500px]'>
                        <Image
                            src={fachadaDia}
                            style={{ objectPosition: 'bottom', objectFit: 'cover', }}
                            quality={100}
                        />
                        <div className='absolute top-3 w-full '>
                            <div className='flex flex-col w-1/5 ml-5 py-2 bg-bg-arch items-center justify-center'>
                            <p className='font-bold'>26</p>
                            <p className='font-bold text-sm'>JUN</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className=' h-[500px]'>
                        <Image
                            src={fachadaDia}
                            style={{ objectPosition: 'bottom', objectFit: 'cover', }}
                            quality={100}
                        />
                        <div className='absolute top-3 w-full '>
                            <div className='flex flex-col w-1/5 ml-5 py-2 bg-bg-arch items-center justify-center'>
                            <p className='font-bold'>26</p>
                            <p className='font-bold text-sm'>JUN</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className=' h-[500px]'>
                        <Image
                            src={fachadaDia}
                            style={{ objectPosition: 'bottom', objectFit: 'cover', }}
                            quality={100}
                        />
                        <div className='absolute top-3 w-full '>
                            <div className='flex flex-col w-1/5 ml-5 py-2 bg-bg-arch items-center justify-center'>
                            <p className='font-bold'>26</p>
                            <p className='font-bold text-sm'>JUN</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className=' h-[500px]'>
                        <Image
                            src={fachadaDia}
                            style={{ objectPosition: 'bottom', objectFit: 'cover', }}
                            quality={100}
                        />
                        <div className='absolute top-3 w-full '>
                            <div className='flex flex-col w-1/5 ml-5 py-2 bg-bg-arch items-center justify-center'>
                            <p className='font-bold'>26</p>
                            <p className='font-bold text-sm'>JUN</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className=' h-[500px]'>
                        <Image
                            src={fachadaDia}
                            style={{ objectPosition: 'bottom', objectFit: 'cover', }}
                            quality={100}
                        />
                        <div className='absolute top-3 w-full '>
                            <div className='flex flex-col w-1/5 ml-5 py-2 bg-bg-arch items-center justify-center'>
                            <p className='font-bold'>26</p>
                            <p className='font-bold text-sm'>JUN</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className=' h-[500px]'>
                        <Image
                            src={fachadaDia}
                            style={{ objectPosition: 'bottom', objectFit: 'cover', }}
                            quality={100}
                        />
                        <div className='absolute top-3 w-full '>
                            <div className='flex flex-col w-1/5 ml-5 py-2 bg-bg-arch items-center justify-center'>
                            <p className='font-bold'>26</p>
                            <p className='font-bold text-sm'>JUN</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <div className=' h-[500px]'>
                            <Image
                                src={fachadaDia}
                                style={{ objectPosition: 'bottom', objectFit: 'cover', }}
                                quality={100}
                            />
                            <div className='absolute top-3 w-full '>
                                <div className='flex flex-col w-1/5 ml-5 py-2 bg-bg-arch items-center justify-center'>
                                <p className='font-bold'>26</p>
                                <p className='font-bold text-sm'>JUN</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

 
            </Swiper>
            <div className='absolute z-40 top-0 w-full h-full'>
                <div className='h-full flex justify-between'>
                    <div className='prev flex items-center justify-center'>
                        <button className=" next cursor-pointer bg-bg-arch w-fit h-fit p-4 rounded-full"> <FaArrowLeft size={18} color='white' /></button>
                    </div>
                    <div className=' next flex items-center justify-center'>
                        <button className="next cursor-pointer bg-bg-arch w-fit h-fit p-4 rounded-full"> <FaArrowRight size={18} color='white' /></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
