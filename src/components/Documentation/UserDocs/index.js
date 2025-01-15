import React from 'react';
import Link from "next/link"; // Import Link from Next.js
import { motion } from "framer-motion";

const UserDocs = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-black2-custom dark:text-white-custom font-bold text-xl pl-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        User Docs
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 mr-3 -ml-4 rounded-lg">
        {[
          {
            title: "Sales",
            description: "Lakasir bisa di konfigurasi sesuai kebutuhan anda. Lakasir bisa di konfigurasi sesuai kebutuhan anda.",
            link: "/documentation?section=user-docs&subsection=sales",
          },
          {
            title: "Finance",
            description: "Lakasir bisa di konfigurasi sesuai kebutuhan anda. Lakasir bisa di konfigurasi sesuai kebutuhan anda.",
            link: "/documentation?section=user-docs&subsection=finance",
          },
          {
            title: "Website",
            description: "Lakasir bisa di konfigurasi sesuai kebutuhan anda. Lakasir bisa di konfigurasi sesuai kebutuhan anda.",
            link: "/documentation?section=user-docs&subsection=website",
          },
          {
            title: "Marketing",
            description: "Lakasir bisa di konfigurasi sesuai kebutuhan anda. Lakasir bisa di konfigurasi sesuai kebutuhan anda.",
            link: "/documentation?section=user-docs&subsection=marketing",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-2xl shadow dark:bg-black2-custom bg-white-custom hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <h2 className="dark:text-white-custom pl-1 text-black2-custom text-lg font-semibold">
              {item.title}
            </h2>
            <p className="text-base dark:text-gray-custom text-lightblack-custom ml-1">
              {item.description}
            </p>
            <Link href={item.link}>
              <p className="text-base ml-1 dark:text-orangelight-custom text-orange-custom mt-3 mb-2 cursor-pointer hover:underline">
                Read More
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UserDocs;
