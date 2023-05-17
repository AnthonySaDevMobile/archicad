import React, { useState } from 'react'
import { FaBuilding, FaHome } from 'react-icons/fa'
import { TbBuildingSkyscraper } from 'react-icons/tb'
import suiteMaster from '../../../public/suiteMaster.jpg'
import fachadaDia from '../../../public/fachadaDia.jpg'
import academia from '../../../public/academia.jpg'
import cozinha from '../../../public/cozinha.jpg'
import piscina from '../../../public/piscina.jpg'
import Image from 'next/image'

export default function Lancamentos() {

    const [selectedButton, setSelectedButton] = useState('');
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className='bg-white h-fit w-full' id="lancamento">
            <div className='w-full text-center md:text-left flex md:flex-row flex-col gap-4 mt-10 items-center justify-around'>
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
                    <h1 className='font-extrabold text-2xl'>Premium Residence</h1>
                    <p className='text-zinc-400 font-semibold'>Terezinha Pires</p>
                    <div className=' mt-10 text-xs md:text-base flex justify-around w-full md:w-7/12 font-semibold'>
                        <button
                            className={`decoration-bg-arch transition ease-in text-zinc-900 hover:border-y-4 hover:border-bg-arch decoration-bg-slide hover:transition hover:ease-in h-[40px] ${selectedButton === 'tudo' ? 'border-y-4 border-bg-arch' : ''
                                }`}
                            onClick={() => handleButtonClick('tudo')}
                        >
                            Tudo
                        </button>
                        <button
                            className={`decoration-bg-arch transition ease-in text-zinc-900 hover:border-y-4 hover:border-bg-arch decoration-bg-slide hover:transition hover:ease-in h-[40px] ${selectedButton === 'fachada' ? 'border-y-4 border-bg-arch' : ''
                                }`}
                            onClick={() => handleButtonClick('fachada')}
                        >
                            Fachada
                        </button>
                        <button
                            className={`decoration-bg-arch transition ease-in text-zinc-900 hover:border-y-4 hover:border-bg-arch decoration-bg-slide hover:transition hover:ease-in h-[40px] ${selectedButton === 'interior' ? 'border-y-4 border-bg-arch' : ''
                                }`}
                            onClick={() => handleButtonClick('interior')}
                        >
                            Interior
                        </button>
                        <button
                            className={`decoration-bg-arch transition ease-in text-zinc-900 hover:border-y-4 hover:border-bg-arch decoration-bg-slide hover:transition hover:ease-in h-[40px] ${selectedButton === 'conforto' ? 'border-y-4 border-bg-arch' : ''
                                }`}
                            onClick={() => handleButtonClick('conforto')}
                        >
                            Conforto
                        </button>
                        <button
                            className={`decoration-bg-arch transition ease-in text-zinc-900 hover:border-y-4 hover:border-bg-arch decoration-bg-slide hover:transition hover:ease-in h-[40px] ${selectedButton === 'identidade' ? 'border-y-4 border-bg-arch' : ''
                                }`}
                            onClick={() => handleButtonClick('identidade')}
                        >
                            Identidade
                        </button>
                    </div>
                </div>
                <div className='w-9/12 m-auto mt-10 flex flex-col gap-8'>
                    <div className='flex gap-5'>
                        <div className='md:h-[500px] h-[200px] relative w-3/5'>
                        <div className='bg-black w-full h-full absolute opacity-0 hover:opacity-90 transition-opacity ease-in delay-100'>
                            <div className='text-white h-full items-center justify-center flex flex-col'>
                            <p className='text-bg-arch text-sm opacity-100'>Suíte Master - Duplex</p>
                            <p className='font-extrabold text-xl opacity-100'>Suíte Master</p>
                             </div>
                        </div>
                            <Image
                                src={suiteMaster}
                                style={{ objectPosition: 'bottom', objectFit: 'cover', height: '100%' }}
                                quality={100}
                            />
                            
                        </div>
                        <div className='md:h-[500px] h-[200px] relative w-2/5'>
                        <div className='bg-black w-full h-full absolute opacity-0 hover:opacity-90 transition-opacity ease-in delay-100'>
                            <div className='text-white h-full items-center justify-center flex flex-col'>
                            <p className='text-bg-arch text-sm opacity-100'>Suíte Master - Duplex</p>
                            <p className='font-extrabold text-xl opacity-100'>Suíte Master</p>
                             </div>
                        </div>
                            <Image
                                src={fachadaDia}
                                style={{ objectPosition: 'bottom', objectFit: 'cover', height: '100%' }}
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='md:h-[500px] h-[200px] relative w-2/5'>
                        <div className='bg-black w-full h-full absolute opacity-0 hover:opacity-90 transition-opacity ease-in delay-100'>
                            <div className='text-white h-full items-center justify-center flex flex-col'>
                            <p className='text-bg-arch text-sm opacity-100'>Suíte Master - Duplex</p>
                            <p className='font-extrabold text-xl opacity-100'>Suíte Master</p>
                             </div>
                        </div>
                            <Image
                                src={academia}
                                style={{ objectPosition: 'bottom', objectFit: 'cover', height: '100%' }}
                                quality={100}
                            />
                        </div>
                        <div className='md:h-[500px] h-[200px] relative w-3/5'>
                        <div className='bg-black w-full h-full absolute opacity-0 hover:opacity-90 transition-opacity ease-in delay-100'>
                            <div className='text-white h-full items-center justify-center flex flex-col'>
                            <p className='text-bg-arch text-sm opacity-100'>Suíte Master - Duplex</p>
                            <p className='font-extrabold text-xl opacity-100'>Suíte Master</p>
                             </div>
                        </div>
                            <Image
                                src={cozinha}
                                style={{ objectPosition: 'bottom', objectFit: 'cover', height: '100%' }}
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='md:h-[500px] h-[200px] relative w-3/5'>
                        <div className='bg-black w-full h-full absolute opacity-0 hover:opacity-90 transition-opacity ease-in delay-100'>
                            <div className='text-white h-full items-center justify-center flex flex-col'>
                            <p className='text-bg-arch text-sm opacity-100'>Suíte Master - Duplex</p>
                            <p className='font-extrabold text-xl opacity-100'>Suíte Master</p>
                             </div>
                        </div>
                            <Image
                                src={piscina}
                                style={{ objectPosition: 'bottom', objectFit: 'cover', height: '100%' }}
                                quality={100}
                            />
                        </div>
                        <div className='bg-zinc-600 md:h-[500px] h-[200px] relative w-2/5'>
                        <div className='bg-black w-full h-full absolute opacity-0 hover:opacity-90 transition-opacity ease-in delay-100'>
                            <div className='text-white h-full items-center justify-center flex flex-col'>
                            <p className='text-bg-arch text-sm opacity-100'>Suíte Master - Duplex</p>
                            <p className='font-extrabold text-xl opacity-100'>Suíte Master</p>
                             </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
