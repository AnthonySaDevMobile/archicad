import { db } from "@/services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsClock, BsPinMap } from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive';
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Projetos() {
    const [slidesPerView, setSlidesPerView] = useState(4);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const projetosRef = collection(db, "projetos");
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        const getProjetos = async () => {
            const data = await getDocs(projetosRef);
            setProjetos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id, isOpen: false })));
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

    const toggleSlide = (id) => {
        setProjetos((prevProjetos) =>
            prevProjetos.map((projeto) => {
                if (projeto.id === id) {
                    return { ...projeto, isOpen: !projeto.isOpen };
                }
                return projeto;
            })
        );
    };

    return (
        <div className="w-full relative flex items-center justify-center h-[80vh] bg-zinc-100" id="projetos">
            <div className='relative md:w-9/12  md:m-auto md: mt-10 text-center  h-fit'>
                <p className='font-extrabold text-2xl '>Nossos Projetos</p>
                <p className='text-zinc-400'>Veja nosso portfólio</p>
                <Swiper
                    slidesPerView={slidesPerView}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={50}
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    className='mt-10 py-4 md:h-fit'
                >
                    {projetos.map((item) => (
                        <SwiperSlide className='relative pb-10' key={item.id}>
                            <div className='h-[500px]'>
                                <img
                                    onClick={() => toggleSlide(item.id)}
                                    src={item.imagem}
                                    alt="Foto do projeto"
                                    className="w-full h-full object-cover"
                                />
                                <div className='absolute top-3 w-full'>
                                    <div className='flex flex-col w-1/5 ml-5 py-2 bg-bg-arch items-center justify-center'>
                                        <p className='font-bold'>{item.dia}</p>
                                        <p className='font-bold text-sm'>{item.mes}</p>
                                    </div>
                                </div>
                            </div>

                            {!item.isOpen ? (
                                <></>
                            ) : (
                                <div className="bg-white text-left h-fit py-14 px-8 z-30 absolute -bottom-4 -left-10 w-fit">
                                    <div className="h-full flex flex-col items-start justify-around gap-10">
                                        <h1 className="font-bold text-xl">{item.nome}</h1>
                                        <p className="font-semibold text-zinc-600">{item.caracteristica}</p>
                                        <span className="flex items-center gap-2 text-zinc-500">
                                            <div className="bg-zinc-200 p-2 rounded-full">
                                                <BsClock color="#000" />
                                            </div>
                                            Entregue {item.entregue}
                                        </span>
                                        <span className="flex items-center gap-2 text-zinc-500">
                                            <div className="bg-zinc-200 p-2 rounded-full">
                                                <BsPinMap color="#000" />
                                            </div>
                                            {item.endereco}
                                        </span>
                                        <Link href={`/projects/${item.id}`}>
                                            <button className="font-bold bg-[#ebd6bf] py-3 px-4 text-sm rounded-3xl">Ver detalhes</button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='absolute top-0 w-full  h-full'>
                    <div className='h-full flex justify-between'>
                        <div ref={prevRef} className='flex z-20 items-center justify-center'>
                            <FaArrowLeft className="  cursor-pointer bg-bg-arch w-fit h-fit p-4 rounded-full" size={18} color='white' />
                        </div>
                        <div ref={nextRef} className='z-20 flex items-center justify-center'>
                            <FaArrowRight className=" cursor-pointer bg-bg-arch w-fit h-fit p-4 rounded-full" size={18} color='white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
