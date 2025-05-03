'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserProfile {
    name: string;
    dateOfBirth: string;
    location?: string;
}

interface PersonalizationContextType {
    theme: 'light' | 'dark';
    fontSize: 'small' | 'medium' | 'large';
    toggleTheme: () => void;
    setFontSize: (size: 'small' | 'medium' | 'large') => void;
    userProfile: UserProfile | null;
    setUserProfile: (profile: UserProfile | null) => void;
}

const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined);

export function PersonalizationProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        const savedFontSize = localStorage.getItem('fontSize') as 'small' | 'medium' | 'large';
        const savedProfile = localStorage.getItem('userProfile');

        if (savedTheme) setTheme(savedTheme);
        if (savedFontSize) setFontSize(savedFontSize);
        if (savedProfile) setUserProfile(JSON.parse(savedProfile));
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const updateFontSize = (size: 'small' | 'medium' | 'large') => {
        setFontSize(size);
        localStorage.setItem('fontSize', size);
    };

    return (
        <PersonalizationContext.Provider
            value={{
                theme,
                fontSize,
                toggleTheme,
                setFontSize: updateFontSize,
                userProfile,
                setUserProfile,
            }}
        >
            {children}
        </PersonalizationContext.Provider>
    );
}

export function usePersonalization() {
    const context = useContext(PersonalizationContext);
    if (context === undefined) {
        throw new Error('usePersonalization must be used within a PersonalizationProvider');
    }
    return context;
} 