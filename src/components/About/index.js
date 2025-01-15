import React from 'react';
import Image from 'next/image';
import { AboutImg, AboutImgDark, Avatar } from '../../../public';
import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-14">
      <h1 className="text-orangelight-custom mb-4 font-bold text-base lg:text-lg text-center">
        ABOUT US
      </h1>
      <h1 className="tracking-normal font-bold text-3xl lg:text-5xl leading-normal text-center dark:text-white-custom text-black-custom">
        <span className="leading-tight">
          Your Journey to Operational<br />
          Excellence Starts with Us
        </span>
      </h1>
      <div className="flex flex-col items-center justify-center mt-10">
        {/* Image About */}
        <div className="w-full max-w-[90%] sm:max-w-[75%] lg:max-w-[95%] px-2">
          <Image
            src={AboutImg}
            alt="About"
            className="object-cover mx-auto block w-full dark:hidden"
          />
          <Image
            src={AboutImgDark}
            alt="About Dark"
            className="object-cover mx-auto block w-full hidden dark:block"
          />
        </div>

        {/* Grid Items */}
        <div className="w-full max-w-[95%] px-4 sm:px-1 lg:px-2">
          <div className="grid grid-flow-row grid-cols-1 gap-8 sm:gap-4 sm:grid-cols-1 lg:grid-cols-2 mt-10">
            {/* Item 1 */}
            <div className="lg:text-left text-center justify-self-center sm:justify-self-start">
              <h1 className="text-black-custom dark:text-white-custom text-3xl sm:text-4xl md:text-5xl font-bold">
                Optimizing Business<br />Processes
              </h1>
            </div>

            {/* Item 2 */}
            <div className="justify-self-center lg:mr-2 sm:justify-self-end text-justify lg:text-left">
              <p className="text-black-custom dark:text-white-custom text-sm lg:text-base sm:text-lg font-medium">
                Lakasir adalah aplikasi POS open-source yang tersedia<br />
                untuk android dan web. Lakasir dapat membantu anda<br />
                dalam mengelola barang yang ada di toko anda, dengan fitur<br />
                yang lengkap dan mudah digunakan.
              </p>
            </div>

            {/* Item 3 */}
            <div className="justify-self-center sm:justify-self-start"></div>

            {/* Item 4 */}
            <div className="justify-self-center lg:mb-0 mb-8 lg:ml-60 sm:justify-self-start text-justify lg:text-left sm:col-start-2">
              <p className="text-gray2-custom dark:text-gray-custom text-sm lg:text-base sm:text-lg font-normal">
                Didirikan dengan visi untuk mempermudah transaksi dan<br />
                manajemen bisnis. Lakasir bertujuan untuk memberdayakan<br />
                para pelaku usaha melalui teknologi yang mudah diakses,<br />
                aman, dan efisien.
              </p>
            </div>

            {/* Item 5 */}
            <div className="flex items-start space-x-4 justify-self-center sm:justify-self-start">
              <Image src={Avatar} alt="Ronald Richards" className="w-12 h-12 rounded-full" />
              <div>
                <h1 className="text-black-custom dark:text-white-custom text-lg font-semibold">
                  Ronald Richards
                </h1>
                <div className="flex space-x-1 text-orangelight-custom">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="justify-self-center lg:ml-60 sm:justify-self-start text-left sm:col-start-2">
              <h1 className="text-black-custom dark:text-white-custom text-xl sm:text-3xl font-semibold">
                “Lakasir memudahkan saya dalam
                mengelola bisnis saya, terimakasih
                Lakasir.”
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
