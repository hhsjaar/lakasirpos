import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar, Footer, Marketplace } from "@/components";
import Head from "next/head";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode)); // Save mode to localStorage
    document.documentElement.classList.toggle("dark", newMode); // Update HTML class immediately
  };

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedMode !== null) {
      setDarkMode(savedMode);
      document.documentElement.classList.toggle("dark", savedMode); // Set HTML class on mount
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={`${darkMode && "dark"} flex flex-col min-h-screen`}>
  <Head>
    <title>Marketplace - Lakasir</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
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
  <div className="flex-grow bg-white-custom dark:bg-black-custom overflow-hidden">
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="h-full flex flex-col"
      >
        <Marketplace />
      </motion.div>

      {/* Other Sections */}
      <div className="m-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-lightgray-custom mx-2 mt-0 dark:bg-lightblack-custom rounded-tl-lg rounded-tr-lg h-full"
        ></motion.div>
      </div>
    </main>
  </div>
  {/* Footer */}
  <Footer />

  {/* Toggle Dark Mode Button */}
  <motion.button
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed bottom-4 right-4 w-12 h-12 sm:bottom-8 sm:right-8 sm:w-16 sm:h-16 bg-orange-custom hover:bg-black-custom dark:hover:bg-white-custom dark:hover:text-black-custom text-white-custom rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
    onClick={toggleDarkMode}
  >
    {darkMode ? (
      <IoSunnyOutline className="text-xl sm:text-2xl" />
    ) : (
      <FaRegMoon className="text-xl sm:text-2xl" />
    )}
  </motion.button>
</div>


  );
}