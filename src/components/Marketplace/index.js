import React, { useEffect } from 'react';
import Image from 'next/image';
import { IconAuth, IconEmail, IconSms } from '../../../public';
import { CiImport } from 'react-icons/ci';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Item = ({ icon, title, version, description, price, originalPrice }) => (
  <div
    className="p-6 bg-white-custom dark:bg-black2-custom rounded-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
    data-aos="fade-up"
  >
    <div className="flex space-x-4">
      <Image
        src={icon}
        alt={title}
        className="w-12 h-12 transform transition-transform duration-500 ease-in-out hover:scale-110"
      />
      <div className="flex-1">
        <h1 className="text-lg lg:text-xl font-semibold text-black-custom dark:text-white-custom">
          {title}
        </h1>
        <p className="text-sm lg:text-base font-normal text-gray2-custom dark:text-gray-custom">
          {version}
        </p>
        <div className="-ml-16 mt-4">
          <p className="text-sm lg:text-base font-normal text-gray2-custom dark:text-gray-custom">
            {description}
          </p>
          <div className="flex items-center space-x-2 mt-4">
            <h1 className="text-xl lg:text-2xl font-semibold text-black-custom dark:text-white-custom">
              {price}
            </h1>
            <h1 className="text-sm lg:text-base line-through text-gray2-custom dark:text-gray-custom">
              {originalPrice}
            </h1>
          </div>
          <button className="mt-6 px-4 py-2 border dark:hover:bg-white-custom dark:hover:text-black-custom dark:hover:border-white-custom border-orange-custom text-orange-custom hover:border-black-custom hover:bg-black-custom hover:text-white-custom rounded-full bg-transparent flex items-center space-x-2 transition-all duration-500 ease-in-out">
            <CiImport />
            <span>Download Module</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Marketplace = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out',
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-lightgray-custom px-4 sm:px-6 md:px-12 mx-2 mt-0 dark:bg-lightblack-custom rounded-tl-lg rounded-tr-lg h-full">
      <h1 className="pt-12 text-orangelight-custom mb-4 font-bold text-base lg:text-xl text-center">
        MARKETPLACE
      </h1>
      <h1 className="tracking-normal -mt-2 font-bold text-2xl sm:text-3xl lg:text-5xl leading-normal text-center dark:text-white-custom text-black-custom">
        <span className="leading-tight">Unlimited Resources</span>
      </h1>

      {/* Grid for Items */}
      <div className="grid grid-cols-1 mb-6 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 sm:p-6">
        <Item
          icon={IconEmail}
          title="Email Service Driver"
          version="Version 5.2.0 | Nov 30, 2024"
          description="Lakasir bisa di konfigurasi sesuai kebutuhan anda"
          price="Rp. 300.000"
          originalPrice="Rp. 400.000"
        />
        <Item
          icon={IconAuth}
          title="Google Authenticator"
          version="Version 2.1.0 | Dec 15, 2024"
          description="Menerima pembayaran dengan mudah dan aman"
          price="Rp. 800.000"
          originalPrice="Rp. 1.000.000"
        />
        <Item
          icon={IconSms}
          title="SMS Utility"
          version="Version 1.5.0 | Jan 10, 2025"
          description="Melindungi akun pengguna dengan keamanan terbaru"
          price="Rp. 400.000"
          originalPrice="Rp. 500.000"
        />
        <Item
          icon={IconEmail}
          title="Email Service Driver"
          version="Version 5.2.0 | Nov 30, 2024"
          description="Lakasir bisa di konfigurasi sesuai kebutuhan anda"
          price="Rp. 300.000"
          originalPrice="Rp. 400.000"
        />
        <Item
          icon={IconAuth}
          title="Google Authenticator"
          version="Version 2.1.0 | Dec 15, 2024"
          description="Menerima pembayaran dengan mudah dan aman"
          price="Rp. 800.000"
          originalPrice="Rp. 1.000.000"
        />
        <Item
          icon={IconSms}
          title="SMS Utility"
          version="Version 1.5.0 | Jan 10, 2025"
          description="Melindungi akun pengguna dengan keamanan terbaru"
          price="Rp. 400.000"
          originalPrice="Rp. 500.000"
        />
        <Item
          icon={IconEmail}
          title="Email Service Driver"
          version="Version 5.2.0 | Nov 30, 2024"
          description="Lakasir bisa di konfigurasi sesuai kebutuhan anda"
          price="Rp. 300.000"
          originalPrice="Rp. 400.000"
        />
        <Item
          icon={IconAuth}
          title="Google Authenticator"
          version="Version 2.1.0 | Dec 15, 2024"
          description="Menerima pembayaran dengan mudah dan aman"
          price="Rp. 800.000"
          originalPrice="Rp. 1.000.000"
        />
        <Item
          icon={IconSms}
          title="SMS Utility"
          version="Version 1.5.0 | Jan 10, 2025"
          description="Melindungi akun pengguna dengan keamanan terbaru"
          price="Rp. 400.000"
          originalPrice="Rp. 500.000"
        />
      </div>
    </div>
  );
};

export default Marketplace;
