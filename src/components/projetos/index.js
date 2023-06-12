import { Navigation, Autoplay } from "swiper";
import { FaArrowRight, FaArrowLeft, FaFacebook, FaTwitter, FaGooglePlus, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useState, useEffect, useRef } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { useMediaQuery } from 'react-responsive';

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";
export default function Projetos() {

    const [slidesPerView, setSlidesPerView] = useState(3);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [_, setInit] = useState();
    const projetosRef = collection(db, "projetos");
    const [projetos, setProjetos] = useState([])

    useEffect(() => {
        const getProjetos = async () => {
            const data = await getDocs(projetosRef);
            setProjetos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getProjetos();
    }, []);

    useEffect(() => {
        if (isMobile) {
            setSlidesPerView(1);
        } else {
            setSlidesPerView(3);
        }
    }, [isMobile]);



    return (
        <div className="w-full relative pt-12 bg-zinc-100" id="projetos">

            <div className='relative md:w-9/12  md:m-auto md: mt-10 text-center  h-fit'>
                <p className='font-extrabold text-2xl '>Nossos Projetos</p>
                <p className='text-zinc-400'>Veja nosso portifólio</p>
                <Swiper
                    slidesPerView={slidesPerView}
                    loop={true}
                    centeredSlides={true}
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={() => setInit(true)}
                    className='mt-10 md:h-fit'
                >
                   

                    {projetos.map((item) => (
                        <SwiperSlide className='relative' key={item.id}>
                            <div className=' h-[500px] '>
                                <img
                                    src={item.imagem}
                                    alt="Foto do projeto"
                                    className="w-full h-full object-cover"
                                />
                                <div className='absolute top-3 w-full '>
                                    <div className='flex flex-col w-1/5 ml-5 py-2 bg-bg-arch items-center justify-center'>
                                        <p className='font-bold'>{item.dia}</p>
                                        <p className='font-bold text-sm'>{item.mes}</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='absolute top-0 w-full  h-full'>
                    <div className='h-full flex justify-between'>
                        <div  ref={prevRef} className='flex z-20 items-center justify-center'>
                            <FaArrowLeft className="  cursor-pointer bg-bg-arch w-fit h-fit p-4 rounded-full" size={18} color='white' />
                        </div>
                        <div ref={nextRef}  className='z-20 flex items-center justify-center'>
                            <FaArrowRight className=" cursor-pointer bg-bg-arch w-fit h-fit p-4 rounded-full" size={18} color='white' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
