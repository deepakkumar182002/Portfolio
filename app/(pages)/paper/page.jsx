'use client';
import React, { useEffect } from 'react';
import Spotlight from '@/utils/mouse-position';
import paper from './img/Author 4 Paper ID_499 IEEE certificate.jpg';
import certificate from './img/004_ARYANS_Deepak Kumar.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { TiArrowBack } from 'react-icons/ti';
import { FaLinkedinIn } from 'react-icons/fa6';

export default function Patents() {
  useEffect(() => {
    const spotlights = document.querySelectorAll('[data-spotlight]');
    spotlights.forEach((spotlight) => {
      new Spotlight(spotlight);
    });
  }, []);

  return (
    <main className="relative font-inter antialiased items-center" id="work">
      <div className="relative min-h-screen flex justify-center flex-col bg-slate-900 overflow-hidden">
        <Link
          href="/"
          className="fixed top-4 left-4 text-4xl z-40 bg-slate-800/30 p-2  backdrop-blur-sm rounded-lg"
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
                    <Image src={paper} className="relative z-10" alt="" />
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
              License & certification
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
                      IEEE SCEECS&apos; 2024 Conference
                    </div>
                    <p>
                      <i>IEEE MANIT Student Branch</i>
                    </p>
                    <p>Issued : Mar 2024</p>
                    <p>Credential ID : 10481981</p>
                  </Typography>
                </div>

                <div className="text-2xl font-[100] mt-2 float-right">
                  <i>-Deepak kumar</i>
                </div>
              </CardBody>
            </Card>
            <div className="flex h-auto gap-4 my-4 float-right md:mr-4">
              <Link
                href="https://www.linkedin.com/in/deepakkumar182002/details/certifications/"
                className="md:text-2xl text-cyan-600"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                className="md:text-2xl text-cyan-600"
                href="https://ieeexplore.ieee.org/document/10481981"
              >
                <BsBoxArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
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
                    <Image src={certificate} className="relative z-10" alt="" />
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
              License & certification
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
                      Smart India Hackathon
                    </div>
                    <p>
                      <i>Internal Hackathon 2023</i>
                    </p>
                    <p>Issued : Sep 2023</p>
                    <p>Credential ID : DEI/SIH2023/004</p>
                  </Typography>
                </div>

                <div className="text-2xl font-[100] mt-2 float-right">
                  <i>-Deepak kumar</i>
                </div>
              </CardBody>
            </Card>
            <div className="flex h-auto gap-4 my-4 float-right md:mr-4">
              <Link
                href="https://www.linkedin.com/in/deepakkumar182002/details/certifications/"
                className="md:text-2xl text-cyan-600"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
