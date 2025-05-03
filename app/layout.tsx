// 'use client';

import "./styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { PersonalizationProvider } from './context/PersonalizationContext';
import Navigation from './components/Navigation';
import { metadata } from './metadata';
import Providers from './providers';
import ThemeClientProvider from './components/ThemeClientProvider';

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export { metadata };

function RootLayoutContent({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} font-sans bg-gradient-to-b from-forest-50 to-forest-100 min-h-screen`}>
            <body className="min-h-screen bg-gradient-to-b from-forest-50 to-forest-100">
                <Providers>
                    <PersonalizationProvider>
                        <ThemeClientProvider>
                            <Navigation />
                            <main className="container mx-auto px-4 py-8">
                                {children}
                            </main>
                            <footer className="bg-white/80 backdrop-blur-sm shadow-lg mt-20">
                                <div className="container mx-auto px-4 py-12">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                        <div>
                                            <h3 className="text-lg font-playfair text-forest-900 mb-4">About</h3>
                                            <ul className="space-y-2">
                                                <li><a href="/about" className="text-forest-600 hover:text-forest-800">Our Story</a></li>
                                                <li><a href="/team" className="text-forest-600 hover:text-forest-800">Team</a></li>
                                                <li><a href="/careers" className="text-forest-600 hover:text-forest-800">Careers</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-playfair text-forest-900 mb-4">Features</h3>
                                            <ul className="space-y-2">
                                                <li><a href="/features" className="text-forest-600 hover:text-forest-800">Astrology</a></li>
                                                <li><a href="/features" className="text-forest-600 hover:text-forest-800">Meditation</a></li>
                                                <li><a href="/features" className="text-forest-600 hover:text-forest-800">Community</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-playfair text-forest-900 mb-4">Support</h3>
                                            <ul className="space-y-2">
                                                <li><a href="/help" className="text-forest-600 hover:text-forest-800">Help Center</a></li>
                                                <li><a href="/contact" className="text-forest-600 hover:text-forest-800">Contact Us</a></li>
                                                <li><a href="/faq" className="text-forest-600 hover:text-forest-800">FAQ</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-playfair text-forest-900 mb-4">Legal</h3>
                                            <ul className="space-y-2">
                                                <li><a href="/privacy" className="text-forest-600 hover:text-forest-800">Privacy Policy</a></li>
                                                <li><a href="/terms" className="text-forest-600 hover:text-forest-800">Terms of Service</a></li>
                                                <li><a href="/cookies" className="text-forest-600 hover:text-forest-800">Cookie Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-12 pt-8 border-t border-forest-200 text-center text-forest-600">
                                        <p>&copy; {new Date().getFullYear()} AstroWellness. All rights reserved.</p>
                                    </div>
                                </div>
                            </footer>
                        </ThemeClientProvider>
                    </PersonalizationProvider>
                </Providers>
            </body>
        </html>
    );
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <RootLayoutContent>{children}</RootLayoutContent>;
}
