'use client';

import { useState, useRef } from 'react';

export default function MuktiDham() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredPackage: 'basic'
    });

    // Add a ref for the contact form
    const contactRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Scroll to contact form
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-300 via-pink-100 via-yellow-100 to-orange-200 relative">
            {/* Sticky Contact Us Button */}
            <button
                onClick={scrollToContact}
                className="fixed bottom-6 right-6 z-50 bg-forest-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-forest-700 transition-all text-lg font-medium"
                aria-label="Contact Us"
            >
                Contact Us
            </button>

            {/* Hero Section with Peaceful Gradient */}
            <section className="relative py-32 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/70 via-pink-100/50 via-yellow-100/50 to-orange-200/60 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-[url('/images/peaceful-pattern.png')] opacity-5"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-6xl font-playfair text-forest-900 mb-8 leading-tight">
                        Mukti Dham
                    </h1>
                    <p className="text-2xl text-forest-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                        A sanctuary of peace and dignity, where life's final journey is honored with grace and spiritual care.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-forest-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-forest-700 transition-all transform hover:scale-105 shadow-lg">
                            Begin Your Journey
                        </button>
                        <button className="bg-white/80 backdrop-blur-sm text-forest-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-white transition-all transform hover:scale-105 shadow-lg">
                            Learn More
                        </button>
                    </div>
                </div>
                {/* Down arrow scroll cue */}
                <div className="flex justify-center mt-12 animate-bounce">
                    <button onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })} aria-label="Scroll Down">
                        <svg className="w-10 h-10 text-forest-600 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Section Divider */}
            <div className="w-full h-8 bg-gradient-to-b from-transparent to-orange-100/30" />

            {/* Service Packages Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-sky-300/40 via-pink-100/40 via-yellow-100/40 to-orange-200/40">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-playfair text-forest-800 mb-4 text-center">Service Packages</h2>
                    <p className="text-lg text-forest-700 mb-16 text-center">
                        Choose the package that best honors your journey. All options are handled with dignity, care, and spiritual support.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <h3 className="text-2xl font-playfair text-forest-800 mb-4">Basic Last Rites</h3>
                            <p className="text-3xl font-medium text-forest-600 mb-6">₹50,000</p>
                            <ul className="space-y-3 text-forest-600">
                                <li>• Bed and basic care</li>
                                <li>• Cremation at Ganga</li>
                                <li>• Basic ceremonies</li>
                            </ul>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 border-forest-200">
                            <h3 className="text-2xl font-playfair text-forest-800 mb-4">Rituals & Pooja</h3>
                            <p className="text-3xl font-medium text-forest-600 mb-6">₹75,000</p>
                            <ul className="space-y-3 text-forest-600">
                                <li>• All Basic services</li>
                                <li>• Full pooja ceremony</li>
                                <li>• Priest and flowers</li>
                            </ul>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <h3 className="text-2xl font-playfair text-forest-800 mb-4">Custom Package</h3>
                            <p className="text-3xl font-medium text-forest-600 mb-6">Contact Us</p>
                            <ul className="space-y-3 text-forest-600">
                                <li>• Personalized services</li>
                                <li>• Location choice</li>
                                <li>• Custom ceremonies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Divider */}
            <div className="w-full h-8 bg-gradient-to-b from-transparent to-pink-100/30" />

            {/* Our Services Section */}
            <section className="py-20 px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-100/40 via-yellow-100/40 to-orange-100/40"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-4xl font-playfair text-forest-800 mb-16 text-center">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <div className="h-16 w-16 bg-gradient-to-br from-sky-100 to-forest-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl">🕊️</span>
                            </div>
                            <h3 className="text-2xl font-playfair text-forest-800 mb-4">Peaceful Transition</h3>
                            <p className="text-forest-600 text-lg leading-relaxed">
                                Our 11-bed sanctuary provides gentle end-of-life care with spiritual support and comfort.
                            </p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <div className="h-16 w-16 bg-gradient-to-br from-sky-100 to-forest-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl">🕯️</span>
                            </div>
                            <h3 className="text-2xl font-playfair text-forest-800 mb-4">Sacred Ceremonies</h3>
                            <p className="text-forest-600 text-lg leading-relaxed">
                                Traditional rites performed with reverence at the sacred Ganga Ghat.
                            </p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <div className="h-16 w-16 bg-gradient-to-br from-sky-100 to-forest-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl">🌊</span>
                            </div>
                            <h3 className="text-2xl font-playfair text-forest-800 mb-4">Sacred Waters</h3>
                            <p className="text-forest-600 text-lg leading-relaxed">
                                Ash immersion services at Ganga, ocean, or any location of your choosing.
                            </p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <div className="h-16 w-16 bg-gradient-to-br from-sky-100 to-forest-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-2xl font-playfair text-forest-800 mb-4">Family Support</h3>
                            <p className="text-forest-600 text-lg leading-relaxed">
                                Comprehensive care and guidance for families during this sacred transition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Divider */}
            <div className="w-full h-8 bg-gradient-to-b from-transparent to-yellow-100/30" />

            {/* How It Works (The Journey) Section */}
            <section className="py-20 px-4 relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-4xl font-playfair text-forest-800 mb-4 text-center">How It Works</h2>
                    <p className="text-lg text-forest-700 mb-16 text-center">
                        Our process is designed to be gentle, clear, and supportive for you and your loved ones.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="h-24 w-24 bg-gradient-to-br from-sky-100 to-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">1</span>
                            </div>
                            <h3 className="text-xl font-medium text-forest-800 mb-4">Initial Meeting</h3>
                            <p className="text-forest-600">We listen to your wishes and discuss options with care and understanding.</p>
                        </div>
                        <div className="text-center">
                            <div className="h-24 w-24 bg-gradient-to-br from-sky-100 to-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">2</span>
                            </div>
                            <h3 className="text-xl font-medium text-forest-800 mb-4">Service Selection</h3>
                            <p className="text-forest-600">Choose the services that best honor your spiritual journey.</p>
                        </div>
                        <div className="text-center">
                            <div className="h-24 w-24 bg-gradient-to-br from-sky-100 to-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">3</span>
                            </div>
                            <h3 className="text-xl font-medium text-forest-800 mb-4">Sacred Transition</h3>
                            <p className="text-forest-600">We handle everything with dignity, respect, and spiritual care.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Divider */}
            <div className="w-full h-8 bg-gradient-to-b from-transparent to-emerald-100/30" />

            {/* Contact Form with Elegant Design */}
            <section ref={contactRef} className="py-20 px-4 bg-gradient-to-b from-sky-300/40 via-pink-100/40 via-yellow-100/40 to-orange-200/40">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-playfair text-forest-800 mb-4 text-center">Begin Your Journey</h2>
                    <p className="text-lg text-forest-700 mb-12 text-center">
                        Reach out to us for any questions or to begin arrangements. We are here to support you every step of the way.
                    </p>
                    <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <label className="block text-forest-700 mb-2 text-lg">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-4 border border-forest-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent bg-white/50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-forest-700 mb-2 text-lg">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-4 border border-forest-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent bg-white/50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-forest-700 mb-2 text-lg">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-4 border border-forest-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent bg-white/50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-forest-700 mb-2 text-lg">Preferred Package</label>
                                <select
                                    name="preferredPackage"
                                    value={formData.preferredPackage}
                                    onChange={handleChange}
                                    className="w-full p-4 border border-forest-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent bg-white/50"
                                >
                                    <option value="basic">Basic Last Rites</option>
                                    <option value="rituals">Rituals & Pooja</option>
                                    <option value="asthi">Asthi Visarjan</option>
                                    <option value="ocean">Ocean Visarjan</option>
                                    <option value="custom">Custom Package</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-8">
                            <label className="block text-forest-700 mb-2 text-lg">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full p-4 border border-forest-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent bg-white/50"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-forest-600 to-forest-700 text-white py-4 px-8 rounded-xl text-lg font-medium hover:from-forest-700 hover:to-forest-800 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
} 