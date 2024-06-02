import Image from "next/image";
import InteractiveSectionText from "@/components/sections/Interactive/InteractiveSectionText";
import {useState} from "react";

const InteractiveSection = ({context}) => {
    const [isHover, setHover] = useState(false)
    return (<section className="relative w-full">
            <div className="flex items-center justify-center">
                <div className="top-0 pt-32">
                    <Image src={context.desktopImage} alt=""
                           width={1300}
                           height={800}
                           style={{
                               objectFit: 'cover',
                           }}
                           className={`w-full h-[600px] lg:w-auto transition-opacity duration-500 ${isHover && 'opacity-50'}`}
                    />
                    <InteractiveSectionText context={context} setHover={setHover}/>
                </div>
            </div>
        </section>
    )
}

export default InteractiveSection;