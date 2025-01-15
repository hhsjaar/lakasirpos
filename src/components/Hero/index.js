import React from "react";
import { PiPlayCircleLight } from "react-icons/pi";
import Image from "next/image";
import { HeroImg, Background } from "../../../public";

const Hero = ({ className = "" }) => {
  return (
    <div className={`hero flex flex-col items-center justify-center relative ${className}`}>
      {/* Background */}
      <div
        className="absolute inset-x-0 bottom-0 h-[30vh] lg:h-[50vh] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_auto] bg-[length:140%_auto] transition-all duration-300"
        style={{
          backgroundImage: `url(${Background.src})`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 mt-[-175px] md:mt-[-350px]">
        {/* Heading */}
        <h1 className="tracking-normal font-bold text-4xl lg:text-5xl leading-normal text-center dark:text-white-custom text-black-custom">
          <span className="leading-tight">
            Building Smarter Businesses<br />
            with Free POS Solutions
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="text-gray-500 dark:text-gray-custom mt-3 mb-8 font-normal text-base lg:text-lg leading-snug">
          Lakasir merupakan aplikasi point of sale (POS) yang memudahkan pengelolaan<br />
          bisnis Anda. Lakasir hadir dengan fitur lengkap dan mudah digunakan.
        </h2>

        {/* Buttons */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button className="bg-orange-custom dark:hover:text-black-custom dark:hover:bg-white-custom text-white-custom px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-black-custom transition">
            Download Now
          </button>
          <button className="border-2 dark:hover:bg-white-custom dark:hover:text-black-custom dark:hover:border-white-custom border-orange-custom text-orange-custom px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:border-black-custom hover:bg-black-custom hover:text-white-custom flex items-center space-x-2 transition">
            <PiPlayCircleLight size={20} />
            <span>Play Video</span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute bottom-0 w-full flex justify-center items-center">
        <div className="relative w-full max-w-[80%] h-auto sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]">
          <Image
            src={HeroImg}
            alt="Hero"
            layout="intrinsic"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
