import Image from "next/image";
import Link from "next/link";
import {useContext} from "react";
import {Context} from "@/context/AppContext";

const SocialReference = () => {
    const {socialsList} = useContext(Context);
    return (
        <ul className="flex items-center gap-5">
            {socialsList.map((item) => (
                <li key={item.link}>
                    <Link
                        className="relative"
                        href={item.link}>
                        <Image
                            src={item.icon}
                            width={20}
                            height={20}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialReference;