import { db } from "@/services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import cozinha from '../../../public/cozinha.jpg';
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaGooglePlus, FaInstagram } from "react-icons/fa";
export default function Depoimentos() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [_, setInit] = useState();
    const depoimentosRef = collection(db, "depoimentos");
    const [depoimentos, setDepoimentos] = useState([])

    useEffect(() => {
        const getDepoimentos = async () => {
            const data = await getDocs(depoimentosRef);
            setDepoimentos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getDepoimentos();
    }, []);

    return (
        <div className='relative h-fit' id="depoimentos">

            <Swiper
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={() => setInit(true)}
                className='mt-72 md:mt-52 md:h-1/4 h-fit'
            >
                {depoimentos.map((item) => (
                    <SwiperSlide key={item.id}>

                        <div className='bg-white md:h-[500px] h-[300px] opacity-40'>
                            <Image
                                src={cozinha}
                                style={{ objectPosition: 'bottom', objectFit: 'cover', height: '100%' }}
                                quality={100}
                            />
                        </div>
                        <div className='absolute top-0 w-full h-full md:text-base text-xs py-2'>
                            <div className='flex md:w-7/12 justify-between m-auto h-full'>
                                <div className='flex flex-col md:w-1/2 w-5/12 m-auto gap-2 md:px-10 px-5 items-start h-full justify-center'>
                                    <p className='text-[#670a0a] font-bold'>Depoimentos</p>
                                    <p className='font-extrabold md:text-2xl text-sm'>{item.nome}</p>
                                    <p className='mt-2 font-semibold md:text-base text-xs'>{item.comentario}</p>
                                    <div className='flex w-full mt-4 md:mt-10 justify-between'>
                                        <div>
                                            <p className='font-bold'>{item.user}</p>
                                            <p className='font-semibold'>{item.descricao}</p>
                                            <div className='flex gap-2 mt-2'>
                                                {item.facebook && (
                                                    <Link href={item.facebook} target='_blank'>
                                                        <FaFacebook />
                                                    </Link>
                                                )}
                                                {item.twitter && (
                                                    <Link href={item.twitter} target='_blank'>
                                                        <FaTwitter />
                                                    </Link>
                                                )}
                                                {item.google && (
                                                    <Link href={item.google} target='_blank'>
                                                        <FaGooglePlus />
                                                    </Link>
                                                )}
                                                {item.instagram && (
                                                    <Link href={item.instagram} target="_blank">
                                                        <FaInstagram />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div
                                    className='hidden md:flex h-[550px] w-fit'
                                >
                                    <img
                                        src={item.imagem}
                                        style={{ objectPosition: 'bottom', objectFit: 'contain' }}
                                        className='w-full h-full'
                                        alt='home'
                                    />
                                </div>
                                <div className="md:hidden w-1/5 flex justify-start items-end">
                                <img
                                        src={item.imagem}
                                        style={{ objectPosition: 'bottom', objectFit: 'contain' }}
                                        className='h-fit bg-bg-arch rounded-full border-4 border-black'
                                        alt='home'
                                    /> 
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='absolute top-0 w-full h-full'>
                <div className='md:w-9/12  m-auto h-full flex justify-between'>
                    <div className='flex z-40 items-center justify-center'>
                        <button ref={prevRef} className=" cursor-pointer bg-bg-arch w-fit h-fit p-4 rounded-full"> <FaArrowLeft size={18} /></button>
                    </div>
                    <div className='cursor-pointer z-40 flex items-center justify-center'>
                        <button ref={nextRef} className=" cursor-pointer bg-bg-arch w-fit h-fit p-4 rounded-full"> <FaArrowRight size={18} /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
