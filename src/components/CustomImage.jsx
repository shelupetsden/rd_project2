import React from "react";
import Image from "next/image";

export const CustomImage = ({ picture }) => {
    return (
        <div key={picture.title} className="w-full lg:w-1/4 p-4">
            <figure className="relative overflow-hidden h-[300px] lg:h-[600px] group hover:cursor-pointer">
                <Image
                    alt={picture.title}
                    fill
                    className="group-hover:opacity-30 group-hover:scale-110 transition"
                    style={{ objectFit: 'cover' }}
                    src={picture.desktopImage}
                    sizes="(max-width: 1023px) 100vw, (min-width: 1024px) 100vw"
                    srcSet={`${picture.mobileImage} 1023w, ${picture.desktopImage} 1024w`}
                />
                <figcaption className="absolute bottom-10 left-10 text-white text-3xl font-thin break-words text-left group-hover:text-violet-900 transition">
                    {picture.title}
                </figcaption>
            </figure>
        </div>
    );
};