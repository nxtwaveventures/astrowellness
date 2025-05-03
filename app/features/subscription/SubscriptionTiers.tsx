'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TierFeature {
    name: string;
    included: boolean;
}

interface SubscriptionTier {
    name: string;
    price: number;
    description: string;
    features: TierFeature[];
    popular?: boolean;
}

const tiers: SubscriptionTier[] = [
    {
        name: 'Free',
        price: 0,
        description: 'Start your cosmic journey',
        features: [
            { name: 'Basic daily horoscope', included: true },
            { name: 'Community access', included: true },
            { name: 'Limited cosmic insights', included: true },
            { name: 'Basic meditation guides', included: true },
            { name: 'Ad-supported experience', included: true },
            { name: 'Advanced calculations', included: false },
            { name: 'One-on-one consultations', included: false },
            { name: 'Custom rituals', included: false },
        ],
    },
    {
        name: 'Premium',
        price: 9.99,
        description: 'Deepen your spiritual practice',
        features: [
            { name: 'Everything in Free', included: true },
            { name: 'Detailed personalized readings', included: true },
            { name: 'Advanced astrological calculations', included: true },
            { name: 'Exclusive community features', included: true },
            { name: 'Ad-free experience', included: true },
            { name: 'Priority support', included: true },
            { name: 'One-on-one consultations', included: false },
            { name: 'Custom rituals', included: false },
        ],
        popular: true,
    },
    {
        name: 'Master',
        price: 29.99,
        description: 'Transform your spiritual journey',
        features: [
            { name: 'Everything in Premium', included: true },
            { name: 'One-on-one consultations', included: true },
            { name: 'Custom ritual creation', included: true },
            { name: 'Priority access to live sessions', included: true },
            { name: 'Exclusive content and workshops', included: true },
            { name: 'Personalized guidance', included: true },
            { name: 'Early access to new features', included: true },
            { name: 'VIP community events', included: true },
        ],
    },
];

export default function SubscriptionTiers() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-forest-50 to-forest-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-forest-900 sm:text-4xl">
                        Choose Your Cosmic Path
                    </h2>
                    <p className="mt-4 text-xl text-forest-600">
                        Select the perfect plan for your spiritual journey
                    </p>
                </div>

                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
                    {tiers.map((tier) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`rounded-lg shadow-lg divide-y divide-forest-200 ${tier.popular ? 'border-2 border-forest-500' : 'border border-forest-200'
                                }`}
                        >
                            <div className="p-6">
                                {tier.popular && (
                                    <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-forest-100 text-forest-600">
                                        Most Popular
                                    </span>
                                )}
                                <h3 className="mt-4 text-2xl font-semibold text-forest-900">
                                    {tier.name}
                                </h3>
                                <p className="mt-1 text-sm text-forest-500">{tier.description}</p>
                                <p className="mt-8">
                                    <span className="text-4xl font-extrabold text-forest-900">
                                        ${tier.price}
                                    </span>
                                    <span className="text-base font-medium text-forest-500">
                                        /month
                                    </span>
                                </p>
                                <button
                                    className={`mt-8 block w-full bg-forest-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-forest-700`}
                                >
                                    Get Started
                                </button>
                            </div>
                            <div className="pt-6 pb-8 px-6">
                                <h4 className="text-sm font-medium text-forest-900 tracking-wide uppercase">
                                    What's included
                                </h4>
                                <ul className="mt-6 space-y-4">
                                    {tier.features.map((feature) => (
                                        <li key={feature.name} className="flex space-x-3">
                                            <span
                                                className={`flex-shrink-0 h-5 w-5 ${feature.included
                                                        ? 'text-forest-500'
                                                        : 'text-forest-300'
                                                    }`}
                                            >
                                                {feature.included ? '✓' : '×'}
                                            </span>
                                            <span
                                                className={`text-sm ${feature.included
                                                        ? 'text-forest-500'
                                                        : 'text-forest-400'
                                                    }`}
                                            >
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
} 