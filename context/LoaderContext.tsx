"use client"

import {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react'

type contextType={
    loading:boolean, 
    setLoading:Dispatch<SetStateAction<boolean>>,
}

const GlobalContext=createContext<contextType>({
    loading:false,
    setLoading:()=>{}

});


const  GlobalContextProvider =({children}:{children:ReactNode})=>{
    const [loading, setLoading]=useState(false);
    return (
        <GlobalContext.Provider value={{loading, setLoading}}>
        {children}

        </GlobalContext.Provider>
    )
}
export {GlobalContext}
export default GlobalContextProvider

