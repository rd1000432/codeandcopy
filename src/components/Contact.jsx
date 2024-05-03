import React from 'react';
import { ValidationError, useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xgegdlea');
  if (state.succeeded) {
    return (
      <div id="contact" className="w-full bg-[#56e5e5] py-16 px-4">
        <p className="text-[#120301] text-center md:text-4xl sm:text-6xl text-4xl font-bold md:py-6">
          Thanks, we'll be in touch as soon as we can!
        </p>
      </div>
    );
  }
  return (
    <div id="contact" className="w-full bg-[#56e5e5] py-16 px-4">
      <h1 className="text-center md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
        Get in touch.
      </h1>
      <form
        className="flex flex-col p-4 lg:my-4 rounded-lg"
        onSubmit={handleSubmit}
      >
        <label className="mx-auto font-bold mb-2" htmlFor="email">
          Email Address:
        </label>
        <input
          className="p-3 flex lg:w-[40%] mb-4 mx-auto rounded-md text-black"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="mx-auto font-bold mb-2" htmlFor="message">
          Message:
        </label>
        <textarea
          className="p-3 flex lg:w-[40%] mx-auto rounded-md text-black"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="bg-[#ff66c3] w-[200px] rounded-md font-medium my-6 mx-auto px-7 py-3 text-black hover:scale-105 duration-300"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
