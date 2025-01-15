import React from 'react';
import {
  IoIosLogOut,
  IoIosCash,
  IoIosCube,
  IoIosPeople,
  IoIosPerson,
  IoIosInformationCircle,
  IoIosSettings,
} from "react-icons/io";
import Image from 'next/image';
import { useRouter } from 'next/router';

const Homepage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center mt-6">
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
        </div>
        {/* Logout Icon */}
        <div className="flex items-center space-x-2 cursor-pointer mt-6">
          <IoIosLogOut className="text-gray-custom dark:text-gray-300 text-xl hover:text-black-custom" />
          <span className="text-gray-custom dark:text-gray-300 text-sm font-md hover:text-black-custom">
            Logout
          </span>
        </div>
      </nav>

      {/* Content */}
      <div className="grid grid-cols-3 mt-16 mx-24 gap-1 p-8">
        {/* Card 1 */}
        <div
          className="flex flex-col items-center justify-center p-4 py-16 bg-lightgray2-custom dark:bg-gray-800 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900 transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => router.push('/cashier')} // Navigasi ke halaman /cashier
        >
          <div className="p-4 bg-pink-600 rounded-full">
            <IoIosCash className="text-white text-3xl" />
          </div>
          <p className="mt-2 text-pink-600 dark:text-gray-200 font-semibold">Transaction</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center p-4 bg-lightgray2-custom dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 transition-transform transform hover:scale-105">
          <div className="p-4 bg-purple-800 rounded-full">
            <IoIosCube className="text-white text-3xl" />
          </div>
          <p className="mt-2 text-purple-800 dark:text-gray-200 font-semibold">Product</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center p-4 bg-lightgray2-custom dark:bg-gray-800 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900 transition-transform transform hover:scale-105">
          <div className="p-4 bg-pink-800 rounded-full">
            <IoIosPeople className="text-white text-3xl" />
          </div>
          <p className="mt-2 text-pink-800 dark:text-gray-200 font-semibold">Member</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center justify-center p-4 py-16 bg-lightgray2-custom dark:bg-gray-800 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900 transition-transform transform hover:scale-105">
          <div className="p-4 bg-orange-500 rounded-full">
            <IoIosPerson className="text-white text-3xl" />
          </div>
          <p className="mt-2 text-orange-500 dark:text-gray-200 font-semibold">Profile</p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center justify-center p-4 bg-lightgray2-custom dark:bg-gray-800 rounded-lg hover:bg-rose-100 dark:hover:bg-rose-900 transition-transform transform hover:scale-105">
          <div className="p-4 bg-rose-800 rounded-full">
            <IoIosInformationCircle className="text-white text-3xl" />
          </div>
          <p className="mt-2 text-rose-800 dark:text-gray-200 font-semibold">About</p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center justify-center p-4 bg-lightgray2-custom dark:bg-gray-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition-transform transform hover:scale-105">
          <div className="p-4 bg-red-600 rounded-full">
            <IoIosSettings className="text-white text-3xl" />
          </div>
          <p className="mt-2 text-red-600 dark:text-gray-200 font-semibold">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
