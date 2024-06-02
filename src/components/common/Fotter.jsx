import Logo from "../Menu/Logo";
import SocialReference from "../menu/SocialReference";
import Navigation from "@/components/menu/Navigation";

const Footer = () => {

    return (

        <footer className="bg-black">

            <div className="px-40 py-10 flex flex-col gap-6 bg-black">

                <div className="flex justify-between items-center">
                    <Logo/>
                    <SocialReference/>
                </div>

                <div className="flex justify-between items-center">
                    <Navigation/>

                    <div className="order-4">
                        <div className="font-semibold text-gray-500"><span>&copy;</span> 2021 Loopstudios. All rights
                            reserved.
                        </div>
                    </div>
                </div>

            </div>

        </footer>

    )
};

export default Footer;
