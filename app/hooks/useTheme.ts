'use client';

import { useEffect } from 'react';
import { usePersonalization } from '../context/PersonalizationContext';

export function useTheme() {
    const { theme } = usePersonalization();

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
} 