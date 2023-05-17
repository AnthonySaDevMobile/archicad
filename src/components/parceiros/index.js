import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import adidas from '../../../public/adidas.png'
import puma from '../../../public/puma.png'
import nike from '../../../public/nike.png'
import jordan from '../../../public/jordan.png'
import lv from '../../../public/lv.png'
import umbro from '../../../public/umbro.png'
import bicicletas from '../../../public/biciletas.jpg'
import Image from 'next/image';

export default function Parceiros() {
    return (
        <div className=' md:w-9/12 md:m-auto flex flex-col items-center justify-center' id="parceiro">
            <h1 className='font-extrabold text-2xl mt-10'>Parceiros</h1>
            <p className='text-zinc-400'>Quem nos proporciona levar o melhor pra você</p>
            <Tabs className="w-full flex flex-col items-center justify-center mt-10">
                <TabPanel>
                    <div className=' md:flex gap-4 justify-between w-full'>
                    <div className='md:w-2/3'>
                    <Image
                            src={bicicletas}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-full h-full"
                        />
                    </div>
                    <div className='pt-8 px-2 md:w-1/3 flex flex-col gap-3'>
                        <p>Lorem ipsum dolor sit amet. Ut perspiciatis molestias id quisquam assumenda ut eligendi accusantium et fuga atque in assumenda eaque! Id consequatur quia eum omnis odio eos nulla animi.</p>
                        <p className='font-bold'>Euzébio Nobre</p>
                        <p className='text-zinc-400'>CEO Adidas</p>
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=' md:flex gap-4 justify-between w-full'>
                    <div className='md:w-2/3'>
                    <Image
                            src={bicicletas}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-full h-full"
                        />
                    </div>
                    <div className='pt-8 px-2 md:w-1/3 flex flex-col gap-3'>
                        <p>Lorem ipsum dolor sit amet. Ut perspiciatis molestias id quisquam assumenda ut eligendi accusantium et fuga atque in assumenda eaque! Id consequatur quia eum omnis odio eos nulla animi.</p>
                        <p className='font-bold'>Euzébio Nobre</p>
                        <p className='text-zinc-400'>CEO Nike</p>
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=' md:flex gap-4 justify-between w-full'>
                    <div className='md:w-2/3'>
                    <Image
                            src={bicicletas}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-full h-full"
                        />
                    </div>
                    <div className='pt-8 px-2 md:w-1/3 flex flex-col gap-3'>
                        <p>Lorem ipsum dolor sit amet. Ut perspiciatis molestias id quisquam assumenda ut eligendi accusantium et fuga atque in assumenda eaque! Id consequatur quia eum omnis odio eos nulla animi.</p>
                        <p className='font-bold'>Euzébio Nobre</p>
                        <p className='text-zinc-400'>CEO Jordan</p>
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=' md:flex gap-4 justify-between w-full'>
                    <div className='md:w-2/3'>
                    <Image
                            src={bicicletas}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-full h-full"
                        />
                    </div>
                    <div className='pt-8 px-2 md:w-1/3 flex flex-col gap-3'>
                        <p>Lorem ipsum dolor sit amet. Ut perspiciatis molestias id quisquam assumenda ut eligendi accusantium et fuga atque in assumenda eaque! Id consequatur quia eum omnis odio eos nulla animi.</p>
                        <p className='font-bold'>Euzébio Nobre</p>
                        <p className='text-zinc-400'>CEO Umbro</p>
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=' md:flex gap-4 justify-between w-full'>
                    <div className='md:w-2/3'>
                    <Image
                            src={bicicletas}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-full h-full"
                        />
                    </div>
                    <div className='pt-8 px-2 md:w-1/3 flex flex-col gap-3'>
                        <p>Lorem ipsum dolor sit amet. Ut perspiciatis molestias id quisquam assumenda ut eligendi accusantium et fuga atque in assumenda eaque! Id consequatur quia eum omnis odio eos nulla animi.</p>
                        <p className='font-bold'>Euzébio Nobre</p>
                        <p className='text-zinc-400'>CEO Louis Vuitton </p>
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=' md:flex gap-4 justify-between w-full'>
                    <div className='md:w-2/3'>
                    <Image
                            src={bicicletas}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-full h-full"
                        />
                    </div>
                    <div className='pt-8 px-2 md:w-1/3 flex flex-col gap-3'>
                        <p>Lorem ipsum dolor sit amet. Ut perspiciatis molestias id quisquam assumenda ut eligendi accusantium et fuga atque in assumenda eaque! Id consequatur quia eum omnis odio eos nulla animi.</p>
                        <p className='font-bold'>Euzébio Nobre</p>
                        <p className='text-zinc-400'>CEO Puma</p>
                    </div>
                    </div>
                </TabPanel>
                               
                
                <TabList className="w-full md:mt-10 mt-6 flex justify-between">
                    <Tab>
                        <Image
                            src={adidas}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-[50px] h-[50px]"
                        />
                    </Tab>
                    <Tab>
                        <Image
                            src={nike}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-[50px] h-[50px]"
                        /></Tab>
                    <Tab>
                        <Image
                            src={jordan}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-[50px] h-[50px]"
                        /></Tab>
                    <Tab>
                        <Image
                            src={umbro}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-[50px] h-[50px]"
                        /></Tab>
                    <Tab>
                        <Image
                            src={lv}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-[50px] h-[50px]"
                        /></Tab>
                    <Tab>
                        <Image
                            src={puma}
                            style={{ objectPosition: 'bottom', objectFit: 'contain', }}
                            quality={100}
                            className="w-[50px] h-[50px]"
                        /></Tab>
                </TabList>
            </Tabs>
        </div>
    )
}
