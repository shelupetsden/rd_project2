import {useContext} from "react";
import {Context} from "@/context/AppContext";
import Link from "next/link";
import {CustomImage} from "@/components/CustomImage";

const CreationsSection = () => {
    const {creationList} = useContext(Context);

    return (
        <section className="w-full mb-40 lg:px-40 flex flex-col gap-12 justify-between">
            <div className="flex justify-between">
                <h2 className="text-5xl uppercase font-thin">our creations</h2>
                <Link
                    href={'/products'}
                    className="px-9 py-3 leading-none uppercase text-lg border-2 border-gray-800 border-opacity-60 hover:text-white hover:bg-gray-900 hover:border-black transition-all">
                    See all
                </Link>
            </div>

            <div className="flex justify-between flex-wrap">
                {creationList.map((picture) => (
                    <CustomImage picture={picture}/>
                ))}
            </div>
        </section>
    )
}

export default CreationsSection;