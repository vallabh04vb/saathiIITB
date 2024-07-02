'use client'

import Image from 'next/image'
import logo from '../assets/saathilogo.svg'
import * as React from 'react'

import { Button } from '@/components/ui/button'

export function Saathilogo() {


  return (
    <>
        <div className="fixed left-10 top-10 z-50">
        <Image src={logo} alt='apple' width={100} height={20} className='dark:hidden'/> 
        <span className="sr-only">Toggle theme</span>
        </div>
        

    </>
  )
}