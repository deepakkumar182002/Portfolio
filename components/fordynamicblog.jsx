// import { initializeSupabase } from '@/utils/supabase/server';
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaSquareWhatsapp } from 'react-icons/fa6';
// import { FaSquareXTwitter } from 'react-icons/fa6';
// import { FaFacebookSquare } from 'react-icons/fa';
// import { IoLogoLinkedin } from 'react-icons/io5';
// export default async function Post({ params }) {
//   const supabase = initializeSupabase();
//   const { id } = params;
//   const { data: firstblog, error } = await supabase
//     .from('firstblog')
//     .select()
//     .match({ id })
//     .single();
//   if (!firstblog || error) {
//     notFound();
//     return; // Optionally, render an error or a redirect here
//   }

//   return (
//     <>
//       <main className="h-full flex justify-center items-center bg-white text-black">
//         <div className="container p-4 w-full md:w-3/5 mx-auto h-full mt-4 bg-white text-black">
//           <div className="py-4 px-5 flex justify-center flex-col gap-4">
//             <Link
//               href="/"
//               className="flex bg-white text-black font-[200] mx-auto justify-center shadow-lg shadow-black-500/40 p-4 text-xl"
//             >
//               Visit Homepage
//             </Link>
//             <Link
//               data-aos="zoom-in"
//               className="flex bg-white text-black font-[200] mx-auto justify-center shadow-lg shadow-black-500/40 p-4 text-xl"
//               href="https://drive.google.com/file/d/1zMNJ71S6V5Ij8i8m2XBswaCwtt_sBtTJ/view?usp=sharing"
//               target="_blank"
//             >
//               View My Resume
//             </Link>
//           </div>
//           <div className="flex justify-between mt-8">
//             <p className="text-gray-400 pb-4">
//               Published on Tuesday, June 10 2024
//             </p>
//             <div className="flex p-1 text-3xl pb-2 gap-2">
//               <Link href="/">
//                 <FaSquareWhatsapp />
//               </Link>
//               <Link href="/">
//                 <FaSquareXTwitter />
//               </Link>
//               <Link href="/">
//                 <FaFacebookSquare />
//               </Link>
//               <Link href="/">
//                 <IoLogoLinkedin />
//               </Link>
//             </div>
//           </div>
//           <div className=" w-full h-auto">
//             <Image
//               className="w-full rounded-lg object-coverspace-y-4 object-center"
//               width={500}
//               height={500}
//               src={firstblog.image1}
//               alt="2"
//             />
//           </div>

//           <h1 className="text-3xl mt-4 fmb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3 first-letter:float-start">
//             {firstblog.h1}
//           </h1>

//           <p className="text-justify pt-4 text-[20px] tracking-wider">
//             {firstblog.p1}
//           </p>

//           <div className="w-full h-auto p-4 mt-8">
//             <Image
//               className="w-full object-coverspace-y-4 object-center"
//               width={500}
//               height={500}
//               src={firstblog.image2}
//               alt={firstblog.id}
//             />
//           </div>

//           <h1 className="text-3xl mt-20 mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3 first-letter:float-start">
//             {firstblog.h2}
//           </h1>

//           <p className="text-justify pt-4 text-[20px] tracking-wider ">
//             {firstblog.p2.slice(0, 525)}
//           </p>
//           <p className="text-justify pt-4 text-[20px] tracking-wider ">
//             {firstblog.p2.slice(525)}
//           </p>

//           <div className="w-full h-auto p-4 mt-8">
//             <Image
//               className="w-full object-coverspace-y-4 object-center"
//               width={500}
//               height={500}
//               src={firstblog.image2}
//               alt={firstblog.id}
//             />
//           </div>
//           <h1 className="text-3xl mt-20 mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3 first-letter:float-start">
//             {firstblog.h3}
//           </h1>

//           <p className="text-justify pt-4 text-[20px] tracking-wider ">
//             {firstblog.p3}
//           </p>
//           <div className="w-full h-auto p-4 mt-8">
//             {/* <Image className="w-full object-coverspace-y-4 object-center" width={500} height={500} src={firstblog.image4} alt={firstblog.id} /> */}
//           </div>

//           <h1 className="text-3xl mt-20 mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3 first-letter:float-start">
//             {firstblog.h4}
//           </h1>

//           <p className="text-justify pt-4 text-[20px] tracking-wider">
//             {firstblog.p4}
//           </p>
//           <div className="w-full h-auto p-4">
//             <Image
//               className="mx-auto object-coverspace-y-4 object-center"
//               width={200}
//               height={200}
//               src={firstblog.image4}
//               alt={firstblog.id}
//             />
//           </div>
//           <div className="mx-auto py-4 px-5 flex justify-center flex-col">
//             <span className="flex justify-center ">
//               <a className="text-gray-500">
//                 <svg
//                   fill="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="w-8 h-8 text-blue-700"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                 </svg>
//               </a>
//               <a
//                 href="https://x.com/Deepakk24578803"
//                 className="ml-3 text-gray-500"
//               >
//                 <svg
//                   fill="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="w-8 h-8 text-sky-400"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                 </svg>
//               </a>
//               <a
//                 href="https://www.instagram.com/deepak_kumar222444/"
//                 className="ml-3 text-gray-500"
//               >
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="w-8 h-8 text-pink-400"
//                   viewBox="0 0 24 24"
//                 >
//                   <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                   <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//                 </svg>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/deepakkumar182002/"
//                 className="ml-3 text-gray-500"
//               >
//                 <svg
//                   fill="currentColor"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="0"
//                   className="w-8 h-8 text-sky-600"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     stroke="none"
//                     d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
//                   ></path>
//                   <circle cx="4" cy="4" r="2" stroke="none"></circle>
//                 </svg>
//               </a>
//             </span>
//             <div className="text-gray-500 text-sm text-center mt-8">
//               © 2024 Deepak kumar —
//               <a
//                 href="/"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 ml-1"
//                 target="_blank"
//               >
//                 @The experience life...
//               </a>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
