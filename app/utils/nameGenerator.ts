'use client';

interface NameOrigin {
    region: string;
    cultural_context: string;
    prefixes: string[];
    suffixes: string[];
    meanings: Record<string, string>;
}

export interface GeneratedName {
    id: string;
    name: string;
    element: string;
    numerology: number;
    meaning: string;
    isPremium: boolean;
    geographical_region: string;
}

const ELEMENTS = ['fire', 'water', 'air', 'earth'] as const;
const ZODIAC_SIGNS = {
    fire: ['Aries', 'Leo', 'Sagittarius'],
    earth: ['Taurus', 'Virgo', 'Capricorn'],
    air: ['Gemini', 'Libra', 'Aquarius'],
    water: ['Cancer', 'Scorpio', 'Pisces']
};

const NAME_DATA = {
    prefixes: [
        { text: "Aar", meaning: "Peace", element: "air" },
        { text: "Abh", meaning: "Fearless", element: "fire" },
        { text: "Ad", meaning: "First", element: "fire" },
        { text: "Ana", meaning: "Grace", element: "water" },
        { text: "Dha", meaning: "Wealth", element: "earth" },
        { text: "Ish", meaning: "Divine", element: "fire" },
        { text: "Nir", meaning: "Pure", element: "water" },
        { text: "Pri", meaning: "Love", element: "water" },
        { text: "Sat", meaning: "Truth", element: "air" },
        { text: "Vid", meaning: "Knowledge", element: "air" }
    ],
    suffixes: [
        { text: "a", element: "fire" },
        { text: "an", element: "earth" },
        { text: "i", element: "air" },
        { text: "it", element: "air" },
        { text: "ya", element: "water" }
    ]
};

const CULTURAL_CONTEXTS = [
    "Ancient Sanskrit",
    "Classical Indian",
    "Vedic Tradition",
    "Medieval Indian"
];

const nameOrigins: NameOrigin[] = [
    {
        region: "South Asian Heritage",
        cultural_context: "Ancient Sanskrit",
        prefixes: ["Aa", "Am", "An", "Ar", "Bh", "Ch", "De", "Dh", "Ga", "Ha", "In", "Ja", "Ka", "La", "Ma", "Na", "Om", "Pa", "Ra", "Sa"],
        suffixes: ["av", "an", "it", "ya", "vi", "ka", "na", "ta", "sha", "ra", "ma", "pa", "ja", "va", "ti", "ri"],
        meanings: {
            "Aa": "beginning, dawn",
            "Am": "peace, tranquility",
            "An": "breath, life force",
            "Ar": "noble, precious",
            "De": "divine light",
            "Om": "universal consciousness"
        }
    },
    {
        region: "Mediterranean Heritage",
        cultural_context: "Classical Mediterranean",
        prefixes: ["Al", "An", "Ca", "El", "Ga", "He", "Le", "Ma", "Ne", "Pe", "So", "The", "Ze"],
        suffixes: ["us", "os", "is", "as", "er", "or", "ia", "ea", "ara", "ena"],
        meanings: {
            "Al": "bright, shining",
            "He": "sun, radiance",
            "So": "wisdom",
            "Ze": "life"
        }
    }
];

const meaningCategories = {
    nature: ["river", "mountain", "sky", "ocean", "forest", "flower", "star"],
    virtues: ["kindness", "courage", "wisdom", "patience", "harmony"],
    celestial: ["star", "moon", "sun", "cosmos", "aurora", "dawn"],
    elements: ["earth", "water", "fire", "air", "wind", "light"],
    wisdom: ["knowledge", "truth", "insight", "understanding"],
    peace: ["tranquility", "serenity", "calm", "harmony"],
    strength: ["power", "endurance", "resilience", "courage"],
    joy: ["happiness", "bliss", "delight", "celebration"]
};

const zodiacSigns = ['♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️'];
const elements = ['fire', 'water', 'air', 'earth'] as const;
const planets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'];

// Special name patterns
const specialMeanings = [
    'wisdom', 'peace', 'love', 'joy', 'hope', 'faith', 'grace',
    'light', 'star', 'moon', 'sun', 'heaven', 'divine', 'sacred'
];

const harmonyPatterns = [
    'aa', 'ee', 'ii', 'oo', 'uu', 'aya', 'eya', 'iya', 'oya', 'uya'
];

const elementConnections = [
    'fire', 'flame', 'sun', 'light', 'water', 'river', 'ocean', 'rain',
    'air', 'wind', 'breeze', 'sky', 'earth', 'mountain', 'valley', 'forest'
];

function calculateNumerology(name: string): number {
    const letterValues: Record<string, number> = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
        'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
        's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
    };

    const sum = name.toLowerCase().split('')
        .map(char => letterValues[char] || 0)
        .reduce((acc, val) => acc + val, 0);

    return sum > 9 ? Math.floor(sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0)) : sum;
}

function generateVibration(numerology: number): string {
    const vibrations = [
        "Leadership & Independence",
        "Harmony & Partnership",
        "Creative Expression",
        "Stability & Foundation",
        "Freedom & Adventure",
        "Nurturing & Responsibility",
        "Spiritual Wisdom",
        "Material Success",
        "Humanitarian Service"
    ];
    return vibrations[numerology - 1] || vibrations[0];
}

// Fixed set of 5 names with their elements and numerology
const fixedNames: GeneratedName[] = [
    {
        id: "1",
        name: "Aari",
        element: "air",
        numerology: 7,
        meaning: "Peace",
        isPremium: true,
        geographical_region: "Sanskrit"
    },
    {
        id: "2",
        name: "Nirit",
        element: "water",
        numerology: 6,
        meaning: "Pure",
        isPremium: true,
        geographical_region: "Hebrew"
    },
    {
        id: "3",
        name: "Abhi",
        element: "fire",
        numerology: 8,
        meaning: "Fearless",
        isPremium: true,
        geographical_region: "Sanskrit"
    },
    {
        id: "4",
        name: "Anait",
        element: "water",
        numerology: 5,
        meaning: "Grace",
        isPremium: true,
        geographical_region: "Armenian"
    },
    {
        id: "5",
        name: "Pria",
        element: "water",
        numerology: 9,
        meaning: "Love",
        isPremium: true,
        geographical_region: "Sanskrit"
    }
];

export const generateNames = (count: number): GeneratedName[] => {
    // Always return the fixed set of 5 names
    return fixedNames;
};

function checkSpecialName(name: string, meaning: string): { isSpecial: boolean; type?: 'meaning' | 'harmony' | 'element' } {
    const lowerName = name.toLowerCase();
    const lowerMeaning = meaning.toLowerCase();

    // Check for meaningful names
    if (specialMeanings.some(m => lowerMeaning.includes(m))) {
        return { isSpecial: true, type: 'meaning' };
    }

    // Check for harmony patterns
    if (harmonyPatterns.some(pattern => lowerName.includes(pattern))) {
        return { isSpecial: true, type: 'harmony' };
    }

    // Check for elemental connections
    if (elementConnections.some(element => lowerMeaning.includes(element))) {
        return { isSpecial: true, type: 'element' };
    }

    return { isSpecial: false };
}

// Cache mechanism for generated names
let cachedNames: GeneratedName[] | null = null;

export function getNames(count: number = 20000): GeneratedName[] {
    if (!cachedNames) {
        cachedNames = generateNames(count);
    }
    return cachedNames;
}

export function getNamesByFilter(filters: {
    gender?: string;
    origin?: string;
    element?: string;
    zodiacSign?: string;
    isPremium?: boolean;
}): GeneratedName[] {
    const allNames = getNames();
    return allNames.filter(name => {
        return (!filters.gender || name.geographical_region === filters.gender) &&
            (!filters.origin || name.geographical_region === filters.origin) &&
            (!filters.element || name.element === filters.element) &&
            (!filters.zodiacSign || (name.element as keyof typeof ZODIAC_SIGNS) in ZODIAC_SIGNS && ZODIAC_SIGNS[name.element as keyof typeof ZODIAC_SIGNS].includes(filters.zodiacSign)) &&
            (filters.isPremium === undefined || name.isPremium === filters.isPremium);
    });
}

export function searchNames(query: string): GeneratedName[] {
    const allNames = getNames();
    const searchTerm = query.toLowerCase();
    return allNames.filter(name =>
        name.name.toLowerCase().includes(searchTerm) ||
        name.meaning.toLowerCase().includes(searchTerm) ||
        name.geographical_region.toLowerCase().includes(searchTerm)
    );
}

export function filterNamesByRegion(names: GeneratedName[], region: string): GeneratedName[] {
    const regionLower = region.toLowerCase();
    return names.filter(name => name.geographical_region.toLowerCase() === regionLower);
}

// Additional name data for PDF generation
const CELESTIAL_PREFIXES = [
    { text: "Cel", meaning: "Heavenly", element: "air" },
    { text: "Ast", meaning: "Star", element: "fire" },
    { text: "Lun", meaning: "Moon", element: "water" },
    { text: "Sol", meaning: "Sun", element: "fire" },
    { text: "Cos", meaning: "Universe", element: "air" },
    { text: "Nov", meaning: "New", element: "fire" },
    { text: "Aur", meaning: "Dawn", element: "fire" },
    { text: "Nyx", meaning: "Night", element: "water" },
    { text: "Ven", meaning: "Love", element: "water" },
    { text: "Ori", meaning: "Rising", element: "air" },
    { text: "Pho", meaning: "Light", element: "fire" },
    { text: "Syr", meaning: "Mystery", element: "water" },
    { text: "Tyr", meaning: "Star Path", element: "air" },
    { text: "Veg", meaning: "Falling Star", element: "air" },
    { text: "Zar", meaning: "Radiance", element: "fire" }
];

const CELESTIAL_SUFFIXES = [
    { text: "is", element: "air" },
    { text: "us", element: "fire" },
    { text: "ix", element: "water" },
    { text: "ar", element: "fire" },
    { text: "on", element: "earth" },
    { text: "ia", element: "water" },
    { text: "ys", element: "air" },
    { text: "ax", element: "fire" },
    { text: "en", element: "earth" },
    { text: "ra", element: "fire" }
];

// Function to generate unique names for PDF
export const generateUniqueNamesForPDF = (): GeneratedName[] => {
    const usedNames = new Set<string>();
    const names: GeneratedName[] = [];

    while (names.length < 20) {
        // Get random prefix and suffix
        const prefix = CELESTIAL_PREFIXES[Math.floor(Math.random() * CELESTIAL_PREFIXES.length)];
        const suffix = CELESTIAL_SUFFIXES[Math.floor(Math.random() * CELESTIAL_SUFFIXES.length)];

        // Create name
        const name = prefix.text + suffix.text;

        // Only add if name hasn't been used
        if (!usedNames.has(name)) {
            usedNames.add(name);

            // Determine element (prefer prefix's element)
            const element = prefix.element;

            // Calculate numerology
            const numerology = calculateNumerology(name);

            // Create meaning
            const meaning = `${prefix.meaning} ${suffix.text === 'is' ? 'One' :
                suffix.text === 'us' ? 'Bearer' :
                    suffix.text === 'ix' ? 'Seeker' :
                        suffix.text === 'ar' ? 'Light' :
                            suffix.text === 'on' ? 'Child' :
                                suffix.text === 'ia' ? 'Spirit' :
                                    suffix.text === 'ys' ? 'Walker' :
                                        suffix.text === 'ax' ? 'Warrior' :
                                            suffix.text === 'en' ? 'Keeper' :
                                                'Guardian'}`;

            names.push({
                id: (names.length + 1).toString(),
                name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
                element,
                numerology,
                meaning,
                isPremium: true,
                geographical_region: "Celestial"
            });
        }
    }

    return names;
}; 