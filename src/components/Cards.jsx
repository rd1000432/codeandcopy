import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div id="packages" className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">
            Content <br /> Creation
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Content & keyword research
            </p>
            <p className="py-2 border-b mx-8">Content creation</p>
            <p className="py-2 border-b mx-8">Tag implementation</p>
          </div>
          <a
            href="#contact"
            className="bg-[#56e5e5] text-center text-black w-[200px] rounded-md font-medium mx-auto my-6 px-7 py-3"
          >
            Learn more
          </a>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">
            Content, Website <br /> & Content Plan
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Web design/development</p>
            <p className="py-2 border-b mx-8">Content & keyword research</p>
            <p className="py-2 border-b mx-8">Content creation</p>
            <p className="py-2 border-b mx-8">Tag implementation</p>
            <p className="py-2 border-b mx-8">
              Content plan / Ongoing partnership
            </p>
          </div>
          <a
            href="#contact"
            className="bg-[#56e5e5] text-center text-black w-[200px] rounded-md font-medium mx-auto my-6 px-7 py-3"
          >
            Learn more
          </a>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">
            Content & <br /> Website
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Web design/development</p>
            <p className="py-2 border-b mx-8">Content & keyword research</p>
            <p className="py-2 border-b mx-8">Content creation</p>
            <p className="py-2 border-b mx-8">Tag implementation</p>
          </div>
          <a
            href="#contact"
            className="bg-[#c0ff71] text-center text-black w-[200px] rounded-md font-medium mx-auto my-6 px-7 py-3"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
