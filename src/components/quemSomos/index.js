import React from 'react'

export default function QuemSomos() {
  return (
    <div className='mt-10 flex flex-col items-center justify-center' id="sobre">
        <h1 className='font-extrabold text-2xl'>Quem somos</h1>
        <p className='text-zinc-400'>Um pouco sobre nós</p>
        <div className='md:flex justify-center gap-10 mt-10 px-10'>
            <div className='bg-zinc-500 h-[300px] md:w-1/3'></div>
            <div className='md:w-1/3 pt-10 flex flex-col gap-4'>
                <h1 className='font-extrabold text-2xl'>1996</h1>
                <p>Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido.</p>
                <p>Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido.</p>
            </div>
        </div>
        <div className='md:flex md:flex-row-reverse justify-center gap-10 mt-10 px-10'>
            <div className='bg-zinc-500 h-[300px] md:w-1/3'></div>
            <div className='md:w-1/3 pt-10 flex flex-col gap-4'>
                <h1 className='font-extrabold text-2xl'>1996</h1>
                <p>Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido.</p>
                <p>Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido.</p>
             <button className='bg-bg-arch w-fit h-fit px-10 py-4 rounded-3xl font-bold '>Falar com a gente</button>

            </div>
        </div>

    </div>
  )
}
