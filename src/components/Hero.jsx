import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#ff66c3] font-bold p-2">
          GROW YOUR ONLINE PRESENCE.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with us.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            We specialise in
          </p>
          <ReactTyped
            className="text-[#c0ff71] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={['Websites', 'Content Creation', 'Copywriting']}
            typeSpeed={65}
            backSpeed={55}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          We will build your site, optimise its content and grow your online
          presence.
        </p>
        <a
          href="#packages"
          className="bg-[#56e5e5] w-[200px] rounded-md font-medium my-6 mx-auto px-7 py-3 text-black"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
