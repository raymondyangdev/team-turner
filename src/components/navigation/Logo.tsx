import Link from 'next/link';

export default function Logo() {
    return (
        <div className="max-w-64">
            <Link href="./">
                <img
                    src="./assets/images/navigation/team-turner-logo.jpg"
                    alt="Team Turner Real Estate Logo"
                />
            </Link>
        </div>
    );
}
