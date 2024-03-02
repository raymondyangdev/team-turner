import Logo from './Logo';
import NavItems from './NavItems';

export default function Navbar() {
    return (
        <header className="bg-rw-yellow sticky top-0 z-202 py-6">
            <nav className="flex md:flex-rowq container flex-wrap justify-between items-center">
                <Logo />
                <NavItems />
            </nav>
        </header>
    );
}
