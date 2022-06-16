import React from 'react';
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { HiMoon, HiSun } from 'react-icons/hi';
const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className='transition-all ease-linear'>
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className=" shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
        <HiSun size={24}/>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className=" focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
         <HiMoon size={24}/>
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;