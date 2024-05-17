import Circuitdesign from '../public/circuitDesign.gif';
import Image from 'next/image';
import Link from 'next/link';
import rotor32 from '../public/32rotor.png';
import hydroponic from '../public/hydroponic.png';
import medidron from '../public/madicaldron.png';
import flaghosting from '../public/flagHosting.png';
import humandron from '../public/humandron.png';
import pantacopter from '../public/pantacopter.png';
import ArduinoD from '../public/arduino.png';
import fusion360 from '../public/fusion360.png';
import fusion360Text from '../public/Fusion-360-Logo-Vector.svg-.png';
import hellydrone from '../public/hellidrone.png';
function Patents() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-8">
        <div className="grid gap-4">
          <Link
            href="/patent1"
            className="flex justify-center items-center"
            data-aos="fade-right"
          >
            <div className="md:text-2xl text-[8px] text-[8px] text-slate-700 absolute  md:backdrop-blur-sm md:bg-white/50 p-2">
              Granted
            </div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={Circuitdesign}
              alt="gallery-photo"
            />
          </Link>
          <Link href="/" data-aos="fade-right">
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={humandron}
              alt="gallery-photo"
            />
          </Link>
          <Link href="/" data-aos="fade-right">
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={pantacopter}
              alt="gallery-photo"
            />
          </Link>
        </div>
        <div className="grid gap-4">
          <Link
            href="/patent3"
            className="flex justify-center items-center"
            data-aos="fade-up"
          >
            <div className="md:text-2xl text-[8px] text-slate-700 absolute  md:backdrop-blur-sm md:bg-white/50 p-2">
              Granted
            </div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={medidron}
              alt="gallery-photo"
            />
          </Link>
          <Link
            href="/patent2"
            className="flex justify-center items-center"
            data-aos="fade-up"
          >
            <div className="md:text-2xl text-[8px] text-slate-700 absolute  md:backdrop-blur-sm md:bg-white/50 p-2">
              Granted
            </div>

            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={rotor32}
              alt="gallery-photo"
            />
          </Link>
          <Link
            href="/patent1"
            className="flex justify-center items-center"
            data-aos="fade-up"
          >
            <div className="md:text-2xl text-[15px] text-slate-700 absolute  md:backdrop-blur-sm md:bg-white/50 p-2">
              Granted
            </div>

            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={ArduinoD}
              alt="gallery-photo"
            />
          </Link>
        </div>
        <div className="grid gap-4">
          <Link
            href="/patent5"
            className="flex justify-center items-center"
            data-aos="fade-up"
          >
            <div className="md:text-2xl text-[8px] text-slate-700 absolute  md:backdrop-blur-sm md:bg-white/50 p-2">
              Granted
            </div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={hellydrone}
              alt="gallery-photo"
            />
          </Link>
          <Link
            href="/patent4"
            className="flex justify-center items-center"
            data-aos="fade-up"
          >
            <div className="md:text-2xl text-[8px] text-slate-700 absolute  md:backdrop-blur-sm md:bg-white/50 p-2">
              Granted
            </div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={hydroponic}
              alt="gallery-photo"
            />
          </Link>
          <Link href="/" data-aos="fade-up">
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={flaghosting}
              alt="gallery-photo"
            />
          </Link>
        </div>
        <div className="grid gap-4" data-aos="fade-left">
          <Link href="/">
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={fusion360}
              alt="gallery-photo"
            />
          </Link>
          <Link href="/" data-aos="fade-left">
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={fusion360Text}
              alt="gallery-photo"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Patents;
