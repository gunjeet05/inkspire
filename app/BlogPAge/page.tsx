"use client"

import loaderContext, { GlobalContext } from "@/context/LoaderContext";
import { useContext, useEffect } from "react";

import React from 'react'

const page = () => {
    const value=useContext(GlobalContext)

   useEffect(()=>{
            value.setLoading(true);
   })

    useEffect(()=>{
        console.log(value)
    },[value.loading])
   
    
  return (
    <div>
            hi
      
    </div>
  )
}

export default page
