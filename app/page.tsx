"use client"

import Image from "next/image";
import GlobalContextProvider from '@/context/LoaderContext'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function Home() {
  const {theme}=useTheme();
 
  useEffect(()=>{
    if(theme==='dark'){
    document.documentElement.setAttribute('data-theme', 'dark');
    }
  else{
      document.documentElement.setAttribute('data-theme', 'light');
      }
  },[theme])
  return (
    

    <div className="bg-transparent text-2xl flex " >
     
    </div>
    
   
   
  );
}
