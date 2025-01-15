import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar, Footer } from "@/components";
import Head from "next/head";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Documentation from "@/components/Documentation";
import { IoSearchSharp } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

// Import modular components
import GetStarted from "@/components/Documentation/GetStarted";
import WhatsNew from "@/components/Documentation/GetStarted/WhatsNew";
import UserDocs from "@/components/Documentation/UserDocs/";
import Sales from "@/components/Documentation/UserDocs/Sales";
import Finance from "@/components/Documentation/UserDocs/Finance";
import Website from "@/components/Documentation/UserDocs/Website";
import Marketing from "@/components/Documentation/UserDocs/Marketing";
import Services from "@/components/Documentation/UserDocs/Services";
import Database from "@/components/Documentation/Database";
import Hosting from "@/components/Documentation/Database/Hosting";
import Upgrade from "@/components/Documentation/Database/Upgrade";
import Version from "@/components/Documentation/Database/Version";
import Developer from "@/components/Documentation/Developer";
import Tutorials from "@/components/Documentation/Developer/Tutorials";
import HowToGuides from "@/components/Documentation/Developer/HowToGuides";
import Help from "@/components/Documentation/Help";
import FAQ from "@/components/Documentation/Help/FAQ";
import Support from "@/components/Documentation/Help/Support";
import Link from "next/link"; // Import Link from Next.js

export default function DocumentationPage() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  const { section, subsection } = router.query;

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

  const renderContent = () => {
    switch (section) {
      case "get-started":
        if (subsection === "whats-new")
          return <WhatsNew/>;
        return <GetStarted />;
      case "user-docs":
        switch (subsection) {
          case "sales":
            return <Sales />;
          case "finance":
            return <Finance  />;
          case "website":
            return <Website  />;
          case "marketing":
            return <Marketing  />;
          case "services":
            return <Services />;
          default:
            return <UserDocs  />;
        }
      case "database":
        switch (subsection) {
          case "hosting":
            return <Hosting  />;
          case "upgrade":
            return <Upgrade  />;
          case "version":
            return <Version  />;
          default:
            return <Database />;
        }
      case "developer":
        switch (subsection) {
          case "tutorials":
            return <Tutorials  />;
          case "how-to-guides":
            return <HowToGuides  />;
          default:
            return <Developer />;
        }
      case "help":
        switch (subsection) {
          case "faq":
            return <FAQ />;
          case "support":
            return <Support />;
          default:
            return <Help />;
        }
        default:
          return (
            <div className="flex items-center justify-center">
              <div>
                <div className="bg-white-custom dark:bg-black2-custom mb-6 rounded-2xl pl-6 pt-5 lg:w-full p-4 hover:shadow-lg transition-all duration-300">
                  <h1 className="dark:text-white-custom text-black2-custom text-xl font-bold">
                    What's New
                  </h1>
                  <p className="text-justify lg:text-left text-base mt-2 leading-tight dark:text-gray-custom text-lightblack-custom">
                    Tetap up-to-date dengan fitur terbaru, pembaruan, dan perbaikan dalam sistem POS kami! Kami terus berkembang untuk memenuhi<br/>kebutuhan bisnis Anda, dan bagian ini menyoroti alat serta peningkatan terbaru yang dirancang untuk memberikan pengalaman yang lebih<br/>baik.
                  </p>
                  <div className="lg:flex lg:items-start lg:mt-4 mt-3">
                    <h2 className="text-base  font-bold dark:text-gray-custom text-lightblack-custom mr-4">
                      Fitur Baru:
                    </h2>
                    <p className="lg:pl-0 pl-3 text-base dark:text-gray-custom text-lightblack-custom -ml-3">
                      Jelajahi fungsi-fungsi canggih yang mempermudah operasi dan meningkatkan efisiensi.
                    </p>
                  </div>
                  <div className="lg:flex lg:items-start lg:mt-4 mt-3">
                    <h2 className="text-base font-bold dark:text-gray-custom text-lightblack-custom mr-4">
                      Peningkatan:
                    </h2>
                    <p className="lg:pl-0 pl-3 text-base dark:text-gray-custom text-lightblack-custom -ml-3">
                      Temukan pembaruan pada alat yang ada untuk kinerja yang lebih lancar dan lebih mudah digunakan.
                    </p>
                  </div>
                  <div className="lg:flex lg:items-start mt-3 lg:mt-4">
                    <h2 className="text-base font-bold dark:text-gray-custom text-lightblack-custom mr-4">
                      Perbaikan Bug:
                    </h2>
                    <p className="lg:pl-0 pl-3 text-base dark:text-gray-custom text-lightblack-custom -ml-3">
                      Ketahui masalah-masalah yang telah diselesaikan untuk pengalaman yang lebih andal dan mulus.
                    </p>
                  </div>
                  <p className="text-base -mt-1 dark:text-gray-custom text-lightblack-custom">
                    Kunjungi bagian ini secara rutin untuk tetap mendapatkan informasi terkini dan manfaatkan sistem POS kami yang terus berkembang.
                  </p>
                  <p className="text-base -mt-1 dark:text-gray-custom text-lightblack-custom">
                    Kesuksesan Anda adalah inspirasi kami untuk berinovasi!
                  </p>
                  <Link href="/documentation?section=get-started&subsection=whats-new">
                    <p className="text-base dark:text-orangelight-custom text-orange-custom mt-6 mb-4 cursor-pointer hover:underline">
                      Read More
                    </p>
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-transparent -mr-7 p-4 rounded-lg ">
                    <Link href="/documentation?section=user-docs">
                      <h1 className="dark:text-white-custom text-black2-custom text-xl font-bold flex items-center hover:underline">
                        User Docs <GoArrowRight className="ml-2" />
                      </h1>
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 -ml-8 rounded-lg">
                      <div className="p-4 rounded-2xl shadow dark:bg-black2-custom bg-white-custom hover:shadow-lg hover:scale-105 transition-all duration-300">
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
                      <div className="p-4 rounded-2xl shadow dark:bg-black2-custom bg-white-custom hover:shadow-lg hover:scale-105 transition-all duration-300">
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
                    </div>
                  </div>
                  <div className="bg-transparent p-4 -mr-8 rounded-lg">
                    <Link href="/documentation?section=database">
                      <h1 className="dark:text-white-custom text-black2-custom hover:underline text-xl font-bold flex items-center">
                        Database <GoArrowRight className="ml-2" />
                      </h1>
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 -ml-8 rounded-lg">
                      <div className="p-4 rounded-2xl shadow dark:bg-black2-custom bg-white-custom hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <h2 className="dark:text-white-custom pl-1 text-black2-custom text-lg font-semibold">
                          Hosting
                        </h2>
                        <p className="text-base dark:text-gray-custom text-lightblack-custom ml-1">
                          Lakasir bisa di konfigurasi sesuai kebutuhan anda..
                        </p>
                        <Link href="/documentation?section=database&subsection=hosting">
                          <p className="text-base ml-1 dark:text-orangelight-custom text-orange-custom mt-3 mb-2 cursor-pointer hover:underline">
                            Read More
                          </p>
                        </Link>
                      </div>
                      <div className="p-4 rounded-2xl shadow dark:bg-black2-custom bg-white-custom hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <h2 className="dark:text-white-custom pl-1 text-black2-custom text-lg font-semibold">
                          Upgrade
                        </h2>
                        <p className="text-base dark:text-gray-custom text-lightblack-custom ml-1">
                          Lakasir bisa di konfigurasi sesuai kebutuhan anda..
                        </p>
                        <Link href="/documentation?section=database&subsection=upgrade">
                          <p className="text-base ml-1 dark:text-orangelight-custom text-orange-custom mt-3 mb-2 cursor-pointer hover:underline">
                            Read More
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="bg-transparent -mr-7 p-4 -mt-4 rounded-lg">
                    <Link href="/documentation?section=developer">
                      <h1 className="dark:text-white-custom text-black2-custom hover:underline text-xl font-bold flex items-center">
                        Developer <GoArrowRight className="ml-2" />
                      </h1>
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 -ml-8 rounded-lg">
                      <div className="p-4 rounded-2xl shadow dark:bg-black2-custom bg-white-custom hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <h2 className="dark:text-white-custom pl-1 text-black2-custom text-lg font-semibold">
                          Tutorials
                        </h2>
                        <p className="text-base dark:text-gray-custom text-lightblack-custom ml-1">
                          Lakasir bisa di konfigurasi sesuai kebutuhan anda..
                        </p>
                        <Link href="/documentation?section=developer&subsection=tutorials">
                          <p className="text-base ml-1 dark:text-orangelight-custom text-orange-custom mt-3 mb-2 cursor-pointer hover:underline">
                            Read More
                          </p>
                        </Link>
                      </div>
                      <div className="p-4 rounded-2xl shadow dark:bg-black2-custom bg-white-custom hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <h2 className="dark:text-white-custom pl-1 text-black2-custom text-lg font-semibold">
                          How to Guides
                        </h2>
                        <p className="text-base dark:text-gray-custom text-lightblack-custom ml-1">
                          Lakasir bisa di konfigurasi sesuai kebutuhan anda..
                        </p>
                        <Link href="/documentation?section=developer&subsection=how-to-guides">
                          <p className="text-base ml-1 dark:text-orangelight-custom text-orange-custom mt-3 mb-2 cursor-pointer hover:underline">
                            Read More
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="bg-transparent -mr-7 p-4 -mt-4 rounded-lg">
                    <Link href="/documentation?section=help">
                      <h1 className="dark:text-white-custom text-black2-custom hover:underline text-xl font-bold flex items-center">
                        Help <GoArrowRight className="ml-2" />
                      </h1>
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 -ml-8 rounded-lg">
                      <div className="p-4 rounded-2xl shadow dark:bg-black2-custom bg-white-custom hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <h2 className="dark:text-white-custom pl-1 text-black2-custom text-lg font-semibold">
                          FAQ
                        </h2>
                        <p className="text-base dark:text-gray-custom text-lightblack-custom ml-1">
                          Lakasir bisa di konfigurasi sesuai kebutuhan anda..
                        </p>
                        <Link href="/documentation?section=help&subsection=faq">
                          <p className="text-base ml-1 dark:text-orangelight-custom text-orange-custom mt-3 mb-2 cursor-pointer hover:underline">
                            Read More
                          </p>
                        </Link>
                      </div>
                      <div className="p-4 rounded-2xl shadow dark:bg-black2-custom bg-white-custom hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <h2 className="dark:text-white-custom pl-1 text-black2-custom text-lg font-semibold">
                          Support
                        </h2>
                        <p className="text-base dark:text-gray-custom text-lightblack-custom ml-1">
                          Lakasir bisa di konfigurasi sesuai kebutuhan anda..
                        </p>
                        <Link href="/documentation?section=help&subsection=support">
                          <p className="text-base ml-1 dark:text-orangelight-custom text-orange-custom mt-3 mb-2 cursor-pointer hover:underline">
                            Read More
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
      }
    };

  return (
    <div className={`${darkMode && "dark"} flex flex-col min-h-screen`}>
      <Head>
        <title>Documentation - Lakasir</title>
        <meta name="description" content="Documentation for Lakasir platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200..900&family=Source+Sans+3:wght@200..900&display=swap"
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
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4">
            <div className="p-4 -mt-16 pl-4 md:pl-8 pt-4 md:pt-8 pb-12 md:pb-36 bg-lightgray-custom dark:bg-lightblack-custom rounded-3xl col-span-1 hidden md:block">
              <Documentation />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="p-4 -mt-16 bg-lightgray-custom pl-4 md:pl-8 pt-4 md:pt-12 dark:bg-lightblack-custom rounded-3xl col-span-1 md:col-span-3"
            >
              <div className="flex items-center justify-between lg:-mt-3 mb-8">
                <h1 className="text-orangelight-custom font-bold text-base lg:text-xl">
                  DOCUMENTATION
                </h1>
                <div className="relative px-8 flex items-center w-full max-w-xs md:max-w-4xl">
                  <IoSearchSharp className="absolute left-3 lg ml-8 md:ml-7 md:left-4 text-black2-custom dark:text-gray-custom" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-8 pr-4 py-2 bg-transparent border font-normal border-black2-custom dark:border-gray-custom text-black2-custom dark:text-gray-custom placeholder:text-black2-custom dark:placeholder:text-gray-custom rounded-full focus:outline-none focus:ring-2 focus:ring-orangelight-custom transition-colors"
                  />
                </div>
              </div>
              {renderContent()}
            </motion.div>
          </div>
        </main>
      </div>

      <Footer />

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 right-4 w-12 h-12 sm:bottom-8 sm:right-8 sm:w-16 sm:h-16 bg-orange-custom hover:bg-black-custom dark:hover:bg-white-custom dark:hover:text-black-custom text-white-custom rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
        onClick={toggleDarkMode}
      >
        {darkMode ? <IoSunnyOutline className="text-xl sm:text-2xl" /> : <FaRegMoon className="text-xl sm:text-2xl" />}
      </motion.button>
    </div>
  );
}
