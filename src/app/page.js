"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Lancamentos from '@/components/lancamentos'
import Significado from '@/components/significado'
import Depoimentos from '@/components/depoimentos'
import QuemSomos from '@/components/quemSomos'
import Projetos from '@/components/projetos'
import Parceiros from '@/components/parceiros'
import Contato from '@/components/contato'
import Mapa from '@/components/mapa'
import Head from 'next/head'
import HomeComponent from '@/components/home'
import Valores from '@/components/valores'

export default function Home() {
  return (
    <div>

<Head>
        <title>Archicad</title> 
        <link rel="apple-touch-icon" tamanhos="180x180" href="/apple-touch-icon.png"/> 
        <link rel="icon" type="image/png" tamanhos="32x32 " href="/favicon-32x32.png"/> <link rel="icon" type="image/png" tamanhos="16x16" href="/favicon-16x16.png"/> <link rel="manifest" href ="/site.webmanifest"/> <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/> <meta name="msapplication-TileColor" content="#da532c "/> <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Header scroll="false" />
      <main>
        {/* HOME */}
      <HomeComponent/>

        {/* LANÇAMENTO */}
        <Lancamentos />
        {/* SIGNIFICADO */}
        <Significado  />
        {/* DEPOIMENTOS */}
        <Depoimentos  />
        {/* QUEMSOMOS*/}
        <QuemSomos  />

        {/* VALORES */}
        <Valores/>

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
