"use client"

import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { navItem } from '@/utils';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from 'next-themes';
import SignInButton from './SignInButton';
import { useSession } from 'next-auth/react';

const Header = () => {
//We have to make this navbar stick for devices having higher height
//we can calculate the height of device by window.screenY
//We can also access the window.scrollY
//We can also add some handler to navbar using window.addEventListener('scrollY')
const [sticky, setSticky]=useState<boolean>(false);
const [navbar, setNavbar]=useState<boolean>(true); //this is for closing and opening the navbar in mobile view

const {theme}=useTheme();
const {data:session}=useSession();

useEffect(()=>{
  console.log("Session in useEffect",session);
},[session]);

console.log("here in header section");



  return (
    <div className={clsx('relative container backdrop-blur flex items-center gap-4 p-2', theme==='dark'?'':'')}>
      <h2 className='text-xl font-semibold'>
        Inkspire
      </h2>
      
      <ul className={clsx('absolute -right-[2rem] pr-[3rem]  top-10 md:static md:top-2 md:flex md:justify-center md:items-center md:gap-3 md:pl-10  border border-blue-800 p-2 md:border-none',!navbar&&'invisible md:visible', theme==='dark'&&'bg-slate-900 md:bg-inherit' )}>

      
      {
        navItem.map((val, ind)=>{
            return <li key={ind} className='font-medium text-lg'>
                <Link href={val.link}>{val.name}</Link>
            
            </li>
        })
      }
      </ul>

      

      <div className='ml-auto flex gap-3 relative'>
        <ThemeSwitcher />
        <SignInButton/>

        <button className={clsx(' right-0 absolute p-1  md:hidden', )} onClick={()=>{setNavbar((val)=>!val)}}>
          <span className={clsx('relative my-1 h-0.5 w-[30px] block bg-black transition-all duration-200' ,
                navbar&& 'rotate-45 top-[7px]', theme==='dark'&& 'bg-white'

          )}  />
          <span className={clsx('relative my-1 h-0.5 w-[30px] block bg-black transition-all duration-100 ', 
              navbar&& 'hidden',
              theme==='dark'&& 'bg-white'
          )} />
          <span className={clsx('relative my-1 h-0.5 w-[30px] block bg-black transition-all duration-200', 
              navbar&& '-rotate-45 -top-[0.5px]',
              theme==='dark'&& 'bg-white'
          )}  />
              
      </button>
      </div>


    </div>
  )
}

export default Header


//Learning
//position static is used for default position we can use this when we are using position absolute according to some condition 