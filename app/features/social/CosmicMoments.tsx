"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface CosmicMoment {
    id: string;
    userId: string;
    content: string;
    type: 'insight' | 'ritual' | 'transformation';
    likes: number;
    comments: number;
    shares: number;
    timestamp: Date;
    zodiacSign: string;
    element: string;
}

export default function CosmicMoments() {
    const [moments, setMoments] = useState<CosmicMoment[]>([]);
    const [isRecording, setIsRecording] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsRecording(true);
        } catch (error) {
            console.error('Error accessing media devices:', error);
        }
    };

    const stopRecording = () => {
        setIsRecording(false);
        if (videoRef.current?.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-forest-50 to-forest-100">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <h1 className="text-2xl font-semibold text-forest-800">Cosmic Moments</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Create Moment */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="flex-1">
                            <textarea
                                className="w-full p-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                                placeholder="Share your cosmic moment..."
                                rows={3}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <button
                                onClick={startRecording}
                                className="px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors"
                            >
                                Record
                            </button>
                            <button
                                onClick={stopRecording}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Stop
                            </button>
                        </div>
                    </div>
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="mt-4 w-full rounded-lg"
                        style={{ display: isRecording ? 'block' : 'none' }}
                    />
                </div>

                {/* Moments Feed */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {moments.map((moment) => (
                        <motion.div
                            key={moment.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="p-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-sm font-medium text-forest-600">
                                        {moment.zodiacSign}
                                    </span>
                                    <span className="text-sm text-forest-400">•</span>
                                    <span className="text-sm text-forest-400">
                                        {moment.timestamp.toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-forest-800 mb-4">{moment.content}</p>
                                <div className="flex items-center space-x-4 text-forest-400">
                                    <button className="flex items-center space-x-1">
                                        <span>❤️</span>
                                        <span>{moment.likes}</span>
                                    </button>
                                    <button className="flex items-center space-x-1">
                                        <span>💬</span>
                                        <span>{moment.comments}</span>
                                    </button>
                                    <button className="flex items-center space-x-1">
                                        <span>↗️</span>
                                        <span>{moment.shares}</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
} 