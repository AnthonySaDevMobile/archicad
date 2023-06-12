'use client'
import EditDepoimentos from '@/components/editDepoimentos'
import EditHome from '@/components/editHome'
import EditLancamentos from '@/components/editLancamentos'
import EditParceiros from '@/components/editParceiros'
import EditProjetos from '@/components/editProjetos'
import EditQuemSomos from '@/components/editQuemSomos'
import EditSignificado from '@/components/editSignificado'
import EditValores from '@/components/editValores'
import React from 'react'


export default function Admin() {
  return (
    <div className='bg-zinc-500'>
      <EditHome/>
      <EditLancamentos/>
      <EditSignificado/>
      <EditDepoimentos/>
      <EditQuemSomos/>
      <EditValores/>
      <EditProjetos/>
      <EditParceiros/>
    </div>
  )
}
