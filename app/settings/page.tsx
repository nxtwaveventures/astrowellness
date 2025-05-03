'use client';

import { ThemeToggle } from '../components/ThemeToggle';
import { FontSizeSelector } from '../components/FontSizeSelector';

export default function SettingsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            <div className="space-y-8">
                <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Appearance</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700 dark:text-gray-300">Theme</span>
                            <ThemeToggle />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700 dark:text-gray-300">Font Size</span>
                            <FontSizeSelector />
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Account</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700 dark:text-gray-300">Email Notifications</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
} 