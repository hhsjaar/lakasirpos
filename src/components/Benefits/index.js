import React from 'react';
import { IoCubeOutline } from 'react-icons/io5';
import { LuMonitorSmartphone } from 'react-icons/lu';
import { RiEditCircleLine } from 'react-icons/ri';
import { MdOutlineCandlestickChart } from "react-icons/md";

const Benefits = () => {
  return (
    <div className="pt-8 lg:pt-20 w-full max-w-[90%] sm:max-w-[94%] lg:max-w-[89%] mx-auto px-4 sm:px-6 lg:px-8 mt-16 rounded-lg bg-gradient-to-b from-white-custom to-transparent dark:from-black2-custom dark:to-transparent">
      <h1 className="text-orangelight-custom mb-2 font-bold text-base sm:text-sm md:text-base lg:text-lg text-center">
        BENEFITS
      </h1>
      <h1 className="tracking-normal font-bold text-3xl lg:text-5xl leading-normal text-center dark:text-white-custom text-black-custom">
        <span className="leading-tight">Why Choose Lakasir?</span>
      </h1>
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 py-8 px-4 sm:px-8 lg:px-24">
        {/* Item 1 */}
        <div className="flex flex-col items-start p-6 bg-white-custom dark:bg-black2-custom shadow-lg rounded-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="w-16 h-16 bg-lightgray-custom dark:bg-black3-custom flex items-center justify-center rounded-full dark:text-white-custom text-black-custom text-3xl mb-4">
            <IoCubeOutline />
          </div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold dark:text-white-custom text-black-custom mb-2">Free</h1>
          <p className="text-sm sm:text-base lg:text-lg dark:text-gray-custom text-gray2-custom text-left">
            Fitur aplikasi ini gratis tanpa dipungut biaya apapun.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-start p-6 bg-white-custom dark:bg-black2-custom shadow-lg rounded-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="w-16 h-16 bg-lightgray-custom dark:bg-black3-custom flex items-center justify-center rounded-full dark:text-white-custom text-black-custom text-3xl mb-4">
            <LuMonitorSmartphone />
          </div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold dark:text-white-custom text-black-custom mb-2">Multi Platform</h1>
          <p className="text-sm sm:text-base lg:text-lg dark:text-gray-custom text-gray2-custom text-left">
            Lakasir bisa diakses di android dan web.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-start p-6 bg-white-custom dark:bg-black2-custom shadow-lg rounded-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="w-16 h-16 bg-lightgray-custom dark:bg-black3-custom flex items-center justify-center rounded-full dark:text-white-custom text-black-custom text-3xl mb-4">
            <RiEditCircleLine />
          </div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold dark:text-white-custom text-black-custom mb-2">Your Server</h1>
          <p className="text-sm sm:text-base lg:text-lg dark:text-gray-custom text-gray2-custom text-left">
            Sepenuhnya bisa di deploy ke servermu sendiri.
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-start p-6 bg-white-custom dark:bg-black2-custom shadow-lg rounded-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="w-16 h-16 bg-lightgray-custom dark:bg-black3-custom flex items-center justify-center rounded-full dark:text-white-custom text-black-custom text-3xl mb-4">
            <MdOutlineCandlestickChart />
          </div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold dark:text-white-custom text-black-custom mb-2">Configurable</h1>
          <p className="text-sm sm:text-base lg:text-lg dark:text-gray-custom text-gray2-custom text-left">
            Lakasir bisa di konfigurasi sesuai kebutuhan anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
