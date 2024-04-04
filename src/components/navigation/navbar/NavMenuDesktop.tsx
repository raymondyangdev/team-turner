import Link from 'next/link';
import { navbarContactRoutes, aboutRoutes, buySellRoutes } from '../NavRoutes';

export default function NavMenuDesktop() {
    const routes = [...navbarContactRoutes, ...aboutRoutes, ...buySellRoutes];

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
