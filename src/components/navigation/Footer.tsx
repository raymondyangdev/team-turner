import Link from 'next/link';
import { contactRoutes, aboutRoutes, buySellRoutes } from './NavRoutes';
import FooterHeading from './FooterHeading';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="bg-rw-off-white flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4">
                <div className="flex flex-col gap-4 items-center mx-2">
                    <img
                        className="max-w-32"
                        src="./assets/images/navigation/rw-logo.png"
                        alt="Ray White Logo"
                    />
                    <div className="flex gap-4 items-center mb-4">
                        <Link href={'https://www.facebook.com/TeamTurnerRW/'}>
                            <img
                                className="max-w-8"
                                src="./assets/images/navigation/facebook-icon.svg"
                                alt="Facebook Icon"
                            />
                        </Link>
                        <Link
                            href={
                                'https://www.trademe.co.nz/a/property/agent/Dylan-Turner-3'
                            }
                        >
                            <img
                                className="max-w-8"
                                src="./assets/images/navigation/trademe-icon.svg"
                                alt="TradeMe Icon"
                            />
                        </Link>
                        <Link
                            href={
                                'https://www.ratemyagent.co.nz/real-estate-agent/dylan-turner-ac827/sales/reviews'
                            }
                        >
                            <img
                                className="max-w-24"
                                src="./assets/images/navigation/ratemyagent-icon.svg"
                                alt="RateMyAgent Icon"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between flex-1 md:flex-none md:basis-2/3 xl:container">
                    <FooterHeading title="Contact us" routes={contactRoutes} />
                    <FooterHeading title="About us" routes={aboutRoutes} />
                    <FooterHeading
                        title="Buy & Sell with us"
                        routes={buySellRoutes}
                    />
                </div>
            </div>
            <div className="bg-rw-grey flex py-2 justify-center text-center items-center text-rw-white">
                © {currentYear} Team Turner - Ray White Orewa | Ray White (Real
                Estate) Limited Licensed (REAA 2008).
            </div>
        </footer>
    );
}
