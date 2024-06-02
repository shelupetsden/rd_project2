import Image from "next/image";
import HeroSectionText from "@/components/sections/hero/HeroSectionText";
import { useState } from "react";

const HeroSection = ({ context }) => {
    const [isHover, setHover] = useState(false);

    return (
        <section className="relative h-[900px] w-full z-5">
            <Image
                src={context.desktopImage}
                alt={"Hero Image"}
                layout="fill"
                loading="lazy"
                objectFit="cover"
                sizes="(max-width: 1023px) 100vw, (min-width: 1024px) 100vw"
                srcSet={`${context.mobileImage} 768w, ${context.desktopImage} 1024w`}
            />
            <div className={`absolute inset-0 bg-black opacity-0 transition-all duration-500 ${isHover && 'opacity-50'}`}></div>
            <HeroSectionText context={context} setHover={setHover} />
        </section>
    );
}

export default HeroSection;