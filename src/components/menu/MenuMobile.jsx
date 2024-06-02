import {Popover, PopoverButton, PopoverPanel, Transition} from "@headlessui/react";
import Image from "next/image";
import {useCallback, useState} from "react";
import openMenu from '/public/images/icon-hamburger.svg';
import closeMenu from '/public/images/icon-close.svg';
import Navigation from "@/components/menu/Navigation";

const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleClick = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }, []);

    return (
        <Popover as="div" className="relative">
            <PopoverButton className="z-10 w-8 h-8 relative" onClick={handleToggleClick}>
                <Image alt="Menu Toggle Icon" width={32} height={32} src={isOpen ? closeMenu : openMenu}/>
            </PopoverButton>

            <Transition
                as="div"
                show={isOpen}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {isOpen && (
                    <PopoverPanel>
                        <div className="absolute py-10 flex justify-center">
                            <Navigation/>
                        </div>
                    </PopoverPanel>
                )}
            </Transition>
        </Popover>
    );
};

export default MenuMobile;