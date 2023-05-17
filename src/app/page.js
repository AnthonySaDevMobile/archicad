"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import fachadaNoturna from '../../public/FACHADA_NOTURNA_THEREZINHA.jpg'
import Lancamentos from '@/components/lancamentos'
import Significado from '@/components/significado'
import Depoimentos from '@/components/depoimentos'
import QuemSomos from '@/components/quemSomos'
import { FaEye, } from 'react-icons/fa'
import { MdDiamond } from 'react-icons/md'
import { GiMountainCave } from 'react-icons/gi'
import Projetos from '@/components/projetos'
import Parceiros from '@/components/parceiros'
import Contato from '@/components/contato'
import Mapa from '@/components/mapa'
import Head from 'next/head'

export default function Home() {
  return (
    <div>

<Head>
        <title>Archicad</title> 
        <link rel="apple-touch-icon" tamanhos="180x180" href="/apple-touch-icon.png"/> 
        <link rel="icon" type="image/png" tamanhos="32x32 " href="/favicon-32x32.png"/> <link rel="icon" type="image/png" tamanhos="16x16" href="/favicon-16x16.png"/> <link rel="manifest" href ="/site.webmanifest"/> <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/> <meta name="msapplication-TileColor" content="#da532c "/> <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Header />

      <main>
        {/* HOME */}
        <div className="relative w-full h-screen" id='home'>
          <Image
            src={fachadaNoturna}
            style={{ objectPosition: 'bottom', objectFit: 'cover', height: '100%' }}
            className='brightness-50'
            quality={100}
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

        {/* LANÇAMENTO */}
        <Lancamentos />
        {/* SIGNIFICADO */}
        <Significado  />
        {/* DEPOIMENTOS */}
        <Depoimentos  />
        {/* QUEMSOMOS*/}
        <QuemSomos  />

        {/* VALORES */}
        <div className='bg-bg-arch mt-10' id='valores'>
          <div className='md:flex w-8/12 m-auto gap-5'>
            <div className=' md:w-1/3 py-6 flex flex-col gap-3'>
              <GiMountainCave color='white' size={28} />
              <p className='font-bold'>Missão</p>
              <p>I have worked with many companies affering supplemental industrial services, and out of all those companies.</p>
            </div>
            <div className=' md:w-1/3 py-6 flex flex-col gap-3'>
              <FaEye color='white' size={28} />
              <p className='font-bold'>Visão</p>
              <p>I have worked with many companies affering supplemental industrial services, and out of all those companies.</p>
            </div>
            <div className=' md:w-1/3 py-6 flex flex-col gap-3'>
              <MdDiamond color='white' size={28} />
              <p className='font-bold'>Valores</p>
              <p>I have worked with many companies affering supplemental industrial services, and out of all those companies.</p>
            </div>
          </div>
        </div>

        {/* NOSSOS PROJETOS */}
        <Projetos  />

        {/* PARCEIROS */}
        <Parceiros  />

        {/* CONTATO */}
        <Contato  />
      </main>
      {/* MAPA */}
      <Mapa  />

      <Footer/>
    </div>
  )
}
