import React, { useState, useEffect } from 'react'
import { FaEye, } from 'react-icons/fa'
import { MdDiamond } from 'react-icons/md'
import { GiMountainCave } from 'react-icons/gi'
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";
export default function Valores() {

    const valoresRef = collection(db, "valores");
    const [valores, setValores] = useState([])
    useEffect(() => {
        const getValores = async () => {
            const data = await getDocs(valoresRef);
            setValores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getValores();
    }, []);


    return (
        <div className='bg-bg-arch mt-10' id='valores'>
            {valores.map((item) => (
                <div key={item.id} className='md:flex w-8/12 m-auto gap-5'>
                    <div className=' md:w-1/3 py-6 flex flex-col gap-3'>
                        <GiMountainCave color='white' size={28} />
                        <p className='font-bold'>Missão</p>
                        <p>{item.textoMissao}</p>
                    </div>
                    <div className=' md:w-1/3 py-6 flex flex-col gap-3'>
                        <FaEye color='white' size={28} />
                        <p className='font-bold'>Visão</p>
                        <p>{item.textoVisao}</p>
                    </div>
                    <div className=' md:w-1/3 py-6 flex flex-col gap-3'>
                        <MdDiamond color='white' size={28} />
                        <p className='font-bold'>Valores</p>
                        <p>{item.textoValores}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
