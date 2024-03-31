import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Component imports
import Navbar from "@/components/navigation/Navbar";
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';

export const metadata: Metadata = {
    title: 'Team Turner | Ray White Orewa',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <Hero />
                <main className="flex-1 container">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
