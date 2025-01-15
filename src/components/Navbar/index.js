import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Untuk deteksi rute saat ini

const Navbar = () => {
  const router = useRouter(); // Ambil rute saat ini untuk menentukan link aktif

  const menuItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'Marketplace', href: '/marketplace' },
  ];

  return (
    <section className="min-h-24">
      <div>
        <nav className="pt-8 pr-4 pl-4 pb-8 mb-12 flex flex-wrap justify-between items-center sm:pr-10 sm:pl-10">
          {/* Bagian Kiri - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image src="/logo.png" alt="Logo" width={120} height={40} />
            </Link>
          </div>

          {/* Bagian Tengah - Menu */}
          <div className="hidden md:flex flex-grow justify-center ml-0 md:ml-16 space-x-4 md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  router.pathname === item.href
                    ? 'text-orangelight-custom'
                    : 'text-black-custom dark:text-gray-custom hover:text-orange-custom dark:hover:text-orange-400'
                }`}
                aria-current={router.pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bagian Kanan - Button */}
          <div className="flex flex-wrap space-x-2 sm:space-x-4 mt-4 md:mt-0">
            <button
              className="bg-orange-custom text-white-custom px-4 py-2 text-xs rounded-full 
                         hover:bg-black-custom hover:text-white-custom transition dark:hover:bg-white-custom dark:hover:text-black-custom
                         sm:px-6 sm:py-2 sm:text-sm md:px-6 md:py-2 md:text-base lg:px-5 lg:py-2 lg:text-sm"
            >
              Demo
            </button>
            

            <button
              className="border-2 dark:hover:bg-white-custom dark:hover:text-black-custom border-orange-custom text-orange-custom px-4 py-2 text-xs rounded-full
                        hover:border-black-custom hover:bg-black-custom hover:text-white-custom dark:hover:border-white-custom transition
                        sm:px-6 sm:py-2 sm:text-sm md:px-6 md:py-2 md:text-base lg:px-5 lg:py-2 lg:text-sm"
            >
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
