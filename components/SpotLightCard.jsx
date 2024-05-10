
'use client'
import React, { useEffect } from 'react';
import Spotlight from '../utils/mouse-position';
// import SpotlightCard from "./Navbar"
// import Navbar from './Navbar';
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
            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group" data-spotlight>
              <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                      <img className="inline-flex" src="https://cruip-tutorials.vercel.app/spotlight-effect/card-01.png" width="200" height="200" alt="Card 01" />
                    </div>

                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Amazing Integration</h2>
                      <p className="text-sm text-slate-500">Quickly apply filters to refine your issues lists and create custom views.</p>
                    </div>
                    <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                      <svg className="fill-slate-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                        <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                      </svg>
                      <span>Connect</span>
                    </a>
                  </div>
                </div>
              </div>


              <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">

                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">

                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                      <img className="inline-flex" src="https://cruip-tutorials.vercel.app/spotlight-effect/card-02.png" width="200" height="200" alt="Card 02" />
                    </div>

                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Amazing Integration</h2>
                      <p className="text-sm text-slate-500">Quickly apply filters to refine your issues lists and create custom views.</p>
                    </div>
                    <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                      <svg className="fill-slate-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                        <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                      </svg>
                      <span>Connect</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">

                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">

                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                      <img className="inline-flex" src="https://cruip-tutorials.vercel.app/spotlight-effect/card-03.png" width="200" height="200" alt="Card 03" />
                    </div>

                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Amazing Integration</h2>
                      <p className="text-sm text-slate-500">Quickly apply filters to refine your issues lists and create custom views.</p>
                    </div>
                    <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                      <svg className="fill-slate-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                        <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                      </svg>
                      <span>Connect</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </main>

        <footer className="absolute left-6 right-6 md:left-12 md:right-auto bottom-4 md:bottom-8 text-center md:text-left">
          <a className="text-xs text-slate-500 hover:underline" href="https://cruip.com">&copy;Cruip - Tailwind CSS templates</a>
        </footer>


        <div className={`fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50" :className="bannerOpen ? '' : 'hidden'" x-data="{bannerOpen: true `}>
          <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between" >
            <div className="text-slate-500 inline-flex">
              <a className="font-medium hover:underline text-slate-300" href="https://cruip.com/how-to-create-a-spotlight-card-hover-effect-with-tailwind-css/" target="_blank">
                Read Tutorial
              </a>
              <span className="italic px-1.5">or</span>
              <a className="font-medium hover:underline text-indigo-500 flex items-center" href="https://github.com/cruip/cruip-tutorials/blob/main/spotlight-effect/index.html" target="_blank" rel="noreferrer">
                <span>Download</span>
                <svg className="fill-indigo-400 ml-1" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                  <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
                </svg>
              </a>
            </div>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700" click="bannerOpen = false">
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      </div >
    </>
  );
}

