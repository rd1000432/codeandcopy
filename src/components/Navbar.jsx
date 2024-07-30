import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import CCCLogo from '../assets/ccc_logo.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-40 max-w-[1240px] mx-auto px-4 text-white">
      <a href="/">
        <img className="w-[190px]" src={CCCLogo} alt="/" />
      </a>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#home">Home</a>
        </li>
        <li className="p-4">
          <a href="#services">Services</a>
        </li>
        <li className="p-4">
          <a href="#packages">Packages</a>
        </li>
        <li className="p-4">
          <a href="#contact">Contact</a>
        </li>
        <li className="p-4">
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <img className="w-[150px] mx-auto mt-4" src={CCCLogo} alt="/" />
        <ul className="uppercase p-4">
          <li className="p-4 border-gray-600">
            <a onClick={handleNav} href="#home">
              Home
            </a>
          </li>
          <li className="p-4 border-gray-600">
            <a onClick={handleNav} href="#services">
              Services
            </a>
          </li>
          <li className="p-4 border-gray-600">
            <a onClick={handleNav} href="#packages">
              Packages
            </a>
          </li>
          <li className="p-4 border-gray-600">
            <a onClick={handleNav} href="#contact">
              Contact
            </a>
          </li>
          <li className="p-4 border-gray-600">
            <a onClick={handleNav} href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
