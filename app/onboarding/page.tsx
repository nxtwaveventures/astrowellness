'use client';

import React, { useState } from 'react';

const interestsList = [
    'Music', 'Art', 'Travel', 'Fitness', 'Spirituality', 'Tech', 'Gaming', 'Food', 'Fashion', 'Books', 'Movies', 'Astrology', 'Nature', 'Sports', 'Photography',
];

export default function OnboardingPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        dateOfBirth: '',
        birthTime: '',
        birthLocation: '',
        pronouns: '',
        bio: '',
        interests: [] as string[],
        avatar: null as File | null,
    });
    const [step, setStep] = useState(1);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleInterests = (interest: string) => {
        setForm((prev) => {
            const exists = prev.interests.includes(interest);
            return {
                ...prev,
                interests: exists
                    ? prev.interests.filter((i) => i !== interest)
                    : [...prev.interests, interest],
            };
        });
    };

    const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setForm((prev) => ({ ...prev, avatar: e.target.files![0] }));
        }
    };

    const handleNext = () => setStep((s) => s + 1);
    const handleBack = () => setStep((s) => s - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // TODO: Send data to backend (tRPC or API route)
        setTimeout(() => {
            setSubmitting(false);
            alert('Profile created!');
        }, 1200);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100">
            <form
                className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg space-y-6"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl font-bold text-center text-purple-700 mb-2">Welcome to Twintap</h1>
                <p className="text-center text-gray-500 mb-6">Connect by the stars—friends, flames, and more.</p>

                {step === 1 && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={form.dateOfBirth}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={handleNext}
                                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                                disabled={!form.name || !form.email || !form.dateOfBirth}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Birth Time (optional)</label>
                            <input
                                type="time"
                                name="birthTime"
                                value={form.birthTime}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Birth Location (optional)</label>
                            <input
                                type="text"
                                name="birthLocation"
                                value={form.birthLocation}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Pronouns (optional)</label>
                            <input
                                type="text"
                                name="pronouns"
                                value={form.pronouns}
                                onChange={handleChange}
                                placeholder="she/her, he/him, they/them, etc."
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Short Bio (optional)</label>
                            <textarea
                                name="bio"
                                value={form.bio}
                                onChange={handleChange}
                                maxLength={300}
                                rows={3}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                                placeholder="Tell us about yourself!"
                            />
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Interests</label>
                            <div className="flex flex-wrap gap-2">
                                {interestsList.map((interest) => (
                                    <button
                                        type="button"
                                        key={interest}
                                        className={`px-3 py-1 rounded-full border ${form.interests.includes(interest) ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-gray-700 border-gray-300'} transition`}
                                        onClick={() => handleInterests(interest)}
                                    >
                                        {interest}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Avatar (optional)</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleAvatar}
                                className="mt-1 block w-full text-sm text-gray-500"
                            />
                            {form.avatar && (
                                <div className="mt-2">
                                    <span className="text-xs text-gray-500">Selected: {form.avatar.name}</span>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                                disabled={submitting}
                            >
                                {submitting ? 'Creating...' : 'Finish'}
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
} 