import React from 'react';
import Laptop from '../assets/laptop.jpg';

const ContentCreation = () => {
  return (
    <div id="services" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#ff66c3] font-bold">
            LATEST CONTENT CREATION TECHNIQUES.
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Leveraging the power of AI and the latest SEO tools.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            qui, accusantium earum magnam temporibus voluptas, nesciunt aliquid
            aliquam saepe, vero odio pariatur autem. Quia voluptatem omnis
            perspiciatis odio praesentium laborum!
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-7 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
