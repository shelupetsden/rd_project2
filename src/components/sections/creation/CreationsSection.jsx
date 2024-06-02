import Image from "next/image";
import {useContext} from "react";
import {Context} from "@/context/AppContext";
import Link from "next/link";

const CreationsSection = () => {
    const {creationList} = useContext(Context);

    return (
        <section className="relative w-full px-40 mb-40 flex flex-col gap-12 justify-between">
            <div className="flex items-center justify-between">
                <h2 className="text-5xl uppercase font-thin">our creations</h2>
                <Link
                    href={'/products'}
                    className="order-3 w-1/2 text-center md:order-2 md:self-center md:w-fit md:h-fit px-7 py-2 leading-none tracking-widest uppercase text-lg border-2 border-gray-800 border-opacity-60 hover:text-white hover:bg-gray-900 hover:border-black transition-colors">
                    See all
                </Link>
            </div>

            <div className="flex justify-between flex-wrap">
                {creationList.map((picture) => (
                    <div key={picture.title} className="w-full lg:w-1/4 p-4">
                        <figure
                            className="relative w-full overflow-hidden h-[700px] group hover:cursor-pointer">
                            <Image src={picture.desktopImage} alt=""
                                   fill
                                   className="group-hover:opacity-30 group-hover:scale-110 transition"
                            />
                            <figcaption
                                className="absolute bottom-10 left-10 text-white text-3xl font-thin text-wrap break-words text-left group-hover:text-violet-900 transition">
                                {picture.title}
                            </figcaption>
                        </figure>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CreationsSection;