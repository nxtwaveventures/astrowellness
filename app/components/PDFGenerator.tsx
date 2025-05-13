'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { FiDownload } from 'react-icons/fi';
import { generateUniqueNamesForPDF } from '../utils/nameGenerator';
import { generateNameStory } from '../utils/nameStoryGenerator';

const COLORS = {
    primary: '#7C3AED', // purple-600
    secondary: '#EC4899', // pink-500
    text: '#374151', // gray-700
    background: '#F3F4F6' // gray-100
};

export default function PDFGenerator() {
    const [hasDownloaded, setHasDownloaded] = useState(false);

    const generatePDF = () => {
        if (hasDownloaded) {
            alert("You've already downloaded your unique set of celestial names. Each customer receives one special collection to ensure uniqueness.");
            return;
        }

        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        let yPos = 20;

        // Title page
        doc.setFontSize(24);
        doc.setTextColor(COLORS.primary);
        doc.text('✨ Your Unique Celestial Names ✨', pageWidth / 2, yPos, { align: 'center' });

        yPos += 10;
        doc.setFontSize(14);
        doc.setTextColor(COLORS.secondary);
        doc.text('A Personal Collection of Magical Names', pageWidth / 2, yPos + 10, { align: 'center' });

        yPos += 20;
        doc.setFontSize(12);
        doc.setTextColor(COLORS.text);
        const introText = doc.splitTextToSize(
            'Welcome to your exclusive collection of celestial baby names. These 20 unique names have been specially generated for you, combining cosmic elements and divine meanings. Each name is a one-of-a-kind creation, making your collection truly special.',
            170
        );
        doc.text(introText, pageWidth / 2, yPos + 10, { align: 'center' });

        // Add decorative line
        yPos += 30 + (introText.length * 5);
        doc.setDrawColor(COLORS.secondary);
        doc.setLineWidth(0.5);
        doc.line(20, yPos, 190, yPos);

        // Generate 20 unique names
        const generatedNames = generateUniqueNamesForPDF();

        // Start new page for names
        doc.addPage();
        yPos = 20;

        generatedNames.forEach((name, index) => {
            // Check if we need a new page
            if (yPos > pageHeight - 60) {
                doc.addPage();
                yPos = 20;
            }

            // Generate story for the name
            const nameStory = generateNameStory(name.name, name.element, name.numerology);

            // Name with number
            doc.setFontSize(18);
            doc.setTextColor(COLORS.primary);
            doc.text(`${index + 1}. ${name.name}`, 20, yPos);

            // Meaning
            doc.setFontSize(14);
            doc.setTextColor(COLORS.secondary);
            doc.text(`✧ Meaning: ${name.meaning}`, 20, yPos + 10);

            // Story
            doc.setFontSize(12);
            doc.setTextColor(COLORS.text);
            const storyLines = doc.splitTextToSize(nameStory.story, 170);
            doc.text(storyLines, 20, yPos + 20);

            // Add decorative elements
            doc.setDrawColor(COLORS.secondary);
            doc.setLineWidth(0.1);
            doc.line(20, yPos + 30 + (storyLines.length * 5), 190, yPos + 30 + (storyLines.length * 5));

            // Calculate next position
            yPos += 40 + (storyLines.length * 5);
        });

        // Footer on each page
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(10);
            doc.setTextColor(COLORS.text);
            doc.text(
                `✧ Page ${i} of ${pageCount} ✧`,
                105,
                pageHeight - 10,
                { align: 'center' }
            );
        }

        // Save the PDF
        doc.save('your-unique-celestial-names.pdf');
        setHasDownloaded(true);
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <button
                onClick={generatePDF}
                className={`flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${hasDownloaded
                        ? 'from-gray-400 to-gray-500 cursor-not-allowed'
                        : 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    } text-white font-semibold shadow transition-all`}
                disabled={hasDownloaded}
            >
                <FiDownload className="text-xl" />
                {hasDownloaded ? 'Names Already Downloaded' : 'Download Your Unique Names'}
            </button>
            {hasDownloaded && (
                <p className="text-sm text-gray-600 text-center max-w-md">
                    You've already downloaded your unique collection of celestial names.
                    Each customer receives one special set to ensure the uniqueness of their chosen names.
                </p>
            )}
        </div>
    );
}