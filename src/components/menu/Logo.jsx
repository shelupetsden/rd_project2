import Image from "next/image";

const Logo = () => {
    return (<a href="#" className="py-6">
        <Image
            src="/images/logo.svg"
            loading="lazy"
            width={240}
            height={140}
            alt="logo"
        />
    </a>)
}

export default Logo;