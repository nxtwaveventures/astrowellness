import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: '#7C3AED', // A modern purple for cosmic branding
};

export const themeColor = '#4F7942';

export const metadata: Metadata = {
    title: 'Twintap – Connect by the stars',
    description: 'Twintap: Connect by the stars—friends, flames, and more. Astrology-based dating and friendship for Gen Z.',
    keywords: 'astrology, dating, friendship, Gen Z, cosmic, match, twin flame, social',
    authors: [{ name: 'Twintap Team' }],
    creator: 'Twintap',
    publisher: 'Twintap',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://twintap.com'),
    openGraph: {
        title: 'Twintap – Connect by the stars',
        description: 'Find your cosmic match or bestie, guided by the stars.',
        url: 'https://twintap.com',
        siteName: 'Twintap',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Twintap',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Twintap – Connect by the stars',
        description: 'Find your cosmic match or bestie, guided by the stars.',
        images: ['/twitter-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    verification: {
        google: 'google-site-verification-code',
    },
}; 