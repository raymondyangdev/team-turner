import Link from 'next/link';

export default function NavItems() {
    const navbarLinks = [
        {
            label: 'Our Team',
            route: '/our-team',
        },
        {
            label: 'Our Sales',
            route: '/our-sales',
        },
        {
            label: 'Our Listings',
            route: '/our-listings',
        },
        {
            label: 'Contact',
            route: '/contact',
        },
    ];
    return (
        <div className="flex flex-col md:flex-row">
            {navbarLinks.map((link) => (
                <Link
                    key={link.route}
                    href={link.route}
                    className="text-rw-black px-3 text-xl hover:underline hover:underline-offset-8 hover:decoration-rw-grey hover:text-rw-lite-grey"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
