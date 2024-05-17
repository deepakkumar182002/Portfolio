'use client';
import React, { useEffect } from 'react';
import Spotlight from '../utils/mouse-position';
import Project1 from '../public/pro1.png';
import Project2 from '../public/pro2.png';
import Project3 from '../public/pro3.png';
import Project4 from '../public/pro4.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandCss3 } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiFirebase } from 'react-icons/si';
import { SiArduino } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { IoLogoNodejs } from 'react-icons/io5';
import { RiNextjsLine } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
} from '@material-tailwind/react';

export default function SpotlightCard() {
  useEffect(() => {
    const spotlights = document.querySelectorAll('[data-spotlight]');
    spotlights.forEach((spotlight) => {
      new Spotlight(spotlight);
    });
  }, []);

  return (
    <>
      <div className="relative font-inter antialiased items-center" id="work">
        <main className="relative min-h-screen flex justify-center flex-col bg-slate-900 overflow-hidden">
          <div className="md:w-scree flex flex-col md:flex-row md:px-6 py-24">
            <Link
              href="https://agriculture-monitoring.netlify.app/"
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
                      <Image src={Project1} className="relative z-10" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="relative h-auto w-full z-30 md:right-20 p-4"
              data-aos="fade-up"
            >
              <h1 className="relative text-3xl font-[100] text-sky-400 text-center mt-4 md:float-right md:mt-10 md:mr-2">
                Featured Project
              </h1>
              <Card className="z-30 w-full h-auto md:h-auto max-w-[760px] shadow-lg backdrop-blur-sm bg-slate-800/10 text-white mt-4">
                <CardHeader floated={false} color="blue-gray">
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                  <IconButton
                    size="sm"
                    color="red"
                    variant="text"
                    className="!absolute top-4 right-4 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </IconButton>
                </CardHeader>
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <p className="mt-4 md:text-right text-3xl text-center md:text-4xl font-bold">
                        Agriculture Monitoring System{' '}
                      </p>
                    </Typography>
                  </div>
                  <Typography color="gray" className="text-justify">
                    Introducing &apos;Agriculture Monitoring System&apos; A
                    dynamic project utilizing HTML, CSS, and JavaScript for a
                    comprehensive dashboard displaying real-time sensor data.
                    Integrated with Firebase and C++, it empowers efficient
                    monitoring and management of agricultural processes,
                    enhancing productivity and yield.
                  </Typography>
                  <div className="group mt-8 inline-flex flex-wrap w-full md:items-start items-center gap-3">
                    <Tooltip
                      content="HTML"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <AiOutlineHtml5 className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="CSS"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <TbBrandCss3 className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="JavaScript"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <TbBrandJavascript className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="Firebase"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <SiFirebase className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="C++"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <SiArduino className="text-2xl" />
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
              <div className="flex h-auto gap-4  my-4 float-right md:mr-4">
                <Link
                  className="md:text-2xl text-cyan-600"
                  href="https://github.com/deepakkumar182002/AgricultureMonitoring"
                >
                  <FiGithub />
                </Link>
                <Link
                  className="md:text-2xl text-cyan-600"
                  href="https://agriculture-monitoring.netlify.app/"
                >
                  <BsBoxArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="relative font-inter antialiased items-center">
        <main className="relative min-h-screen flex justify-center flex-col bg-slate-900 overflow-hidden">
          <div className="md:w-scree flex flex-col md:flex-row md:px-6 py-10">
            <Link href="https://freemepado.vercel.app/" data-aos="fade-right">
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
                      <Image src={Project4} className="relative z-10" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="relative h-auto w-full z-30 md:right-20 p-4"
              data-aos="fade-up"
            >
              <h1 className="relative text-3xl font-[100] text-sky-400 text-center mt-4 md:float-right md:mt-10 md:mr-2">
                Featured Project
              </h1>
              <Card className="z-30 w-full h-auto md:h-auto max-w-[760px] shadow-lg backdrop-blur-sm bg-slate-800/10 text-white mt-4">
                <CardHeader floated={false} color="blue-gray">
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                  <IconButton
                    size="sm"
                    color="red"
                    variant="text"
                    className="!absolute top-4 right-4 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </IconButton>
                </CardHeader>
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <p className="mt-4 md:text-right text-3xl text-center md:text-4xl font-bold">
                        Embedded Learning Site
                      </p>
                    </Typography>
                  </div>
                  <Typography color="gray" className="text-justify">
                    Discover hands-on IoT device learning with our comprehensive
                    website. Explore a variety of experiments, tutorials, and
                    projects designed to enhance your skills. Ideal for
                    beginners and experts alike, our content covers everything
                    from basic concepts to advanced applications, ensuring you
                    stay ahead in the IoT field. Start learning today!
                  </Typography>
                  <div className="group mt-8 inline-flex flex-wrap w-full md:items-start items-center gap-3">
                    <Tooltip
                      content="Next.js"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <RiNextjsLine className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="React.js"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <FaReact className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="Express.js"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <SiExpress className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="TailwindCSS"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <RiTailwindCssFill className="text-2xl" />
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
              <div className="flex h-auto gap-4  my-4 float-right md:mr-4">
                <Link className="md:text-2xl text-cyan-600" href="/">
                  <FiGithub />
                </Link>
                <Link
                  className="md:text-2xl text-cyan-600"
                  href="https://freemepado.vercel.app/"
                >
                  <BsBoxArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="relative font-inter antialiased items-center">
        <main className="relative min-h-screen flex justify-center flex-col bg-slate-900 overflow-hidden">
          <div className="md:w-scree flex flex-col md:flex-row md:px-6 py-10">
            <Link
              href="https://deep-weatherstation.netlify.app/"
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
                      <Image src={Project2} className="relative z-10" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="relative h-auto w-full z-30 md:right-20 p-4"
              data-aos="fade-up"
            >
              <h1 className="relative text-3xl font-[100] text-sky-400 text-center mt-4 md:float-right md:mt-10 md:mr-2">
                Featured Project
              </h1>
              <Card className="z-30 w-full h-auto md:h-auto max-w-[760px] shadow-lg backdrop-blur-sm bg-slate-800/10 text-white mt-4">
                <CardHeader floated={false} color="blue-gray">
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                  <IconButton
                    size="sm"
                    color="red"
                    variant="text"
                    className="!absolute top-4 right-4 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </IconButton>
                </CardHeader>
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <p className="mt-4 md:text-right text-3xl text-center md:text-4xl font-bold">
                        Weather Station & realtime Data{' '}
                      </p>
                    </Typography>
                  </div>
                  <Typography color="gray" className="text-justify">
                    This is an embedded-based project in which a real-time
                    weather station has been created using a microcontroller,
                    sensors, Firebase Web API, web development & weather API.
                    The Firebase platform has been used to visualize the
                    real-time data of sensors.
                  </Typography>
                  <div className="group mt-8 inline-flex flex-wrap w-full md:items-start items-center gap-3">
                    <Tooltip
                      content="HTML"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <AiOutlineHtml5 className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="CSS"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <TbBrandCss3 className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="JavaScript"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <TbBrandJavascript className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="Firebase"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <SiFirebase className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="C++"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <SiArduino className="text-2xl" />
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
              <div className="flex h-auto gap-4  my-4 float-right md:mr-4">
                <Link
                  className="md:text-2xl text-cyan-600"
                  href="https://github.com/deepakkumar182002/Realtime-WeatherApp-DHT11-Data"
                >
                  <FiGithub />
                </Link>
                <Link
                  className="md:text-2xl text-cyan-600"
                  href="https://deep-weatherstation.netlify.app/"
                >
                  <BsBoxArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="relative font-inter antialiased items-center">
        <main className="relative min-h-screen flex justify-center flex-col bg-slate-900 overflow-hidden">
          <div className="md:w-scree flex flex-col md:flex-row md:px-6 py-10">
            <Link
              href="https://edtech-courses-2.netlify.app/"
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
                      <Image src={Project3} className="relative z-10" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="relative h-auto w-full z-30 md:right-20 p-4"
              data-aos="fade-up"
            >
              <h1 className="relative text-3xl font-[100] text-sky-400 text-center mt-4 md:float-right md:mt-10 md:mr-2">
                Featured Project
              </h1>
              <Card className="z-30 w-full h-auto md:h-auto max-w-[760px] shadow-lg backdrop-blur-sm bg-slate-800/10 text-white mt-4">
                <CardHeader floated={false} color="blue-gray">
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                  <IconButton
                    size="sm"
                    color="red"
                    variant="text"
                    className="!absolute top-4 right-4 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </IconButton>
                </CardHeader>
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <p className="mt-4 md:text-right text-3xl text-center md:text-4xl font-bold">
                        Ed-Tech Site
                      </p>
                    </Typography>
                  </div>
                  <Typography color="gray" className="text-justify">
                    &apos;Ed tech site&apos; is an innovative online learning
                    platform built with React.js and Node.js. It offers a
                    seamless experience for users to explore courses, purchase
                    subscriptions, and enhance their skills. With a sleek
                    Bootstrap interface and powerful JavaScript functionalities,
                    it revolutionizes the way we learn online.{' '}
                  </Typography>
                  <div className="group mt-8 inline-flex flex-wrap w-full md:items-start items-center gap-3">
                    <Tooltip
                      content="React.js"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <FaReact className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="Node.js"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <IoLogoNodejs className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="JavaScript"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <TbBrandJavascript className="text-2xl" />
                      </span>
                    </Tooltip>
                    <Tooltip
                      content="CSS"
                      className="relative z-30 backdrop-blur-sm bg-slate-200 text-slate-950"
                    >
                      <span className="cursor-pointer rounded-full border border-gray-200/5 bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-200/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <TbBrandCss3 className="text-2xl" />
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
              <div className="flex h-auto gap-4  my-4 float-right md:mr-4">
                <Link
                  className="md:text-2xl text-cyan-600"
                  href="https://github.com/deepakkumar182002/edtech1"
                >
                  <FiGithub />
                </Link>
                <Link
                  className="md:text-2xl text-cyan-600"
                  href="https://edtech-courses-2.netlify.app/"
                >
                  <BsBoxArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
