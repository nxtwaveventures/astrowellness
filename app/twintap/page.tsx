"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Head from 'next/head';

interface Profile {
    picture: { large: string };
    name: { first: string; last: string };
    email: string;
}

export default function Twintap() {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchProfiles = async () => {
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();
            setProfiles(data.results);
        };
        fetchProfiles();
    }, []);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-300 via-pink-100 via-yellow-100 to-orange-200 relative">
            <Head>
                <title>Twintap – Connect by the stars</title>
                <meta name="description" content="Twintap: Connect by the stars—friends, flames, and more. Astrology-based dating and friendship for Gen Z." />
            </Head>
            {/* Hero Section */}
            <section className="relative py-32 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/70 via-pink-100/50 via-yellow-100/50 to-orange-200/60 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-[url('/images/peaceful-pattern.png')] opacity-5"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-6xl font-playfair text-forest-900 mb-8 leading-tight">
                        Twintap
                    </h1>
                    <p className="text-2xl text-forest-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Connect by the stars—friends, flames, and more.
                    </p>
                    <p className="text-lg text-forest-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Twintap is a modern, astrology-powered dating and friendship platform for Gen Z. Find your cosmic match or bestie, guided by the stars.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-forest-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-forest-700 transition-all transform hover:scale-105 shadow-lg">
                            Begin Your Journey
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-sky-300/40 via-pink-100/40 via-yellow-100/40 to-orange-200/40">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-playfair text-forest-800 mb-4 text-center">Features</h2>
                    <ul className="text-lg text-forest-700 mb-16 text-center list-disc list-inside">
                        <li>Astrology-based onboarding and matching</li>
                        <li>Profiles with birth chart and interests</li>
                        <li>Swipe/match for friends or romance</li>
                        <li>In-app chat with cosmic icebreakers</li>
                        <li>Viral social sharing</li>
                        <li>Freemium model with premium features</li>
                        <li>Built with Next.js, PostgreSQL, Prisma, tRPC, and more.</li>
                    </ul>
                </div>
            </section>

            {/* Card Carousel Section */}
            <section className="py-20 px-4 relative">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl font-playfair text-forest-800 mb-16 text-center">Find Your Cosmic Match</h2>
                    <div className="flex justify-center items-center gap-4">
                        <button onClick={prevCard} className="bg-forest-600 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-forest-700 transition-all">
                            ←
                        </button>
                        {profiles.length > 0 && (
                            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                <img src={profiles[currentIndex].picture.large} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
                                <h3 className="text-2xl font-playfair text-forest-800 mb-4 text-center">{profiles[currentIndex].name.first} {profiles[currentIndex].name.last}</h3>
                                <p className="text-forest-600 text-lg leading-relaxed text-center">
                                    {profiles[currentIndex].email}
                                </p>
                            </div>
                        )}
                        <button onClick={nextCard} className="bg-forest-600 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-forest-700 transition-all">
                            →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
} 