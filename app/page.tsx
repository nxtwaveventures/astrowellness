// 'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100">
      <Head>
        <title>AstroWellness & Twintap – Connect by the stars</title>
        <meta name="description" content="AstroWellness: Daily transformation and growth. Twintap: Connect by the stars—friends, flames, and more. Astrology-based dating and friendship for Gen Z." />
      </Head>
      {/* Punchline */}
      <div className="text-center pt-16 pb-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-forest-800">
          Three Features, Just for You
        </h2>
      </div>
      {/* Three Feature Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100">
        <div className="max-w-6xl mx-auto w-full py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* New You */}
          <div className="bg-gradient-to-br from-sky-200 via-yellow-100 to-orange-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
            <span className="text-4xl mb-4">🌱</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-playfair">New You</h1>
            <p className="mb-6 text-forest-700">Everyday Astro Insights.</p>
            <Link href="/dashboard" className="bg-forest-600 text-white px-6 py-3 rounded-full font-medium hover:bg-forest-700 transition">Go to Dashboard</Link>
          </div>
          {/* Twintap */}
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
            <span className="text-4xl mb-4">✨</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-playfair">Twintap</h1>
            <p className="mb-6 text-forest-700">Swipe & find your mate.</p>
            <Link href="/twintap" className="bg-white text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-purple-100 transition">Try Twintap</Link>
          </div>
          {/* Mukti Dham */}
          <div className="bg-gradient-to-br from-pink-200 via-orange-300 to-purple-300 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
            <span className="text-4xl mb-4">🕊️</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-playfair">Mukti Dham</h1>
            <p className="mb-6 text-forest-700">A secure farewell to life.</p>
            <Link href="/mukti-dham" className="bg-forest-600 text-white px-6 py-3 rounded-full font-medium hover:bg-forest-700 transition">Explore Mukti Dham</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
