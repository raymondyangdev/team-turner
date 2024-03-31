'use client';

import Logo from './Logo';
import NavMenuDesktop from './NavMenuDesktop';
import NavMenuMobile from './NavMenuMobile';

export default function Navbar() {
    return (
        <header className="bg-rw-yellow sticky top-0 z-202 py-6 md:py-8 px-4">
            <nav className="flex md:flex-row container flex-wrap justify-between items-center">
                <Logo />
                <NavMenuDesktop />
                <NavMenuMobile />
            </nav>
        </header>
    );
}
