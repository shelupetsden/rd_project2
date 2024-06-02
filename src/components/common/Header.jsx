import React from "react";
import Logo from "@/components/menu/Logo";
import Navigation from "@/components/menu/Navigation";

const Header = () => {
    return (
        <header className="absolute inset-x-0 top-20 z-50 px-40">
            <nav className="flex justify-between items-center">
                <div className="flex flex-1 justify-between">
                    <Logo/>
                    <Navigation/>
                </div>
            </nav>
        </header>
    )
}
export default Header;
