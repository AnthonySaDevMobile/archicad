import React, {useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";
export default function HomeComponent() {

    const homeCollectionRef = collection(db, "home");
    const [homeImages, setHomeImages] = useState([])

    useEffect(() => {
        const getHomeImages = async () => {
            const data = await getDocs(homeCollectionRef);
            setHomeImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getHomeImages();
    }, []);

    return (

        <div className="relative w-full 0 h-screen" id='home'>
            {homeImages.map((imagem) => (
                <div className='w-full h-full' key={imagem.id}>
                    <img
                        src={imagem.imagem}
                        style={{ objectPosition: 'bottom', objectFit: 'cover' }}
                        className='brightness-50 w-full h-full'
                        alt='home'
                    />
                    <div className='text-white font-extrabold md:text-5xl text-2xl absolute md:top-1/2 top-1/3 md:left-1/4 left-11'>
                        <p>Seu futuro</p>
                        <div className='flex gap-1'>
                            <p>reside aqui</p>
                            <p className='text-bg-arch'>.</p>
                        </div>
                        <button className='bg-bg-arch rounded-3xl mt-10 text-base text-black px-10 py-3'>Contato</button>
                    </div>
                </div>
            ))}

        </div>
    )
}
