import { db } from "@/services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import arquitetura from '../../../public/arquitetura.jpg';
import construcao from '../../../public/fachadaDia.jpg';
import interior from '../../../public/interior.jpg';
import realização from '../../../public/realização.jpg';
import significado from '../../../public/significado.jpg';

export default function Significado() {

    const significadoRef = collection(db, "significado");
    const [significadoTexts, setSignificadoTexts] = useState([]);
    const [significadoTexts2, setSignificadoTexts2] = useState([]);
    const [significadoTexts3, setSignificadoTexts3] = useState([]);
    const [significadoTexts4, setSignificadoTexts4] = useState([]);
    const [tabSelected, setTabSelected] = useState(0);

    useEffect(() => {
        const getSignificado = async () => {
            const data = await getDocs(significadoRef);
            setSignificadoTexts([
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0],
            ]);
            setSignificadoTexts2([
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[1],
            ]);
            setSignificadoTexts3([
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[2],
            ]);
            setSignificadoTexts4([
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[3],
            ]);
        };
        getSignificado();
    }, []);



    const handleTabSelect = (index) => {
        setTabSelected(index);
    };

    return (
        <div className='mt-16 h-fit md:h-screen ' id="significado">
            <div className='relative md:h-3/5 h-[300px]'>
                <Image
                    src={significado}
                    alt='back'
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

                    {significadoTexts.map((item) => (
                            <Tab className="md:h-[500px] relative md:w-[300px] h-[150px]"
                                onClick={() => handleTabSelect(0)}
                                key={item.id}
                                >
                                <Image
                                    src={arquitetura}
                                    alt='back'
                                    style={{ objectPosition: 'center', objectFit: 'cover', height: '100%' }}
                                    quality={100}
                                    className='brightness-[.4]'
                                />
                                <div className='absolute bottom-10 w-full'>
                                    <div className='w-full flex flex-col items-center justify-center'>
                                        <p className='text-white font-extrabold md:mb-5 md:text-base text-xs'>Arquitetura</p>
                                        <div
                                            className={`${tabSelected === 0 ? 'flex' : 'hidden'
                                                } flex-col md:text-base text-xs items-center justify-center md:mb-20 text-white font-extralight`}
                                        >
                                            <p>{item.descricao1}</p>
                                            <p>{item.descricao2}</p>
                                            <p>{item.descricao3}</p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        ))}

                        {significadoTexts2.map((item) => (
                            <Tab className="md:h-[500px] relative md:w-[300px] h-[150px]"
                                onClick={() => handleTabSelect(1)}
                                key={item.id}
                                >
                                <Image
                                    src={construcao}
                                    alt='back'
                                    style={{ objectPosition: 'center', objectFit: 'cover', height: '100%' }}
                                    quality={100}
                                    className='brightness-[.4]'
                                />
                                <div className='absolute bottom-10 w-full'>
                                    <div className='w-full flex flex-col items-center justify-center'>
                                        <p className='text-white font-extrabold md:mb-5 md:text-base text-xs'>Construção</p>
                                        <div
                                            className={`${tabSelected === 1 ? 'flex' : 'hidden'
                                                } flex-col md:text-base text-xs items-center justify-center md:mb-20 text-white font-extralight`}
                                        >
                                            <p>{item.descricao1}</p>
                                            <p>{item.descricao2}</p>
                                            <p>{item.descricao3}</p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        ))}

                        {significadoTexts3.map((item) => (
                            <Tab className="md:h-[500px] relative md:w-[300px] h-[150px]"
                                onClick={() => handleTabSelect(2)}
                                key={item.id}
                                >
                                <Image
                                    src={interior}
                                    alt='back'
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
                                            <p>{item.descricao1}</p>
                                            <p>{item.descricao2}</p>
                                            <p>{item.descricao3}</p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        ))}

                        {significadoTexts4.map((item) => (
                            <Tab className="md:h-[500px] relative md:w-[300px] h-[150px]"
                                onClick={() => handleTabSelect(3)}
                                key={item.id}
                                >
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
                                            <p>{item.descricao1}</p>
                                            <p>{item.descricao2}</p>
                                            <p>{item.descricao3}</p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        ))}

                    </TabList>

                    {significadoTexts.map((item)=>(
                   <TabPanel className="text-center mt-10" key={item.id}>
                        <h2>{item.detalhamento} </h2>
                    </TabPanel>
                   ))}                  
                    {significadoTexts2.map((item)=>(
                    <TabPanel className="text-center mt-10" key={item.id}>
                         <h2>{item.detalhamento}</h2>
                     </TabPanel>
                    ))}                   
                    {significadoTexts3.map((item)=>(
                        <TabPanel className="text-center mt-10" key={item.id}>
                             <h2>{item.detalhamento}</h2>
                         </TabPanel>
                        ))}
                   {significadoTexts4.map((item)=>(
                   <TabPanel className="text-center mt-10" key={item.id}>
                        <h2>{item.detalhamento}</h2>
                    </TabPanel>
                   ))}
               
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
