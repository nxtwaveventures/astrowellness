"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'crystals' | 'ritual-kits' | 'books' | 'courses';
    rating: number;
    reviews: number;
    seller: {
        name: string;
        verified: boolean;
    };
}

const categories = [
    { id: 'crystals', name: 'Crystals & Gemstones' },
    { id: 'ritual-kits', name: 'Ritual Kits' },
    { id: 'books', name: 'Spiritual Books' },
    { id: 'courses', name: 'Online Courses' },
];

const sampleProducts: Product[] = [
    {
        id: '1',
        name: 'Cosmic Crystal Set',
        description: 'Curated collection of crystals aligned with your zodiac sign',
        price: 49.99,
        image: '/images/crystal-set.jpg',
        category: 'crystals',
        rating: 4.8,
        reviews: 124,
        seller: {
            name: 'Cosmic Crystals',
            verified: true,
        },
    },
    {
        id: '2',
        name: 'Full Moon Ritual Kit',
        description: 'Complete kit for powerful full moon ceremonies',
        price: 39.99,
        image: '/images/ritual-kit.jpg',
        category: 'ritual-kits',
        rating: 4.9,
        reviews: 89,
        seller: {
            name: 'Moon Magic',
            verified: true,
        },
    },
    // Add more sample products as needed
];

export default function SpiritualMarketplace() {
    const [selectedCategory, setSelectedCategory] = useState<string>('crystals');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = sampleProducts.filter(
        (product) =>
            product.category === selectedCategory &&
            (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-forest-50 to-forest-100">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <h1 className="text-2xl font-semibold text-forest-800">Spiritual Marketplace</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Search and Filter */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="flex-1 p-2 border border-forest-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="flex gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-lg ${selectedCategory === category.id
                                        ? 'bg-forest-600 text-white'
                                        : 'bg-white text-forest-600 border border-forest-200'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-cover w-full h-48"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-forest-900">
                                        {product.name}
                                    </h3>
                                    <span className="text-lg font-bold text-forest-600">
                                        ${product.price}
                                    </span>
                                </div>
                                <p className="text-forest-600 mb-4">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-forest-600">
                                            {product.rating} ({product.reviews})
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-forest-600">{product.seller.name}</span>
                                        {product.seller.verified && (
                                            <span className="text-forest-500">✓</span>
                                        )}
                                    </div>
                                </div>
                                <button className="mt-4 w-full bg-forest-600 text-white py-2 rounded-lg hover:bg-forest-700 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
} 