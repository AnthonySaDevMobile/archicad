'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HomeComponent from '@/components/home';
import Lancamentos from '@/components/lancamentos';
import Projetos from '@/components/projetos';
import Significado from '@/components/significado';
import { db } from "@/services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';

export default function ProjectPage({ params }) {
  const projetosRef = collection(db, "projetos");
  const [projetos, setProjetos] = useState([])
  const [projetoSelecionado, setProjetoSelecionado] = useState([])
  


  useEffect(() => {
    const getProjetos = async () => {
      const data = await getDocs(projetosRef);
      setProjetos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProjetos();
  }, []);

  useEffect(() => {
    const getProjetoSelecionado = async () => {
      const data = await getDocs(projetosRef);
      setProjetoSelecionado(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((projeto) => projeto.id === params.id));
    };
    getProjetoSelecionado();
  }, []);




  return (
    <div>
      <Header />
      {projetoSelecionado.map((item) => (
        <div key={item.id} className='w-full h-fit flex flex-col gap-5 justify-center'>
          <div className='relative'>
          <img src={item.imagem} className='w-full h-[65vh] object-cover brightness-80' alt={item.nome}/>
          <div className='text-white font-extrabold md:text-5xl text-2xl absolute md:top-1/2 top-1/3 md:left-1/4 left-11'>
                        <p>Seu futuro</p>
                        <div className='flex gap-1'>
                            <p>reside aqui</p>
                            <p className='text-bg-arch'>.</p>
                        </div>
                        <button className='bg-bg-arch rounded-3xl mt-10 text-base text-black px-10 py-3'>Contato</button>
                    </div>
          </div>
          <div className='text-center py-10 flex flex-col '>
            <h1 className="font-bold text-xl">{item.nome}</h1>
            <p className='font-semibold text-zinc-600'>{item.caracteristica}</p>
            <p className='opacity-70 font-semibold w-9/12 mx-auto whitespace-pre-line mt-10'>{item.descricao}</p>
          </div>
        </div>
      ))}
      <Lancamentos display={'none'}/>
      <Significado/>
      <div className='pt-[250px]'>
      <Projetos/>
      </div>
      <Footer/>
    </div>
  );
}
