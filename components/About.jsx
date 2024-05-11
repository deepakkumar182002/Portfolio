
'use client'
import React, { useEffect } from 'react';
import Spotlight from '../utils/mouse-position';
import deep from '../public/deep.png'
import Image from 'next/image';
import Link from 'next/link';
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiNpm } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeScss } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
export default function About() {
    useEffect(() => {
        const spotlights = document.querySelectorAll('[data-spotlight]');
        spotlights.forEach((spotlight) => {
            new Spotlight(spotlight);
        });
    }, []);

    return (
        <>
            <div className="relative font-inter antialiased" id='about'>
                <main className="relative min-h-screen flex flex-col justify-start bg-slate-900 overflow-hidden">
                    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24" >
                        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group" data-spotlight>
                            <div data-aos='fade-up' className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                                <div className="relative  h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                    </div>
                                    <div className=" relative rounded-lg hover:bg-cyan-600 duration-300">
                                        <Image src={deep} className='rounded-lg hover:opacity-70 cursor-pointer' alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 md:ml-4 md:w-[600px] w-auto h-auto" data-aos='fade-left'>
                                <h3 className="text-xl font-bold text-white flex align-self">
                                    <hr className='w-full h-1 bg-white mt-4' />
                                    <span className='text-nowrap text-4xl'> 😊About me</span>
                                </h3>
                                <div className="mt-4">
                                    <p className='-tracking-tighter text-justify font-[200]'>Hello, I&apos;m <span className='text-cyan-400 font-bold'>Deepak kumar</span>, a dedicated and detail-oriented <Link href='/' className='text-cyan-400 underline font-bold'>Front-end</Link> software developer specializing in the <Link href='/' className='text-cyan-400 underline font-bold'>MERN stack</Link>, with an expansive skill set that encompasses both <Link href='/' className='text-cyan-400 underline font-bold'>Front-end</Link> and <Link href='/' className='text-cyan-400 underline font-bold'>Back-end</Link> technologies. With a passion for creating efficient, scalable web applications and a knack for designing intuitive user interfaces, I have consistently driven projects from concept to deployment.</p>
                                    <p className='pt-4 -tracking-tighter text-justify font-[200]'>Here are a few technologies I&apos;ve been working with recently:</p>

                                    <div className=" mt-4 flex flex-row gap-20 ">
                                        <div className="flex flex-col gap-4">
                                            <Link href='https://legacy.reactjs.org/docs/getting-started.html' className='hover:underline flex gap-2 items-center text-cyan-500'><FaReact />ReactJS</Link>
                                            <Link href='https://nextjs.org/docs' className='hover:underline flex gap-2 items-center'><RiNextjsLine />NextJS</Link>
                                            <Link href='https://nodejs.org/en' className='hover:underline flex gap-2 items-center text-green-500'><IoLogoNodejs />NodeJS</Link>
                                            <Link href='https://docs.npmjs.com/' className='hover:underline flex gap-2 items-center text-rose-600'><SiNpm />NPM</Link>
                                            <Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview' className='hover:underline flex gap-2 items-center text-orange-500'><SiJavascript />ES+</Link>

                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <Link href='/' className='hover:underline flex gap-2 items-center text-rose-600'><AiOutlineHtml5 />HTML</Link>
                                            <Link href='/' className='hover:underline flex gap-2 items-center text-cyan-500'><TbBrandCss3 />CSS</Link>
                                            <Link href='/' className='hover:underline flex gap-2 items-center text-yellow-400'><TbBrandJavascript />JavaScript</Link>
                                            <Link href='/' className='hover:underline flex gap-2 items-center text-blue-400'><RiTailwindCssFill />TailwindCSS</Link>
                                            <Link href='/' className='hover:underline flex gap-2 items-center text-pink-400'><BsFiletypeScss />SCSS</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <hr />
            </div >
        </>
    );
}

