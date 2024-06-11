'use client';
import { useEffect } from 'react';
import Spotlight from '../utils/mouse-position';
import Works from '@/components/Works';
import Navbar from '../components/Navbar';
import HomeComponent from '@/components/HomeComponent';
import About from '@/components/About';
import Patents from '../components/Patents';
import { GoProjectSymlink } from 'react-icons/go';
import { CgUserlane } from 'react-icons/cg';
import { FaAward, FaBlog } from 'react-icons/fa';
import { PiCertificate } from 'react-icons/pi';
import Link from 'next/link';
import Blogs from '@/components/Blogs';

function Home() {
  useEffect(() => {
    const spotlights = document.querySelectorAll('[data-spotlight]');
    spotlights.forEach((spotlight) => {
      new Spotlight(spotlight);
    });
  }, []);
  return (
    <>
      <div className="h-auto justify-center flex flex-col fixed z-50 top-[200px] left-4 md:left-3 md:top-64 gap-4">
        <Link
          href="#blogs"
          className="-inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-md ml-1 flex md:p-2 p-1 items-center md:w-12 w-10 overflow-hidden hover:w-32 duration-300"
        >
          <FaBlog className="text-3xl md:text-4xl fixed " />
          <span className="text-xl relative left-10 ">Blogs</span>
        </Link>
        <Link
          href="#about"
          className="-inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-md ml-1 flex md:p-2 p-1 items-center md:w-12 w-10 overflow-hidden hover:w-32 duration-300"
        >
          <CgUserlane className="text-3xl md:text-4xl fixed " />
          <span className="text-xl relative left-10 ">About</span>
        </Link>
        <Link
          href="#work"
          className="-inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-md ml-1 flex md:p-2 p-1 items-center  md:w-12 w-10 overflow-hidden hover:w-28 duration-300"
        >
          <GoProjectSymlink className="text-3xl md:text-4xl fixed" />
          <span className="text-xl relative left-10 ">Work</span>
        </Link>
        <Link
          href="#patents"
          className="-inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-md ml-1 flex md:p-2 p-1 items-center md:w-12 w-10 overflow-hidden hover:w-32 duration-300"
        >
          <FaAward className="text-3xl md:text-4xl fixed" />
          <span className="text-xl relative left-10 ">Patents</span>
        </Link>
        <Link
          href="/paper"
          className="-inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-md ml-1 flex md:p-2 p-1 items-center md:w-12 w-10 text-nowrap overflow-hidden hover:w-72 duration-300"
        >
          <PiCertificate className="text-3xl md:text-4xl fixed" />
          <span className="text-xl relative left-10 ">
            Licenses & Certifications
          </span>
        </Link>
      </div>
      <Navbar />
      <HomeComponent />
      <div className="relative font-inter antialiased items-center">
        <main className="relative min-h-screen flex flex-col justify-center items-center bg-slate-900 overflow-hidden overflow-y-auto">
          <div
            className="md:p-4 p-8 md:h-auto md:w-full max-w-sm mt-20 lg:max-w-none group"
            data-spotlight
          >
            <div className="relative h-auto bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
              <div className="relative h-auto  bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden ">
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[90px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  <About />
                  <Works />
                  <div className="mt-4" id="patents">
                    <div className="text-4xl mt-4text-cyan-300 font-[200]">
                      My All Patents And Designs 💫
                    </div>
                    <Patents />
                  </div>
                  <div className="mt-8" id="blogs">
                    <div className="text-4xl mt-4text-cyan-300 font-[200]">
                      My Blogs 💫
                    </div>
                    <Blogs />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 w-full flex justify-between">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <div className="text-gray-500 text-sm text-center sm:text-left">
                © 2024 Deepak kumar —
                <a
                  href="/"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1"
                  target="_blank"
                >
                  @The experience life...
                </a>
              </div>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://x.com/Deepakk24578803"
                  className="ml-3 text-gray-500"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/deepak_kumar222444/"
                  className="ml-3 text-gray-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/deepakkumar182002/"
                  className="ml-3 text-gray-500"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default Home;
