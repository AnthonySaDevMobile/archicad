import { db } from "@/services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { FaBuilding, FaHome } from 'react-icons/fa';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Lancamentos({display}) {

    const lancamentosRef = collection(db, "lancamentos");
    const [lancamentos, setLancamentos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Tudo");
    const [filtered, setFiltered] = useState(lancamentos);
    const [selectedButton, setSelectedButton] = useState('');
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    useEffect(() => {
        const getLancamentos = async () => {
            const data = await getDocs(lancamentosRef);
            const lancamentosData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            setLancamentos(lancamentosData);
            setFiltered(lancamentosData); // Definir os produtos filtrados com os dados iniciais
        };
        getLancamentos();
    }, []);


    useEffect(() => {
        handleCategoryChange(selectedCategory); // Passar a categoria selecionada como argumento
    }, [selectedCategory]); // Alterar o nome do estado de "produtos" para "selectedCategory"

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const lancamentosFiltrados =
            category === "Tudo"
                ? lancamentos
                : lancamentos.filter((item) => {
                    if (category === "Outros") {
                        // Filtrar os lancamentos com nomes diferentes das outras categorias
                        return ![
                            "Fachada",
                            "Interior",
                            "Conforto",
                            "Identidade",
                        ].includes(item.categoria);
                    } else {
                        // Filtrar os lancamentos pela categoria selecionada
                        return item.categoria === category;
                    }
                });

        setFiltered(lancamentosFiltrados);
    };
    function chunkArray(array, size) {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    }

    return (
        <div className='bg-white h-fit w-full' id="lancamento">
            <div className='w-full text-center md:text-left flex md:flex-row flex-col gap-4 mt-10 items-center justify-around' style={{display:display}}>
                <div className='px-24 items-center flex flex-col gap-2'>
                    <FaBuilding size={50} color='#e4bea7' />
                    <h1 className='font-extrabold text-lg'>Edificações</h1>
                    <p>I have worked with many companies affering supplemental industrial services, and out of all those companies.</p>
                </div>
                <div className='px-24 items-center flex flex-col gap-2'>
                    <FaHome size={50} color='#e4bea7' />
                    <h1 className='font-extrabold text-lg'>Residencial</h1>
                    <p>I have worked with many companies affering supplemental industrial services, and out of all those companies.</p>
                </div>
                <div className='px-24 items-center flex flex-col gap-2'>
                    <TbBuildingSkyscraper size={50} color='#e4bea7' />
                    <h1 className='font-extrabold text-lg'>Corporativa</h1>
                    <p>I have worked with many companies affering supplemental industrial services, and out of all those companies.</p>
                </div>
            </div>
            <div>
                <div className='mt-10 w-full flex flex-col items-center justify-center'>
                    <h1 className='font-extrabold text-2xl' style={{display: display}}>Premium Residence</h1>
                    <p className='text-zinc-400 font-semibold' style={{display:display}}>Terezinha Pires</p>
                    <div className=' mt-10 text-xs md:text-base flex justify-around w-full md:w-7/12 font-semibold'>
                        <button
                            className={`decoration-bg-arch transition ease-in text-zinc-900 hover:border-y-4 hover:border-bg-arch decoration-bg-slide hover:transition hover:ease-in h-[40px] ${selectedButton === 'tudo' ? 'border-y-4 border-bg-arch' : ''
                                }`}
                            onClick={() => {
                                handleButtonClick('tudo')
                                handleCategoryChange("Tudo")
                            }}
                        >
                            Tudo
                        </button>
                        <button
                            className={`decoration-bg-arch transition ease-in text-zinc-900 hover:border-y-4 hover:border-bg-arch decoration-bg-slide hover:transition hover:ease-in h-[40px] ${selectedButton === 'fachada' ? 'border-y-4 border-bg-arch' : ''
                                }`}
                            onClick={() => {
                                handleButtonClick('fachada')
                                handleCategoryChange("Fachada")
                            }}
                        >
                            Fachada
                        </button>
                        <button
                            className={`decoration-bg-arch transition ease-in text-zinc-900 hover:border-y-4 hover:border-bg-arch decoration-bg-slide hover:transition hover:ease-in h-[40px] ${selectedButton === 'interior' ? 'border-y-4 border-bg-arch' : ''
                                }`}
                            onClick={() => {
                                handleButtonClick('interior')
                                handleCategoryChange("Interior")
                            }}
                        >
                            Interior
                        </button>
                        <button
                            className={`decoration-bg-arch transition ease-in text-zinc-900 hover:border-y-4 hover:border-bg-arch decoration-bg-slide hover:transition hover:ease-in h-[40px] ${selectedButton === 'conforto' ? 'border-y-4 border-bg-arch' : ''
                                }`}
                            onClick={() => {
                                handleButtonClick('conforto')
                                handleCategoryChange("Conforto")
                            }}
                        >
                            Conforto
                        </button>
                        <button
                            className={`decoration-bg-arch transition ease-in text-zinc-900 hover:border-y-4 hover:border-bg-arch decoration-bg-slide hover:transition hover:ease-in h-[40px] ${selectedButton === 'identidade' ? 'border-y-4 border-bg-arch' : ''
                                }`}
                            onClick={() => {
                                handleButtonClick('identidade')
                                handleCategoryChange("Identidade")
                            }
                            }
                        >
                            Identidade
                        </button>
                    </div>
                </div>

                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="w-9/12 m-auto mt-10 flex flex-col gap-8"
                >
                    {chunkArray(filtered, 6).length === 0 ? (
                        <p>Por enquanto não há nada aqui...</p>
                    ) : (
                        chunkArray(filtered, 6).map((grupo, index) => (
                            <SwiperSlide key={index} className="flex gap-5">
                                <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-x-10 md:gap-y-5">
                                    {grupo.map((item) => (
                                        <div className="md:h-[310px] h-[200px] relative md:mt-0 mt-3" key={item.id}>
                                            <div className="bg-black w-full h-full absolute opacity-0 hover:opacity-90 transition-opacity ease-in delay-100">
                                                <div className="text-white h-full items-center justify-center flex flex-col">
                                                    <p className="text-bg-arch text-sm opacity-100">
                                                        {item.nome} - {item.caracteristica}
                                                    </p>
                                                    <p className="font-extrabold text-xl opacity-100">
                                                        {item.nome}
                                                    </p>
                                                </div>
                                            </div>
                                            <img
                                                src={item.imagem}
                                                width="250"
                                                height="250"
                                                alt="Foto"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
        </div>
    )
}
