"use client"

import { useTheme } from 'next-themes';
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

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