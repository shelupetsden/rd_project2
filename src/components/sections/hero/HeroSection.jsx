import Image from "next/image";
import HeroSectionText from "@/components/sections/hero/HeroSectionText";
import {useState} from "react";

const HeroSection = ({context}) => {
    const [isHover, setHover] = useState()
    return (<section className="relative h-full w-full z-5">
            <Image src={context.desktopImage} alt=""
                   width={1400}
                   height={800}
                   style={{
                       objectFit: 'cover',
                   }}
                   className={`w-full h-[900px]`}
            />
            <div
                className={`absolute inset-0 bg-black opacity-0 transition-all duration-500 ${isHover && 'opacity-50'}`}></div>
            <HeroSectionText context={context} setHover={setHover}/>
        </section>
    )
}

export default HeroSection;