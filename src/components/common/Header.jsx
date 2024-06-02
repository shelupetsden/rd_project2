import React from "react";
import MenuMobile from "@/components/menu/MenuMobile";
import Logo from "@/components/menu/Logo";
import Navigation from "@/components/menu/Navigation";

const Header = () => {
    return (
        <header className="absolute inset-x-0 top-20 z-50 px-40 w-full">
            <nav className="flex items-center">
                {/* Desktop view */}
                <div className="hidden lg:flex items-center justify-between w-full">
                    <Logo />
                    <Navigation />
                </div>

                {/* Mobile view */}
                <div className="lg:hidden flex justify-between items-center w-full">
                    <Logo />
                    <MenuMobile />
                </div>
            </nav>
        </header>
    );
};

export default Header;