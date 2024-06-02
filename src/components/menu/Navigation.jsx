import Link from "next/link";
import {useContext} from "react";
import {Context} from "@/context/AppContext";

const Navigation = () => {
    const {navigationList} = useContext(Context);

    return (
        <nav>
            <ul className="flex flex-col lg:flex-row gap-5 lg:gap-5  text-white">
                {navigationList.map(({name, url}) => (
                    <li key={name} className="relative flex flex-col items-start">
                        <Link href={url}
                              className="text-lg after:block after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-white after:transition-width after:duration-300 after:ease-in-out after:w-0 hover:after:w-full">
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;