import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

export default function QuemSomos() {

    const quemSomosRef = collection(db, "quemSomos");
    const [quemSomos, setQuemSomos] = useState([])
    useEffect(() => {
        const getQuemSomos = async () => {
            const data = await getDocs(quemSomosRef);
            setQuemSomos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getQuemSomos();
    }, []);

    return (
        <div className='mt-10 flex flex-col items-center justify-center' id="sobre">

            <h1 className='font-extrabold text-2xl'>Quem somos</h1>
            <p className='text-zinc-400'>Um pouco sobre nós</p>
            {quemSomos.map((item) => (
                <div key={item.id}>
                    <div className='md:flex justify-center gap-10 mt-10 px-10'>
                        <div className='bg-zinc-500 h-[300px] md:w-1/3'>
                            <img
                                src={item.imagem1}
                                style={{ objectPosition: 'bottom', objectFit: 'cover' }}
                                className='brightness-50 w-full h-full'
                                alt='sobre'
                            />
                        </div>
                        <div className='md:w-1/3 pt-10 flex flex-col gap-4'>
                            <h1 className='font-extrabold text-2xl'>{item.titulo}</h1>

                            <p>{item.texto}</p>
                        </div>
                    </div>
                    <div className='md:flex md:flex-row-reverse justify-center gap-10 mt-10 px-10'>
                        <div className='bg-zinc-500 h-[300px] md:w-1/3'>
                        <img
                                src={item.imagem2}
                                style={{ objectPosition: 'bottom', objectFit: 'cover' }}
                                className='brightness-50 w-full h-full'
                                alt='sobre'
                            />
                        </div>
                        <div className='md:w-1/3 pt-10 flex flex-col gap-4'>
                            <h1 className='font-extrabold text-2xl'>{item.titulo2}</h1>
                            <p>{item.texto2}</p>
                            <button className='bg-bg-arch w-fit h-fit px-10 py-4 rounded-3xl font-bold '>Falar com a gente</button>

                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
