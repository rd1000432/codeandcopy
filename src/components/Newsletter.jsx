import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips and tricks on how to optimize your website?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div>
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter email"
            />
            <button className="bg-[#56e5e5] text-black w-[200px] rounded-md font-medium ml-4 my-6 px-7 py-3">
              Notify me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
