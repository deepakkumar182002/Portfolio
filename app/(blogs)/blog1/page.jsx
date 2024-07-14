'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import img1 from '../img/gitHubbag.png';
import img2 from '../img/NUX_Octodex.gif';
import img3 from '../img/Adacats.png';
import img4 from '../img/spidertocat.png';
import img5 from '../img/animate.gif';
import img6 from '../img/featurers.png';

export default function Post() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const shareUrl = (platform) => {
    const url = encodeURIComponent(currentUrl);
    const text = encodeURIComponent('Check out this awesome portfolio!');

    switch (platform) {
      case 'whatsapp':
        return `https://wa.me/?text=${text}%20${url}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      default:
        return '#';
    }
  };

  return (
    <>
      <main className="h-full flex justify-center items-center bg-white text-black">
        <div className="container p-4 w-full md:w-3/5 mx-auto h-full mt-4 bg-white text-black">
          <div className="py-4 px-5 flex justify-center flex-col gap-4">
            <Link
              href="/"
              className="flex bg-white text-black font-[200] mx-auto justify-center shadow-lg shadow-black-500/40 p-4 text-xl"
            >
              Visit Homepage
            </Link>
            <Link
              data-aos="zoom-in"
              className="flex bg-white text-black font-[200] mx-auto justify-center shadow-lg shadow-black-500/40 p-4 text-xl"
              href="https://drive.google.com/file/d/1SqdVDlDUa3Rssr5m8QjRbnGx0C9hLxzK/view?usp=sharing"
              target="_blank"
            >
              View My Resume
            </Link>
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-gray-400 flex md:pb-4 items-end pb-2">
              Published on Tuesday, June 11 2024
            </p>
            <div className="flex flex-col md:flex-row p-1 text-3xl pb-2 gap-2">
              <p className="text-gray-400 text-[16px]">Share my Blog on</p>
              <div className="flex flex-row">
                <a
                  href={shareUrl('whatsapp')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500"
                >
                  <FaSquareWhatsapp />
                </a>
                <a
                  href={shareUrl('twitter')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaSquareXTwitter />
                </a>
                <a
                  href={shareUrl('facebook')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href={shareUrl('linkedin')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500"
                >
                  <IoLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full h-auto">
            <Image
              className="w-full rounded-lg object-coverspace-y-4 object-center"
              width={500}
              height={500}
              src={img1}
              alt="1"
            />
          </div>

          <h1 className="text-3xl mt-4 fmb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3 first-letter:float-start">
            Unlocking the Power of the GitHub Student Developer Pack
          </h1>

          <p className="text-justify pt-4 text-[20px] tracking-wider">
            If you're a university student today, there's one resource you
            absolutely need to be aware of the GitHub{' '}
            <span>
              <Link
                href="https://education.github.com/discount_requests/application"
                className="underline text-gray-500"
              >
                Student Developer Pack
              </Link>
            </span>
            . From my own experience, I can confidently say that taking
            advantage of this pack can significantly enhance your journey as a
            student and future professional developer. This pack is a bundle of
            free tools and services offered by GitHub and its partners to help
            students learn and develop their skills in software development. It
            includes access to industry-standard tools and services for free,
            which are invaluable for anyone looking to build a career in tech.
          </p>

          <div className="w-full h-auto p-4 mt-8">
            <Image
              className="w-full object-coverspace-y-4 object-center"
              width={500}
              height={500}
              src={img5}
              alt="2"
            />
          </div>

          <h1 className="text-3xl mt-20 mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3 first-letter:float-start">
            Why You Should Take Advantage of the GitHub Student Developer Pack
          </h1>
          <p className="text-justify pt-4 text-[20px] tracking-wider ">
            <span>
              <Link
                href="https://education.github.com/discount_requests/application"
                className="underline text-gray-500"
              >
                The Student Developer Pack
              </Link>
            </span>{' '}
            provides access to a variety of professional tools at no cost, such
            as GitHub Pro for unlimited private repositories, Namecheap for a
            free domain name, JetBrains for professional development
            environments, AWS credits, and DigitalOcean for cloud services.
            These tools, which would cost hundreds of dollars if purchased
            individually, are available to students for free, enabling them to
            build real-world projects, contribute to open-source, and develop a
            portfolio that showcases their skills.
          </p>
          <p className="text-justify pt-4 text-[20px] tracking-wider ">
            By using the tools included in the pack, such as{' '}
            <span>
              <Link
                className="underline text-gray-500"
                href="https://blog.jetbrains.com/education/2018/09/18/free-jetbrains-licenses-as-part-of-github-student-developer-pack/"
              >
                JetBrains'{' '}
              </Link>
            </span>
            IDEs and{' '}
            <span>
              <Link
                className="underline text-gray-500"
                href="https://github.com/"
              >
                GitHub's
              </Link>
            </span>{' '}
            own code review tools, students can improve their coding standards
            and practices. Additionally, becoming an active member of the GitHub
            community allows students to connect with other students, educators,
            and professionals, leading to collaborations, mentorship
            opportunities, and even job offers. The GitHub Student Developer
            Pack ensures students stay current with the latest tools and
            practices in the constantly evolving technology landscape, making it
            an invaluable resource for any aspiring professional developer.
          </p>

          <div className="w-full h-auto p-4">
            <Image
              className="w-full object-coverspace-y-4 object-center"
              width={500}
              height={500}
              src={img3}
              alt="3"
            />
          </div>

          <h1 className="text-3xl mt-20 mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3 first-letter:float-start">
            How to Get Started with the GitHub Student Developer Pack
          </h1>
          <p className="text-justify pt-4 text-[20px] tracking-wider ">
            Getting the GitHub Student Developer Pack is straightforward. If you
            don’t already have a GitHub account, the first step is to sign up at
            github.com. Once you have an account, visit the GitHub Student
            Developer Pack page and apply by providing proof of your student
            status, such as a student ID or university email address. The
            application process is simple and quick, and once approved, you’ll
            gain access to an array of tools and resources that can elevate your
            learning and development experience.
          </p>
          <div className="w-full h-auto p-4">
            <div className="w-full h-auto p-4">
              <Image
                className="w-full object-coverspace-y-4 object-center"
                width={500}
                height={500}
                src={img6}
                alt="3"
              />
            </div>
            <h1 className="text-3xl mt-20 mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3 first-letter:float-start">
              GitHub offers lots of features and free access to more platforms
            </h1>
            <p className="text-justify pt-4 text-[20px] tracking-wider">
              The GitHub Student Developer Pack offers an extensive array of
              features that provide students with access to a variety of
              software and platforms essential for honing their development
              skills. For instance, the pack includes GitHub Pro, which offers
              unlimited private repositories and advanced code review tools.
              Students also get access to{' '}
              <span>
                <Link
                  className="underline text-gray-500"
                  href="https://blog.jetbrains.com/education/2018/09/18/free-jetbrains-licenses-as-part-of-github-student-developer-pack/"
                >
                  JetBrains'{' '}
                </Link>
              </span>{' '}
              suite of integrated development environments (IDEs), like{' '}
              <span>
                <Link
                  href="https://www.jetbrains.com/idea/"
                  className="text-gray-500 underline"
                >
                  IntelliJ IDEA
                </Link>
              </span>
              , which are widely used in the industry for writing clean,
              efficient code. Furthermore, the pack provides free credits for{' '}
              <span>
                <Link
                  href="https://aws.amazon.com/free/?gclid=CjwKCAjw65-zBhBkEiwAjrqRMAt5h_lzvJAYWpZxNaGQLgDA7OwPug4OxYDpANBg1fshyD2Amm8UuxoC7akQAvD_BwE&trk=14a4002d-4936-4343-8211-b5a150ca592b&sc_channel=ps&ef_id=CjwKCAjw65-zBhBkEiwAjrqRMAt5h_lzvJAYWpZxNaGQLgDA7OwPug4OxYDpANBg1fshyD2Amm8UuxoC7akQAvD_BwE:G:s&s_kwcid=AL!4422!3!453325184782!e!!g!!aws!10712784856!111477279771&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"
                  className="underline text-gray-500"
                >
                  Amazon Web Services (AWS)
                </Link>
              </span>
              , allowing students to explore cloud computing services, deploy
              applications, and work on scalable projects. DigitalOcean offers
              additional cloud services, giving students the flexibility to host
              and manage their projects seamlessly.
            </p>
            <p className="text-justify pt-4 text-[20px] tracking-wider">
              Beyond software access, the GitHub Student Developer Pack includes
              valuable platform access and additional benefits. Students can
              obtain a free domain name from{' '}
              <span>
                <Link href="https://nc.me/" className="underline text-gray-500">
                  Namecheap
                </Link>
              </span>
              , which is ideal for setting up personal portfolios or project
              websites.{' '}
              <span>
                <Link
                  href="https://www.canva.com/en_gb/"
                  className="underline text-gray-500"
                >
                  Canva
                </Link>
              </span>{' '}
              provides tools for designing graphics, useful for creating
              visually appealing project presentations and marketing materials.{' '}
              <span>
                <Link
                  className="underline text-gray-500"
                  href="azure.microsoft.com/en-in/free/search/?ef_id=_k_CjwKCAjw65-zBhBkEiwAjrqRMD_5pZZ8D8d2kqyuBO1b8vJt9dcordoLS3Dxz3RJqtQlgnwmcyxHnxoCR9wQAvD_BwE_k_&OCID=AIDcmmf1elj9v5_SEM__k_CjwKCAjw65-zBhBkEiwAjrqRMD_5pZZ8D8d2kqyuBO1b8vJt9dcordoLS3Dxz3RJqtQlgnwmcyxHnxoCR9wQAvD_BwE_k_&gad_source=1&gclid=CjwKCAjw65-zBhBkEiwAjrqRMD_5pZZ8D8d2kqyuBO1b8vJt9dcordoLS3Dxz3RJqtQlgnwmcyxHnxoCR9wQAvD_BwE"
                >
                  Microsoft Azure
                </Link>
              </span>{' '}
              offers even more cloud services and developer tools, while
              <span>
                <Link
                  href="https://www.mongodb.com/"
                  className="underline text-gray-500"
                >
                  MongoDB
                </Link>
              </span>{' '}
              grants access to powerful database management systems. These
              platforms not only enhance the learning experience but also
              prepare students for real-world applications, making them
              well-rounded and proficient developers.
            </p>

            <Image
              className="object-coverspace-y-4 mx-auto object-center"
              width={400}
              height={400}
              src={img2}
              alt="3"
            />
          </div>
          <h1 className="text-3xl mt-20 mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3 first-letter:float-start">
            Conclusion
          </h1>
          <p className="text-justify pt-4 text-[20px] tracking-wider">
            The GitHub Student Developer Pack is an invaluable resource for any
            university student aspiring to be a professional developer. It
            provides access to essential tools and services, fosters practical
            learning, and opens doors to networking and career opportunities.
            From my own experience, I can assure you that taking advantage of
            this pack will significantly enhance your skills and career
            prospects. Don’t miss out on this incredible opportunity to
            supercharge your development journey. Sign up today and start
            reaping the benefits!
          </p>
          <div className="w-full h-auto p-4">
            <Image
              className="mx-auto object-coverspace-y-4 object-center"
              width={400}
              height={400}
              src={img4}
              alt="4"
            />
          </div>
          <div className="mx-auto py-4 px-5 flex justify-center flex-col">
            <span className="flex justify-center ">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-8 h-8 text-blue-700"
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
                  className="w-8 h-8 text-sky-400"
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
                  className="w-8 h-8 text-pink-400"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
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
                  className="w-8 h-8 text-sky-600"
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
            <div className="text-gray-500 text-sm text-center mt-8">
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
          </div>
        </div>
      </main>
    </>
  );
}
