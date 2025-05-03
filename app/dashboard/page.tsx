'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateAstroData, AstroData } from '../utils/astroCalculations';
import { usePersonalization } from '../context/PersonalizationContext';

interface UserProfile {
    name: string;
    dateOfBirth: string;
    zodiacSign: string;
    elementalEnergy: string;
    subscriptionTier: 'free' | 'premium' | 'master';
}

export default function Dashboard() {
    const router = useRouter();
    const { userProfile, setUserProfile } = usePersonalization();
    const [astroData, setAstroData] = useState<AstroData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedProfile = localStorage.getItem('userProfile');
        if (!storedProfile) {
            router.push('/signup');
            return;
        }

        const profile = JSON.parse(storedProfile);
        if (!userProfile) {
            setUserProfile(profile);
        }

        const data = generateAstroData(profile.dateOfBirth);
        setAstroData(data);
        setIsLoading(false);

        // Update astrological data every hour for real-time elements
        const interval = setInterval(() => {
            const updatedData = generateAstroData(profile.dateOfBirth);
            setAstroData(updatedData);
        }, 3600000);

        return () => clearInterval(interval);
    }, [router, setUserProfile, userProfile]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-forest-50 to-forest-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-forest-500 mx-auto"></div>
                    <p className="mt-4 text-forest-700 font-medium">Aligning your cosmic energies...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-forest-50 to-forest-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Welcome Section with Weekly Focus */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-playfair text-forest-900 mb-4">
                        Welcome to Your Cosmic Journey, {userProfile?.name}
                    </h1>
                    <p className="text-xl text-forest-600 mb-6">
                        Your Weekly Focus: {astroData?.weeklyFocus}
                    </p>
                    <div className="inline-block bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <p className="text-forest-700">
                            Today's Cosmic Tip: {astroData?.dailyTip}
                        </p>
                    </div>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Cosmic Profile Card */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-playfair text-forest-800 mb-4">Cosmic Profile</h2>
                        <div className="space-y-3">
                            <p className="text-forest-600">
                                <span className="font-medium">Zodiac Sign:</span> {astroData?.zodiacSign}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Elemental Energy:</span> {astroData?.elementalEnergy}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Power Gemstone:</span> {astroData?.gemstone}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Sacred Mantra:</span> {astroData?.mantra}
                            </p>
                        </div>
                    </div>

                    {/* Daily Energies Card */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-playfair text-forest-800 mb-4">Daily Energies</h2>
                        <div className="space-y-3">
                            <p className="text-forest-600">
                                <span className="font-medium">Moon Phase:</span> {astroData?.moonPhase}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Lucky Number:</span> {astroData?.luckyNumber}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Lucky Color:</span> {astroData?.luckyColor}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Favorable Time:</span> {astroData?.favorableTime}
                            </p>
                        </div>
                    </div>

                    {/* Moon Guidance Card */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-playfair text-forest-800 mb-4">Moon Guidance</h2>
                        <div className="space-y-3">
                            <p className="text-forest-600">
                                <span className="font-medium">Moon Message:</span> {astroData?.moonMessage}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Elemental Activity:</span> {astroData?.elementalActivity}
                            </p>
                        </div>
                    </div>

                    {/* Daily Practices Card */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-playfair text-forest-800 mb-4">Daily Practices</h2>
                        <div className="space-y-3">
                            <p className="text-forest-600">
                                <span className="font-medium">Daily Ritual:</span> {astroData?.dailyRitual}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Meditation Focus:</span> {astroData?.meditationFocus}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Affirmation:</span> {astroData?.affirmation}
                            </p>
                        </div>
                    </div>

                    {/* Spiritual Progress Card */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-playfair text-forest-800 mb-4">Spiritual Progress</h2>
                        <div className="space-y-3">
                            <p className="text-forest-600">
                                <span className="font-medium">Numerology Number:</span> {astroData?.numerologyNumber}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Life Path Number:</span> {astroData?.lifePathNumber}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Spiritual Lesson:</span> {astroData?.spiritualLesson}
                            </p>
                        </div>
                    </div>

                    {/* Location Energy Card */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-playfair text-forest-800 mb-4">Location Energy</h2>
                        <div className="space-y-3">
                            <p className="text-forest-600">
                                <span className="font-medium">Directional Energy:</span> {astroData?.directionalEnergy}
                            </p>
                            <p className="text-forest-600">
                                <span className="font-medium">Sacred Space:</span> {astroData?.sacredSpace}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Daily Cosmic Tip */}
                <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-playfair text-forest-800 mb-4 text-center">Today's Cosmic Tip</h2>
                    <p className="text-forest-600 text-center text-lg">
                        {astroData?.dailyTip}
                    </p>
                </div>
            </div>
        </div>
    );
} 