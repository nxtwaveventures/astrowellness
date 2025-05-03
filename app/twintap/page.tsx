"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Head from 'next/head';

const fetchProfiles = async (count = 5) => {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await res.json();
    return data.results.map((user: any) => ({
        name: `${user.name.first} ${user.name.last}`,
        image: user.picture.large,
        tagline: "Astro match awaits!",
    }));
};

export default function Twintap() {
    const [profiles, setProfiles] = useState<any[]>([]);
    const [cardIndex, setCardIndex] = useState(0);

    useEffect(() => {
        fetchProfiles(6).then(setProfiles);
    }, []);

    const nextCard = () => setCardIndex((i) => Math.min(i + 1, profiles.length - 1));
    const prevCard = () => setCardIndex((i) => Math.max(i - 1, 0));

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-100 to-white">
            <Head>
                <title>Twintap – Connect by the stars</title>
                <meta name="description" content="Twintap: Connect by the stars—friends, flames, and more. Astrology-based dating and friendship for Gen Z." />
            </Head>
            <h1 className="text-4xl font-bold mb-4 text-center font-playfair">Twintap</h1>
            <p className="mb-8 text-lg text-forest-700 text-center">Swipe the cards for your daily cosmic experience!</p>
            <div className="w-full max-w-xs flex flex-col items-center relative min-h-[420px]">
                {profiles[cardIndex] ? (
                    <div className="bg-white rounded-2xl shadow-xl p-0 flex flex-col items-center text-center w-80 h-96 overflow-hidden border border-gray-200">
                        <img
                            src={profiles[cardIndex].image}
                            alt={profiles[cardIndex].name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="flex-1 flex flex-col justify-center p-4">
                            <h2 className="text-xl font-bold mb-1">{profiles[cardIndex].name}</h2>
                            <p className="text-gray-500 text-sm">{profiles[cardIndex].tagline}</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-96">
                        <p className="text-gray-500">No more profiles. Check back soon!</p>
                    </div>
                )}
                <div className="flex justify-between w-full mt-4">
                    <button
                        onClick={prevCard}
                        disabled={cardIndex === 0}
                        className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 disabled:opacity-50"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextCard}
                        disabled={cardIndex === profiles.length - 1}
                        className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 disabled:opacity-50"
                    >
                        →
                    </button>
                </div>
            </div>
            <p className="mt-8 text-base text-gray-600">Click arrows to browse profiles.</p>
            <div className="flex flex-col gap-4 mt-8">
                <Link
                    href="/onboarding"
                    className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:from-purple-700 hover:via-pink-600 hover:to-yellow-500 transition-colors border-2 border-transparent hover:border-purple-700"
                    aria-label="Start Your Cosmic Connection"
                >
                    Start Your Cosmic Connection
                </Link>
                <Link
                    href="/login"
                    className="inline-block border-2 border-purple-400 text-purple-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors"
                    aria-label="Log In to Twintap"
                >
                    Log In
                </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
                Safe, inclusive, and fun. <span className="text-pink-500">#CosmicConnections</span>
            </p>
        </div>
    );
} 