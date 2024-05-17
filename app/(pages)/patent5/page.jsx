'use client';
import React, { useEffect } from 'react';
import Spotlight from '@/utils/mouse-position';
import CircuitDesign from './img/Heli-Drone Certificate .jpg';
import Image from 'next/image';
import Link from 'next/link';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { SiAutodesk, SiExcalidraw } from 'react-icons/si';
import { Card, CardBody, Typography, Tooltip } from '@material-tailwind/react';
import { TiArrowBack } from 'react-icons/ti';

import v1 from './img/hellidrone.png';
import v2 from './img/not found.webp';
import v3 from './img/not found.webp';
import v4 from './img/not found.webp';
import v5 from './img/not found.webp';
import v6 from './img/not found.webp';
import v7 from './img/not found.webp';
import v8 from './img/not found.webp';
// import {v9} from "./img/front V.png"

export default function Patents() {
  useEffect(() => {
    const spotlights = document.querySelectorAll('[data-spotlight]');
    spotlights.forEach((spotlight) => {
      new Spotlight(spotlight);
    });
  }, []);

  return (
    <>
      <main className="relative font-inter antialiased items-center" id="work">
        <div className="relative min-h-screen flex justify-center flex-col bg-slate-900 overflow-hidden">
          <Link
            href="/"
            className="fixed top-4 left-4 text-4xl z-40 bg-slate-800/30 p-2 rounded-lg backdrop-blur-sm"
          >
            <TiArrowBack />
          </Link>
          <div className="md:w-scree flex flex-col md:flex-row md:px-6 py-24">
            <Link
              href="https://www.registered-design.service.gov.uk/find/6328234"
              data-aos="fade-right"
            >
              <div
                className="max-w-sm w-auto mx-auto items-center flex flex-col lg:max-w-none group"
                data-spotlight
              >
                <div className="relative h-full w-[350px] md:w-[700px] bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                  <div className="relative h-full w-[350px] md:w-[700px] bg-slate-900 p-4 rounded-[inherit] z-20 overflow-hidden">
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                    </div>
                    <div className="relative flex flex-col h-full items-center bg-slate-800 opacity-20 hover:opacity-100 duration-300 cursor-pointer text-center rounded-lg overflow-hidden">
                      <Image
                        src={CircuitDesign}
                        className="relative z-10"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="relative h-auto w-full z-30 md:right-20"
              data-aos="fade-up"
            >
              <div className="relative text-3xl font-[100] text-sky-400 text-center mt-4 md:float-right md:mt-10 md:mr-2">
                Patent Achievement
              </div>
              <Card className="rounded-md z-30 w-full h-auto md:h-auto max-w-[760px] shadow-lg backdrop-blur-sm bg-slate-800/40 text-white mt-4">
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <div className="mt-4 md:text-right text-3xl text-center md:text-4xl font-bold">
                        Remote Controlled Helicopter Drone
                      </div>
                    </Typography>
                  </div>

                  <div className="group mt-8 inline-flex flex-wrap w-full md:items-start items-center gap-3">
                    <Tooltip
                      content="AutoDesk Fusion360"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <SiAutodesk className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="ED"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <SiExcalidraw className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="And many more"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="z-30 cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        +20
                      </span>
                    </Tooltip>
                  </div>
                </CardBody>
              </Card>
              <Card className="rounded-md z-30 w-full h-auto md:h-auto max-w-[760px] shadow-lg backdrop-blur-sm bg-slate-800/40 text-white mt-4">
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <div className="mt-4 md:text-right text-3xl text-center md:text-4xl font-bold">
                        All Design Views
                      </div>
                    </Typography>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <div>
                      <Image
                        className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                        src={v1}
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <Image
                        className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                        src={v2}
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <Image
                        className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                        src={v3}
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <Image
                        className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                        src={v4}
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <Image
                        className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                        src={v5}
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <Image
                        className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                        src={v6}
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <Image
                        className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                        src={v7}
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <Image
                        className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                        src={v8}
                        alt=" gallery-photo"
                      />
                    </div>
                    <div>
                      <Image
                        className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                        src={v8}
                        alt="gallery-photo"
                      />
                    </div>
                  </div>
                  <div className="text-2xl font-[100] mt-2 float-right">
                    <i>-Deepak kumar</i>
                  </div>
                </CardBody>
              </Card>
              <div className="flex h-auto gap-4 my-4 float-right md:mr-4">
                <Link
                  className="md:text-2xl text-cyan-600"
                  href="https://www.registered-design.service.gov.uk/find/6309933"
                >
                  <BsBoxArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
