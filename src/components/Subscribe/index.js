import React from 'react'
import Image from 'next/image';
import { Logo } from '../../../public';

const Subscribe = () => {
  return (
    <div className="pt-8 lg:pt-32 first-letter:w-full max-w-[90%] sm:max-w-[94%] lg:max-w-[89%] mx-auto px-4 sm:px-6 lg:px-8 mt-16 rounded-lg bg-gradient-to-b from-white-custom to-transparent dark:from-black2-custom dark:to-transparent">
      <div className="flex justify-center items-center">
        <Image src={Logo} alt="Logo" width={105} height={35} />
      </div>
      <h1 className="mt-4 tracking-normal font-bold text-3xl lg:text-5xl leading-normal text-center dark:text-white-custom text-black-custom">
          <span className="leading-tight">
          Get Started Today<br/>
          with Free POS Solutions
          </span>
        </h1>
        <h2 className="text-black4-custom dark:text-gray-custom mt-3 mb-8 font-normal text-sm text-center lg:text-lg flex items-center justify-center">
          Dapatkan pembaruan tentang fitur terbaru dan penawaran eksklusif kami.
        </h2>
        <div className="flex items-center justify-center space-x-2 pb-16 lg:pb-36">
          {/* Textbox */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 rounded-full px-4 py-2 border dark:text-white-custom dark:bg-black2-custom border-lightgray-custom focus:outline-none focus:ring-1 focus:ring-orangelight-custom focus:border-orangelight-custom placeholder:px-1"
          />

          {/* Button */}
          <button
            type="button"
            className="rounded-full hover:bg-black-custom hover:text-white-custom dark:hover:bg-white-custom dark:hover:text-black2-custom bg-orangelight-custom text-white-custom px-6 py-2 focus:outline-none focus:ring-1"
          >
            Subscribe
          </button>
        </div>
    </div>
  )
}

export default Subscribe