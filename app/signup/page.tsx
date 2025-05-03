"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        location: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate required field
        if (!formData.dateOfBirth) {
            alert('Please enter your date of birth');
            setIsLoading(false);
            return;
        }

        try {
            // Here you would typically make an API call to save the user data
            // For now, we'll simulate a delay and redirect
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Store user data in localStorage for demo purposes
            localStorage.setItem('userProfile', JSON.stringify(formData));

            // Redirect to dashboard
            router.push('/dashboard');
        } catch (error) {
            console.error('Signup error:', error);
            alert('There was an error during signup. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-forest-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-forest-900">Create Your Account</h2>
                    <p className="mt-2 text-sm text-forest-600">
                        Begin your spiritual journey with AstroWellness
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-forest-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            className="mt-1 block w-full rounded-md border border-sage-200 px-3 py-2 shadow-sm focus:border-forest-500 focus:outline-none focus:ring-1 focus:ring-forest-500 bg-forest-50"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-forest-700">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            id="dateOfBirth"
                            required
                            className="mt-1 block w-full rounded-md border border-sage-200 px-3 py-2 shadow-sm focus:border-forest-500 focus:outline-none focus:ring-1 focus:ring-forest-500 bg-forest-50"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-forest-700">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="City, Country"
                            className="mt-1 block w-full rounded-md border border-sage-200 px-3 py-2 shadow-sm focus:border-forest-500 focus:outline-none focus:ring-1 focus:ring-forest-500 bg-forest-50"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-forest-600 hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500 transition-colors ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? 'Creating your journey...' : 'Begin Your Journey'}
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-forest-600">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-forest-600 hover:text-forest-700">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
} 