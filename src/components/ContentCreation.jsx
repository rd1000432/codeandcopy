import React from 'react';
import Laptop from '../assets/laptop.jpg';

const ContentCreation = () => {
  return (
    <div id="services" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-6" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#ff66c3] font-bold">
            LATEST CONTENT CREATION TECHNIQUES.
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Leveraging the power of AI and the latest SEO tools.
          </h1>
          <p>
            We are Code & Copy Creations based in Austria. We have native
            English and German speakers in our team so we're able to communicate
            with you in both languages as well as create content for you in both
            languages.
            <br />
            <br /> We have been providing custom websites for clients from all
            over the world for the past 5 years but we never just handover a
            website without fully optimised content that ensures a performative
            and effective online presence.
            <br />
            <br /> This means that we have combined Web development with
            innovative and focused Digital Marketing services including proven
            Copywriting and Content Creation techniques. Namely keyword
            research, content creation as well as creating SEO optimized blog
            articles in Wordpress using Yoast. It is important to note, that we
            always ask for permission from our clients first before using AI
            content creation tools such as Chat GPT. However, we recommend and
            encourage the use of AI content optimization tools to improve Google
            ranking (such as Clearscope or Neuron Writer).
          </p>
          <a
            href="#contact"
            className="bg-black text-[#00df9a] text-center w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-7 py-3"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
