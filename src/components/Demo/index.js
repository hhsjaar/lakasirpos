import React, { useState } from 'react';
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// Lazy load components
const Homepage = dynamic(() => import('./Homepage'));
const Cashier = dynamic(() => import('./Cashier'));
const Category = dynamic(() => import('./Category'));
const History = dynamic(() => import('./History'));
const Settings = dynamic(() => import('./Settings'));

const Demo = () => {
  const [currentPage, setCurrentPage] = useState('Demo'); // Default halaman utama
  const [isLoading, setIsLoading] = useState(false); // State untuk animasi loading

  const handlePageChange = (page) => {
    setIsLoading(true); // Tampilkan animasi loading
    setTimeout(() => {
      setCurrentPage(page); // Ganti halaman setelah animasi selesai
      setIsLoading(false); // Sembunyikan animasi loading
    }, 1000); // Waktu delay animasi (1 detik)
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Homepage':
        return <Homepage />;
      case 'Cashier':
        return <Cashier />;
      case 'Category':
        return <Category />;
      case 'History':
        return <History />;
      case 'Settings':
        return <Settings />;
      default:
        return (
          <div className="w-full max-w-lg px-4 flex flex-col items-center">
            <Link href="/" passHref>
              <Image src="/logo2.png" alt="Logo" width={60} height={20} className="mx-auto" />
            </Link>

            {/* Headings */}
            <div className="text-center mt-4">
              <h1 className="tracking-normal mt-2 font-semibold text-xl sm:text-2xl lg:text-4xl leading-normal dark:text-white-custom text-black-custom">
                <span>Access to your Lakasir</span>
              </h1>
              <p className="text-gray2-custom">Enter your registered domain</p>
            </div>

            {/* Domain Input */}
            <div className="flex items-center mt-6 w-full max-w-sm">
              <div className="flex w-full border border-gray-300 rounded-xl overflow-hidden dark:border-gray-700">
                <input
                  type="text"
                  placeholder="Your Domain"
                  className="flex-grow px-4 py-2 focus:outline-none dark:bg-gray-800 dark:text-white"
                />
                <span className="px-4 py-2 font-semibold text-black2-custom dark:bg-gray-700 dark:text-gray-400">
                  .lakasir.com
                </span>
              </div>
            </div>

            {/* Setup Button */}
            <div className="mt-4 w-full max-w-sm">
              <button
                type="button"
                onClick={() => handlePageChange('Homepage')} // Panggil fungsi untuk mengganti halaman
                className="w-full px-4 py-2 bg-orange-custom text-white-custom font-semibold rounded-full hover:bg-black-custom transition"
              >
                Setup
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Demo - Lakasir</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Sans+3:ital,wght@0,200..900&display=swap"
          rel="stylesheet"
        />
        {/* Inline Script to Apply Dark Mode Instantly */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                  const savedMode = localStorage.getItem('darkMode');
                  if (savedMode && JSON.parse(savedMode)) {
                      document.documentElement.classList.add('dark');
                  }
              })();
            `,
          }}
        />
      </Head>

      {/* Render Content */}
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black-custom overflow-hidden">
  {isLoading ? (
    // Animasi Loading
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-16 h-16 border-4 border-gray-300 dark:border-gray-600 border-t-orange-500 rounded-full animate-spin"></div>
    </div>
  ) : (
    renderPage()
  )}
</div>

    </>
  );
};

export default Demo;
