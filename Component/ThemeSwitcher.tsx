"use client"

import { useTheme } from 'next-themes';
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useEffect } from 'react';
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  useEffect(()=>{
      if(theme==='dark'){
      document.documentElement.setAttribute('data-theme', 'dark');
      }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        
        }
    },[theme])
  return (
    <div className='flex'>

   
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
       {theme === 'dark' ? <IoIosSunny /> : <FaMoon/>} 
    </button>
    </div>
  );
};

export default ThemeSwitcher;