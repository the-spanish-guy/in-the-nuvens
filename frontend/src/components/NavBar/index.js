import React, { useEffect, useState } from 'react';
import { MdHome, MdDelete, MdStar, MdPeople } from 'react-icons/md';

import logo from '../../assets/logo.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
export default function NavBar() {
  const [toggleIcon, setToggleIcon] = useState(moon);
  const a = false

  const toggleMode = () => {
    const theme = localStorage.getItem('theme');

    if (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      setToggleIcon(sun);
    }
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      setToggleIcon(sun);
    }

    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      setToggleIcon(moon);
    }
  };

  useEffect(() => {
    toggleMode()
  }, [a])

  return (
    <div className="w-56 h-screen py-9 px-6 shadow-xl fixed left-0 dark:bg-background-dark bg-background-light">
      <img className="w-48 h-11" src={logo} alt="logo" />

      <div className="items">
        <div className="item flex">
          <MdHome size="24" color="text-red" />
          <span>Meus Arquivos</span>
        </div>
        <div className="item flex">
          <MdPeople size="24" color="text-red" />
          <span>Compartilhados</span>
        </div>
        <div className="item flex">
          <MdStar size="24" color="text-red" />
          <span>Favoritos</span>
        </div>
        <div className="item flex">
          <MdDelete size="24" color="text-red" />
          <span>Lixeira</span>
        </div>
      </div>
      <button
        onClick={toggleMode}
        className="w-8 h-8 mt-4 border-2 rounded-md border-borderCustom flex justify-center items-center"
      >
        <img
          className="w-4/5 h-4/5 justify-self-center"
          src={toggleIcon}
          alt="toggle-dark-mode"
        />
      </button>
    </div>
  );
}
