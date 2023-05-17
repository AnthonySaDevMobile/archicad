import Image from 'next/image'
import React, { useState } from 'react'
import significado from '../../../public/significado.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import construção from '../../../public/construção.jpg'
import arquitetura from '../../../public/arquitetura.jpg'
import interior from '../../../public/interior.jpg'
import realização from '../../../public/realização.jpg'

export default function Significado() {

    const [tabSelected, setTabSelected] = useState(0);

    const handleTabSelect = (index) => {
        setTabSelected(index);
    };

    return (
        <div className='mt-16 h-fit md:h-screen ' id="significado">
            <div className='relative md:h-3/5 h-[300px]'>
                <Image
                    src={significado}
                    style={{ objectPosition: 'top', objectFit: 'cover', height: '100%' }}
                    quality={100}
                />
                <div className='absolute top-6 w-full h-full text-center'>
                    <div className='h-1/3 flex flex-col items-center justify-center'>
                        <p className='font-extrabold text-2xl md:text-5xl'>Um significado para</p>
                        <p className='font-extrabold md:text-5xl text-2xl'>cada detalhe.</p>
                        <p className='mt-2 md:mt-5 text-white font-semibold md:text-lg text-base '>Uma verdadeira obra prima</p>
                    </div>
                </div>
            </div>
            <div className=' w-full -mt-24 md:-mt-36 z-20 absolute'>
                <Tabs className="md:w-9/12 md:m-auto">
                    <TabList className="flex items-center  justify-between md:gap-0 gap-3">
                        <Tab className="md:h-[500px] relative md:w-[300px] h-[150px]"
                            onClick={() => handleTabSelect(0)}>

                            <Image
                                src={construção}
                                style={{ objectPosition: 'center', objectFit: 'cover', height: '100%' }}
                                quality={100}
                                className='brightness-[.4]'
                            />
                            <div className='absolute bottom-10 w-full'>
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <p className='text-white font-extrabold md:mb-5 md:text-base text-xs'>Construção</p>
                                    <div
                                        className={`${tabSelected === 0 ? 'flex' : 'hidden'
                                            } flex-col md:text-base text-xs items-center justify-center md:mb-20 text-white font-extralight`}
                                    >
                                        <p>Planejamento</p>
                                        <p>Projeto Civil</p>
                                        <p>Outro</p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab className="md:h-[500px] relative md:w-[300px] h-[150px]"
                            onClick={() => handleTabSelect(1)}

                        >
                            <Image
                                src={arquitetura}
                                style={{ objectPosition: 'center', objectFit: 'cover', height: '100%' }}
                                quality={100}
                                className='brightness-[.4]'
                            />
                            <div className='absolute bottom-10 w-full'>
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <p className='text-white font-extrabold md:mb-5 md:text-base text-xs'>Arquitetura</p>
                                    <div
                                        className={`${tabSelected === 1 ? 'flex' : 'hidden'
                                            } flex-col md:text-base text-xs items-center justify-center md:mb-20 text-white font-extralight`}
                                    >
                                        <p>Planejamento</p>
                                        <p>Projeto Civil</p>
                                        <p>Outro</p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab className="md:h-[500px] relative md:w-[300px] h-[150px]"
                            onClick={() => handleTabSelect(2)}>
                            <Image
                                src={interior}
                                style={{ objectPosition: 'center', objectFit: 'cover', height: '100%' }}
                                quality={100}
                                className='brightness-[.4]'
                            />
                            <div className='absolute bottom-10 w-full'>
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <p className='text-white font-extrabold md:mb-5 md:text-base text-xs'>Interior</p>
                                    <div
                                        className={`${tabSelected === 2 ? 'flex' : 'hidden'
                                            } flex-col md:text-base text-xs items-center justify-center md:mb-20 text-white font-extralight`}
                                    >
                                        <p>Planejamento</p>
                                        <p>Projeto Civil</p>
                                        <p>Outro</p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab className="md:h-[500px] relative md:w-[300px] h-[150px]"
                            onClick={() => handleTabSelect(3)}>
                            <Image
                                src={realização}
                                style={{ objectPosition: 'center', objectFit: 'cover', height: '100%' }}
                                quality={100}
                                className='brightness-[.4]'
                            />
                            <div className='absolute bottom-10 w-full'>
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <p className='text-white font-extrabold md:mb-5 md:text-base text-xs'>Realização</p>
                                    <div
                                        className={`${tabSelected === 3 ? 'flex' : 'hidden'
                                            } flex-col md:text-base text-xs items-center justify-center md:mb-20 text-white font-extralight`}
                                    >
                                        <p>Planejamento</p>
                                        <p>Projeto Civil</p>
                                        <p>Outro</p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </TabList>

                    <TabPanel className="text-center mt-10">
                        <h2>Breve texto que resume esta criação CONSTRUÇÃO</h2>
                    </TabPanel>
                    <TabPanel className="text-center mt-10">
                        <h2>Breve texto que resume esta criação ARQUITETURA</h2>
                    </TabPanel>
                    <TabPanel className="text-center mt-10">
                        <h2>Breve texto que resume esta criação INTERIOR</h2>
                    </TabPanel>
                    <TabPanel className="text-center mt-10">
                        <h2>Breve texto que resume esta criação REALIZAÇÃO</h2>
                    </TabPanel>
                </Tabs>
                <div className=' mt-10 flex items-center justify-center'>
                    <button className='bg-bg-arch py-3 px-6 rounded-3xl font-extrabold'>
                        Falar com um consultor
                    </button>
                </div>
            </div>
        </div>
    )
}
