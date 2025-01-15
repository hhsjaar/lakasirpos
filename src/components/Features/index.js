import React from 'react';
import Image from 'next/image';
import {
    Features1,
    Features2,
    Features3,
    Features4
} from '../../../public';

const Features = () => {
  return (
    <div className='pt-10 mt-8 lg:mt-20 px-6 sm:px-6 md:px-10 lg:px-20'>
      {/* Judul Section */}
      <h1 className="text-orangelight-custom mb-2 font-bold text-base sm:text-xs md:text-sm lg:text-lg text-center">
        FEATURES
      </h1>
      <h1 className="tracking-normal font-bold text-3xl lg:text-5xl leading-normal text-center dark:text-white-custom text-black-custom">
        <span className="leading-tight">Discover Top Features</span>
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-10">
        {/* Item 1 */}
        <div className="justify-center items-center flex flex-col items-start p-6 bg-white-custom dark:bg-black2-custom shadow-lg rounded-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <h1 className="text-black-custom dark:text-white-custom text-center text-2xl sm:text-3xl font-bold mt-4 mb-9">Order Menu</h1>
          <Image src={Features1} alt="Order Menu" className="object-contain mb-5 w-auto h-auto" />
        </div>

        {/* Item 2 */}
        <div className="justify-center items-center flex flex-col items-start p-6 bg-white-custom dark:bg-black2-custom shadow-lg rounded-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <h1 className="text-black-custom dark:text-white-custom text-center text-2xl sm:text-3xl font-bold mt-4 mb-9">Manage Orders</h1>
          <Image src={Features2} alt="Manage Orders" className="object-contain mb-5 w-auto h-auto" />
        </div>

        {/* Item 3 */}
        <div className="justify-center items-center flex flex-col items-start p-6 bg-white-custom dark:bg-black2-custom shadow-lg rounded-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <h1 className="text-black-custom dark:text-white-custom text-center text-2xl sm:text-3xl font-bold mt-4 mb-9">Sales Analytics</h1>
          <Image src={Features3} alt="Sales Analytics" className="object-contain mb-5 w-auto h-auto" />
        </div>

        {/* Item 4 */}
        <div className="justify-center items-center flex flex-col items-start p-6 bg-white-custom dark:bg-black2-custom shadow-lg rounded-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <h1 className="text-black-custom dark:text-white-custom text-center text-2xl sm:text-3xl font-bold mt-4 mb-9">Stock Management</h1>
          <Image src={Features4} alt="Stock Management" className="object-contain mb-5 w-auto h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Features;