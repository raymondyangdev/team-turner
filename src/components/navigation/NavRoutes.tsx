interface Route {
    label: string;
    route: string;
}

const navbarContactRoutes: Route[] = [
    { label: 'Contact us', route: '/contact/' },
];
const footerContactRoutes: Route[] = [
    { label: 'Get in touch', route: '/contact/' },
];
const aboutRoutes: Route[] = [
    { label: 'Our team', route: '/our-team' },
    { label: 'Our testimonials', route: '/testimonials' },
];
const buySellRoutes: Route[] = [
    { label: 'Our listings', route: '/our-listings' },
    { label: 'Our sales', route: '/our-sales' },
];

export { navbarContactRoutes, footerContactRoutes, aboutRoutes, buySellRoutes };
