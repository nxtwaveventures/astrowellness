'use client';

import { usePersonalization } from '../context/PersonalizationContext';

export function FontSizeSelector() {
    const { fontSize, setFontSize } = usePersonalization();

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => setFontSize('small')}
                className={`p-2 rounded ${fontSize === 'small'
                        ? 'bg-gray-200 dark:bg-gray-700'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                aria-label="Small font size"
            >
                A
            </button>
            <button
                onClick={() => setFontSize('medium')}
                className={`p-2 rounded ${fontSize === 'medium'
                        ? 'bg-gray-200 dark:bg-gray-700'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                aria-label="Medium font size"
            >
                A
            </button>
            <button
                onClick={() => setFontSize('large')}
                className={`p-2 rounded ${fontSize === 'large'
                        ? 'bg-gray-200 dark:bg-gray-700'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                aria-label="Large font size"
            >
                A
            </button>
        </div>
    );
} 