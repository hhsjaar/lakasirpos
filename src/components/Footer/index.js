import React from 'react';
import { CiGlobe } from 'react-icons/ci';
import { PiAndroidLogo } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="lg:py-8 py-2 lg:text-sm text-xs flex flex-wrap justify-between items-center px-4 py-2 bg-white-custom dark:bg-black-custom">
      <p className="m-0 w-full  lg:w-auto text-center lg:text-left lg:ml-16 text-black4-custom dark:text-gray2-custom">&copy; 2024 Lakasir. All Rights Reserved.</p>
      <div className="flex w-full lg:w-auto flex-wrap justify-center lg:justify-end lg:mr-16 items-center gap-4 mt-2 lg:mt-0">
        <span className="text-black4-custom dark:text-gray2-custom">Available on:</span>
        <div className="flex items-center gap-2">
          <CiGlobe size={20} className="text-black-custom dark:text-gray2-custom" /> <span className="text-black4-custom dark:text-gray2-custom">Web Browser</span>
        </div>
        <div className="flex items-center gap-2">
          <PiAndroidLogo size={20} className="text-black-custom dark:text-gray2-custom" /> <span className="text-black4-custom dark:text-gray2-custom">Android Device</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
