import Link from 'next/link';

export default function Logo() {
    return (
        <div className="max-w-64 mx-2 md:mx-0">
            <Link href="./">
                <img
                    src="./assets/team-turner-logo.jpg"
                    alt="Team Turner Real Estate Logo"
                />
            </Link>
        </div>
    );
}
