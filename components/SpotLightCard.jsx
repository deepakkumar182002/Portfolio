'use client';
import React, { useEffect } from 'react';
import Spotlight from '../utils/mouse-position';
import Link from 'next/link';
// import img from 'next/img';
export default function SpotlightCard() {
  useEffect(() => {
    const spotlights = document.querySelectorAll('[data-spotlight]');
    spotlights.forEach((spotlight) => {
      new Spotlight(spotlight);
    });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="relative font-inter antialiased">
        <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div
              className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group"
              data-spotlight
            >
              <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="relative inline-flex">
                      <div
                        className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                        aria-hidden="true"
                      ></div>
                      {/* <img className="inline-flex" src="https://cruip-tutorials.vercel.app/spotlight-effect/card-01.png" width="200" height="200" alt="Card 01" /> */}
                    </div>

                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">
                        Amazing Integration
                      </h2>
                      <p className="text-sm text-slate-500">
                        Quickly apply filters to refine your issues lists and
                        create custom views.
                      </p>
                    </div>
                    <Link
                      className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                      href="#0"
                    >
                      <svg
                        className="fill-slate-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="14"
                      >
                        <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                      </svg>
                      <span>Connect</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="relative inline-flex">
                      <div
                        className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                        aria-hidden="true"
                      ></div>
                      {/* <img className="inline-flex" src="https://cruip-tutorials.vercel.app/spotlight-effect/card-02.png" width="200" height="200" alt="Card 02" /> */}
                    </div>

                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">
                        Amazing Integration
                      </h2>
                      <p className="text-sm text-slate-500">
                        Quickly apply filters to refine your issues lists and
                        create custom views.
                      </p>
                    </div>
                    <Link
                      className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                      href="#0"
                    >
                      <svg
                        className="fill-slate-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="14"
                      >
                        <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                      </svg>
                      <span>Connect</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="relative inline-flex">
                      <div
                        className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                        aria-hidden="true"
                      ></div>
                      {/* <img className="inline-flex" src="https://cruip-tutorials.vercel.app/spotlight-effect/card-03.png" width="200" height="200" alt="Card 03" /> */}
                    </div>

                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">
                        Amazing Integration
                      </h2>
                      <p className="text-sm text-slate-500">
                        Quickly apply filters to refine your issues lists and
                        create custom views.
                      </p>
                    </div>
                    <Link
                      className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                      href="#0"
                    >
                      <svg
                        className="fill-slate-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="14"
                      >
                        <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                      </svg>
                      <span>Connect</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2024 Deepak kumar —
                <Link
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1"
                  target="_blank"
                >
                  @The experience life...
                </Link>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <Link className="text-gray-500">
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
                </Link>
                <Link className="ml-3 text-gray-500">
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
                </Link>
                <Link className="ml-3 text-gray-500">
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
                </Link>
                <Link className="ml-3 text-gray-500">
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
                </Link>
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
