import Link from 'next/link';

interface IRoute {
    label: string;
    route: string;
}

interface IFooterHeadingProps {
    title: string;
    routes: IRoute[];
}

export default function FooterHeading(props: IFooterHeadingProps) {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">{props.title}</h2>
            <nav>
                {props.routes.map((link, index) => (
                    <div key={index} className="py-2">
                        <Link
                            className="text-md hover:text-rw-lite-grey underline underline-offset-2"
                            href={link.route}
                        >
                            {link.label}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
}
