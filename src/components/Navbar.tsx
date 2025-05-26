'use client';
import React from 'react'
import Image from 'next/image';
import  {LanguageDropdown}  from './language-dropdown';

export default function Navbar(props: { value: string }) {
  return (
    <nav className='bg-[#FFFFFF] w-full h-16  shadow-md flex items-center px-6 justify-end'>
      <div className='flex gap-6 mr-8'>
         <LanguageDropdown/>   
        <Image className='rounded-full w-10 h-10 object-cover aspect-square' src={props.value} alt="Logo" width={40} height={40} />
      </div>
    </nav>
  )
}

