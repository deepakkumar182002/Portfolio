'use client'
import { useEffect } from "react";
import Spotlight from "../utils/mouse-position"
import Works from "@/components/Works";
import Navbar from "../components/Navbar";
import HomeComponent from "@/components/HomeComponent";
import About from "@/components/About";
// import SpotlightCard from "@/components/SpotLightCard";

function Home() {
  useEffect(() => {
    const spotlights = document.querySelectorAll('[data-spotlight]');
    spotlights.forEach((spotlight) => {
      new Spotlight(spotlight);
    });
  }, []);
  return (
    <>
      <Navbar />
      <HomeComponent />
      <div className="relative font-inter antialiased items-center">
        <main className="relative min-h-screen flex flex-col justify-center items-center bg-slate-900 overflow-hidden overflow-y-auto">
          <div className="md:p-4 p-8 md:h-auto md:w-full max-w-sm mt-20 lg:max-w-none group" data-spotlight>
            <div className="relative h-auto bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
              <div className="relative h-auto  bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden ">
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[90px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  <About />
                  <Works /> 
                  {/* <SpotlightCard /> */}
                </div>
              </div>
            </div>
                  <div class="">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                      <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Deepak kumar —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@The experience life...</a>
                      </p>
                      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-gray-500">
                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
          </div>
        </main>
      </div>


    </>
  )
}
export default Home;
