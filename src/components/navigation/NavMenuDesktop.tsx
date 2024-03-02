import Link from 'next/link';
import { NavRoutes as routes } from './NavRoutes';

export default function NavMenuDesktop() {
    return (
        <div className="hidden md:flex md:gap-4">
            {routes.map((link) => (
                <Link
                    key={link.route}
                    href={link.route}
                    className="text-rw-black text-xl hover:underline hover:underline-offset-8 hover:decoration-rw-grey hover:text-rw-lite-grey"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
