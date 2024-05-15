import Circuitdesign from "../public/circuitDesign.gif"
import Image from "next/image";
import Link from "next/link";
import rotor32 from "../public/32rotor.png"
import hydroponic from "../public/hydroponic.png"
import medidron from "../public/madicaldron.png"
import flaghosting from "../public/flagHosting.png"
import humandron from "../public/humandron.png"
import pantacopter from "../public/pantacopter.png"
import ArduinoD from "../public/arduino.png"
import fusion360 from "../public/fusion360.png"
import fusion360Text from "../public/Fusion-360-Logo-Vector.svg-.png"
function Patents() {
    return (
        <>
        
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-4" id="patents">
                <div className="grid gap-4">
                    <Link href='/patent1'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={Circuitdesign}
                            alt="gallery-photo"
                        />
                    </Link>
                    <Link href='/'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center "
                            src={humandron}
                            alt="gallery-photo"
                        />
                    </Link>
                    <Link href='/'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={pantacopter}
                            alt="gallery-photo"
                        />
                    </Link>
                </div>
                <div className="grid gap-4">
                    <Link href='/'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={medidron}
                            alt="gallery-photo"
                        />
                    </Link>
                    <Link href='/'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={rotor32}
                            alt="gallery-photo"
                        />
                    </Link>
                    <Link href='/'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center "
                            src={ArduinoD}
                            alt="gallery-photo"
                        />
                    </Link>
                </div>
                <div className="grid gap-4">
                    <Link href='/'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={rotor32}
                            alt="gallery-photo"
                        />
                        
                    </Link>
                    <Link href='/'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center "
                            src={hydroponic}
                            alt="gallery-photo"
                        />
                    </Link>
                    <Link href='/'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={flaghosting}
                            alt="gallery-photo"
                        />
                    </Link>
                </div>
                <div className="grid gap-4">
                    <Link href='/'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={fusion360}
                            alt="gallery-photo"
                        />
                    </Link>
                    <Link href='/'>
                        <Image
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={fusion360Text}
                            alt="gallery-photo"
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Patents;
