import Image from "next/image";

const Logo = () => {
    return (<a href="#" className="p-6">
        <Image
            src="/images/logo.svg"
            width={240}
            height={140}
            alt="logo"
            priority="high"
        />
    </a>)
}

export default Logo;