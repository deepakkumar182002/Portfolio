'use client';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaGithubSquare } from 'react-icons/fa';
import React, { useEffect } from 'react';
import Spotlight from '../utils/mouse-position';
import Link from 'next/link';
function Navbar() {
  useEffect(() => {
    const spotlights = document.querySelectorAll('[data-spotlight]');
    spotlights.forEach((spotlight) => {
      new Spotlight(spotlight);
    });
  }, []);
  return (
    <>
      <header
        data-spotlight
        // className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-700  py-3 shadow backdrop-blur-md bg-gray-900/30 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md p-2 shadow  md:top-6 md:rounded-3xl lg:max-w-screen-lg"
      >
        {/* <div className="px-4">
                </div> */}
        <div className="relative h-full backdrop-blur-md bg-gray-900/30 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
          <div className="relative h-full p-4 rounded-[inherit] z-20 overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex shrink-0">
                <Link
                  aria-current="page"
                  className="flex items-center"
                  href="/"
                >
                  {/* <Image className="h-7 w-auto" src={logo} width={70} height={70} alt="" /> */}
                  <div className="text-2xl font-bold">
                    D e e p <span className="text-cyan-400">.</span>
                  </div>
                </Link>
              </div>
              <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <Link
                  aria-current="page"
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200  hover:text-gray-500"
                  href="#"
                >
                  Home
                </Link>
                <Link
                  aria-current="page"
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200  hover:text-gray-500"
                  href="#about"
                >
                  About
                </Link>
                <Link
                  aria-current="page"
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200  hover:text-gray-500"
                  href="#work"
                >
                  Work
                </Link>
                <Link
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200  hover:text-gray-500"
                  href="#patents"
                >
                  Patents
                </Link>
              </div>
              <div className="flex items-center justify-end gap-3">
                <Link
                  className="text-2xl"
                  href="https://github.com/deepakkumar182002"
                >
                  <FaGithubSquare />
                </Link>
                <Link
                  className="text-2xl"
                  href="https://www.linkedin.com/in/deepakkumar182002/"
                >
                  <IoLogoLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
