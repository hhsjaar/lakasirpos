import React, { useEffect } from 'react';
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Sales = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <motion.div
      className="bg-white-custom dark:bg-black2-custom rounded-2xl pl-6 pt-5 lg:w-full p-4 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="dark:text-white-custom text-black2-custom text-xl font-bold mb-5">
        Sales
      </h1>
      <motion.div
        className="bg-lightgray-custom dark:bg-lightblack-custom border-l-2 border-orangelight-custom mr-2 mb-6 px-8 pt-5 pb-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-justify lg:text-left text-base mt-2 leading-tight dark:text-gray-custom text-lightblack-custom">
          Tetap up-to-date dengan fitur terbaru, pembaruan, dan perbaikan dalam sistem POS kami! Kami terus berkembang untuk memenuhi kebutuhan bisnis Anda, dan bagian ini menyoroti alat serta peningkatan terbaru yang dirancang untuk memberikan pengalaman yang lebih baik.
        </p>
      </motion.div>
      <motion.p
        className="text-justify lg:text-left text-base mt-2 leading-tight dark:text-gray-custom text-lightblack-custom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Tetap up-to-date dengan fitur terbaru, pembaruan, dan perbaikan dalam sistem POS kami! Kami terus berkembang untuk memenuhi kebutuhan bisnis Anda, dan bagian ini menyoroti alat serta peningkatan terbaru yang dirancang untuk memberikan pengalaman yang lebih baik.
      </motion.p>
      <motion.div
        className="lg:flex lg:items-start lg:mt-4 mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-base font-bold dark:text-gray-custom text-lightblack-custom mr-4">
          Fitur Baru:
        </h2>
        <p className="lg:pl-0 pl-3 text-base dark:text-gray-custom text-lightblack-custom -ml-3">
          Jelajahi fungsi-fungsi canggih yang mempermudah operasi dan meningkatkan efisiensi.
        </p>
      </motion.div>
      <motion.div
        className="lg:flex lg:items-start lg:mt-4 mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-base font-bold dark:text-gray-custom text-lightblack-custom mr-4">
          Peningkatan:
        </h2>
        <p className="lg:pl-0 pl-3 text-base dark:text-gray-custom text-lightblack-custom -ml-3">
          Temukan pembaruan pada alat yang ada untuk kinerja yang lebih lancar dan lebih mudah digunakan.
        </p>
      </motion.div>
      <motion.div
        className="lg:flex lg:items-start mt-3 lg:mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-base font-bold dark:text-gray-custom text-lightblack-custom mr-4">
          Perbaikan Bug:
        </h2>
        <p className="lg:pl-0 pl-3 text-base dark:text-gray-custom text-lightblack-custom -ml-3">
          Ketahui masalah-masalah yang telah diselesaikan untuk pengalaman yang lebih andal dan mulus.
        </p>
      </motion.div>
      <motion.p
        className="text-base -mt-1 dark:text-gray-custom text-lightblack-custom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Kunjungi bagian ini secara rutin untuk tetap mendapatkan informasi terkini dan manfaatkan sistem POS kami yang terus berkembang.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 mr-3 mt-4 -ml-4 rounded-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="p-4 rounded-2xl shadow dark:bg-lightblack-custom bg-lightgray-custom hover:shadow-lg transition-all duration-300">
          <h2 className="dark:text-white-custom pl-1 text-black2-custom text-lg font-semibold">
            Sales
          </h2>
          <p className="text-base dark:text-gray-custom text-lightblack-custom ml-1">
            Lakasir bisa di konfigurasi sesuai kebutuhan anda..
          </p>
          <Link href="/documentation?section=user-docs&subsection=sales">
            <p className="text-base ml-1 dark:text-orangelight-custom text-orange-custom mt-3 mb-2 cursor-pointer hover:underline">
              Read More
            </p>
          </Link>
        </div>
        <div className="p-4 rounded-2xl shadow dark:bg-lightblack-custom bg-lightgray-custom hover:shadow-lg transition-all duration-300">
          <h2 className="dark:text-white-custom pl-1 text-black2-custom text-lg font-semibold">
            Finance
          </h2>
          <p className="text-base dark:text-gray-custom text-lightblack-custom ml-1">
            Lakasir bisa di konfigurasi sesuai kebutuhan anda..
          </p>
          <Link href="/documentation?section=user-docs&subsection=finance">
            <p className="text-base ml-1 dark:text-orangelight-custom text-orange-custom mt-3 mb-2 cursor-pointer hover:underline">
              Read More
            </p>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sales;
