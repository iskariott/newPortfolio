import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import { BodyClassProvider } from '@/services/BodyClassProvider';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Portfolio',
    description: 'Simple portfolio website',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <BodyClassProvider />
                {children}
            </body>
        </html>
    );
}
