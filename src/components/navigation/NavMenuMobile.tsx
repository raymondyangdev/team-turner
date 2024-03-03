import { useRef, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';
import { NavRoutes as routes } from './NavRoutes';

export default function NavMenuMobile() {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));

    return (
        <div ref={ref} className="md:hidden">
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
            {isOpen && (
                <div className="fixed left-0 shadow-4xl right-0 px-2 pt-2 pb-6 bg-rw-yellow text-rw-black text-xl">
                    <ul className="flex flex-col gap-4">
                        {routes.map((route) => {
                            return (
                                <li key={route.label}>
                                    <a
                                        onClick={() => setOpen((prev) => !prev)}
                                        className={
                                            'flex items-center justify-between rounded-xl container'
                                        }
                                        href={route.route}
                                    >
                                        <span className="mx-2 hover:underline hover:underline-offset-8 hover:decoration-rw-grey hover:text-rw-lite-grey">
                                            {route.label}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
