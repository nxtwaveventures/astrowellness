import { DateTime } from 'luxon';

export interface AstroData {
    zodiacSign: string;
    moonPhase: string;
    numerologyNumber: number;
    luckyNumber: number;
    luckyColor: string;
    rulingPlanet: string;
    elementalEnergy: string;
    gemstone: string;
    favorableTime: string;
    mantra: string;
    elementalActivity: string;
    moonMessage: string;
    dailyRitual: string;
    weeklyFocus: string;
    dailyTip: string;
    meditationFocus: string;
    affirmation: string;
    lifePathNumber: number;
    spiritualLesson: string;
    directionalEnergy: string;
    sacredSpace: string;
}

const zodiacSigns = [
    { name: 'Aries', element: 'Fire', startDate: { month: 3, day: 21 }, endDate: { month: 4, day: 19 } },
    { name: 'Taurus', element: 'Earth', startDate: { month: 4, day: 20 }, endDate: { month: 5, day: 20 } },
    { name: 'Gemini', element: 'Air', startDate: { month: 5, day: 21 }, endDate: { month: 6, day: 20 } },
    { name: 'Cancer', element: 'Water', startDate: { month: 6, day: 21 }, endDate: { month: 7, day: 22 } },
    { name: 'Leo', element: 'Fire', startDate: { month: 7, day: 23 }, endDate: { month: 8, day: 22 } },
    { name: 'Virgo', element: 'Earth', startDate: { month: 8, day: 23 }, endDate: { month: 9, day: 22 } },
    { name: 'Libra', element: 'Air', startDate: { month: 9, day: 23 }, endDate: { month: 10, day: 22 } },
    { name: 'Scorpio', element: 'Water', startDate: { month: 10, day: 23 }, endDate: { month: 11, day: 21 } },
    { name: 'Sagittarius', element: 'Fire', startDate: { month: 11, day: 22 }, endDate: { month: 12, day: 21 } },
    { name: 'Capricorn', element: 'Earth', startDate: { month: 12, day: 22 }, endDate: { month: 1, day: 19 } },
    { name: 'Aquarius', element: 'Air', startDate: { month: 1, day: 20 }, endDate: { month: 2, day: 18 } },
    { name: 'Pisces', element: 'Water', startDate: { month: 2, day: 19 }, endDate: { month: 3, day: 20 } }
];

const chakras = [
    { name: 'Root Chakra', element: 'Earth', color: 'Red' },
    { name: 'Sacral Chakra', element: 'Water', color: 'Orange' },
    { name: 'Solar Plexus Chakra', element: 'Fire', color: 'Yellow' },
    { name: 'Heart Chakra', element: 'Air', color: 'Green' },
    { name: 'Throat Chakra', element: 'Ether', color: 'Blue' },
    { name: 'Third Eye Chakra', element: 'Light', color: 'Indigo' },
    { name: 'Crown Chakra', element: 'Cosmic Energy', color: 'Violet' }
];

const affirmations = [
    "I am aligned with the universe's infinite wisdom",
    "My spiritual journey unfolds perfectly",
    "I am connected to divine guidance",
    "My inner light shines brightly",
    "I am at peace with my path",
    "The universe supports my growth",
    "I am open to spiritual insights",
    "Divine energy flows through me",
    "I trust my spiritual journey",
    "My soul is awakening to truth"
];

const gemstones = {
    'Fire': ['Ruby', 'Garnet', 'Carnelian', 'Red Jasper'],
    'Earth': ['Emerald', 'Jade', 'Moss Agate', 'Peridot'],
    'Air': ['Aquamarine', 'Opal', 'Celestite', 'Clear Quartz'],
    'Water': ['Moonstone', 'Pearl', 'Aquamarine', 'Blue Lace Agate']
};

const mantras = {
    'Fire': ['Ram', 'Ah', 'So Ham', 'Om Agnaye Namaha'],
    'Earth': ['Lam', 'Om', 'Sat Nam', 'Om Prithvi Namaha'],
    'Air': ['Yam', 'Ham', 'Om Pavane Namaha', 'Sat Nam'],
    'Water': ['Vam', 'Om Varuna Namaha', 'Ham Sa', 'Om Ganga Namaha']
};

const elementalActivities = {
    'Fire': [
        'Dynamic meditation',
        'Power yoga',
        'Candle gazing',
        'Sun salutations'
    ],
    'Earth': [
        'Grounding meditation',
        'Garden mindfulness',
        'Crystal healing',
        'Nature walking'
    ],
    'Air': [
        'Breath work',
        'Sound healing',
        'Wind meditation',
        'Sky gazing'
    ],
    'Water': [
        'Flow meditation',
        'Moon bathing',
        'Water visualization',
        'Ocean breathing'
    ]
};

const moonMessages = {
    Fire: [
        "The moon's energy ignites your creative spark",
        "Harness the moon's power for transformation",
        "Let the moon guide your passionate pursuits",
        "The moon amplifies your natural leadership",
    ],
    Earth: [
        "The moon grounds your practical wisdom",
        "Find stability in the moon's steady rhythm",
        "The moon supports your material goals",
        "Let the moon enhance your natural abundance",
    ],
    Air: [
        "The moon illuminates your mental clarity",
        "Let the moon inspire new ideas",
        "The moon enhances your communication",
        "Find intellectual insights in moon's light",
    ],
    Water: [
        "The moon deepens your emotional wisdom",
        "Let the moon guide your intuition",
        "The moon enhances your psychic abilities",
        "Find emotional healing in moon's energy",
    ],
};

const dailyRituals = [
    'Start your day with a gratitude practice',
    'Perform a cleansing visualization',
    'Connect with your spirit guides through meditation',
    'Practice mindful breathing exercises',
    'Create a sacred space for reflection',
    'Write in your spiritual journal',
    'Perform an energy clearing ritual',
    'Connect with nature through mindful observation'
];

const weeklyFocusAreas = [
    'Inner Peace & Harmony',
    'Spiritual Growth & Wisdom',
    'Manifestation & Abundance',
    'Healing & Release',
    'Connection & Community',
    'Creativity & Expression',
    'Balance & Alignment'
];

const planets = {
    'Aries': 'Mars',
    'Taurus': 'Venus',
    'Gemini': 'Mercury',
    'Cancer': 'Moon',
    'Leo': 'Sun',
    'Virgo': 'Mercury',
    'Libra': 'Venus',
    'Scorpio': 'Pluto',
    'Sagittarius': 'Jupiter',
    'Capricorn': 'Saturn',
    'Aquarius': 'Uranus',
    'Pisces': 'Neptune'
};

const elementalCompatibility = {
    'Fire': {
        'Fire': 'Harmonious - Enhanced passion and creativity',
        'Air': 'Supportive - Increased inspiration and movement',
        'Earth': 'Challenging - Need for balance and grounding',
        'Water': 'Complex - Opportunity for growth through contrast'
    },
    'Earth': {
        'Earth': 'Harmonious - Strong foundation and stability',
        'Water': 'Supportive - Nurturing growth and abundance',
        'Fire': 'Challenging - Learning patience and adaptation',
        'Air': 'Complex - Balancing practicality with ideas'
    },
    'Air': {
        'Air': 'Harmonious - Enhanced communication and ideas',
        'Fire': 'Supportive - Dynamic exchange of energy',
        'Water': 'Challenging - Bridging emotion and intellect',
        'Earth': 'Complex - Grounding inspiration into form'
    },
    'Water': {
        'Water': 'Harmonious - Deep emotional connection',
        'Earth': 'Supportive - Material and emotional security',
        'Air': 'Challenging - Finding emotional clarity',
        'Fire': 'Complex - Transformative growth potential'
    }
};

const cosmicCycles = [
    'Seed Planting',
    'Initial Growth',
    'Rapid Expansion',
    'Full Bloom',
    'Harvest',
    'Release',
    'Rest',
    'Integration'
];

const dailyTips = [
    "Embrace the flow of cosmic energy today",
    "Trust your intuition in all matters",
    "Practice gratitude for the abundance around you",
    "Connect with nature to ground your energy",
    "Share your light with others",
    "Take time for self-reflection",
    "Listen to your inner wisdom",
    "Celebrate your spiritual journey",
];

const meditationFocusAreas = [
    "Breath awareness",
    "Chakra alignment",
    "Cosmic energy flow",
    "Elemental balance",
    "Inner peace",
    "Spiritual growth",
    "Universal connection",
    "Soul purpose",
];

const spiritualLessons = [
    "Embrace change with grace",
    "Trust the divine timing",
    "Find strength in vulnerability",
    "Practice unconditional love",
    "Seek wisdom in silence",
    "Honor your inner truth",
    "Cultivate inner peace",
    "Share your gifts with the world",
];

const directionalEnergies = [
    "North: Grounding and stability",
    "South: Passion and transformation",
    "East: New beginnings and clarity",
    "West: Reflection and wisdom",
    "Northeast: Spiritual growth",
    "Northwest: Inner strength",
    "Southeast: Abundance and prosperity",
    "Southwest: Relationships and harmony",
];

const sacredSpaces = [
    "A quiet corner with natural light",
    "A garden or outdoor sanctuary",
    "A dedicated meditation room",
    "A sacred altar space",
    "A peaceful water feature",
    "A crystal grid arrangement",
    "A healing herb garden",
    "A moonlit meditation spot",
];

export function calculateZodiacSign(birthDate: Date): string {
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();

    for (const sign of zodiacSigns) {
        if (
            (month === sign.startDate.month && day >= sign.startDate.day) ||
            (month === sign.endDate.month && day <= sign.endDate.day)
        ) {
            return sign.name;
        }
    }

    // Default to Capricorn for edge case
    return 'Capricorn';
}

export function calculateMoonPhase(date: Date): string {
    const LUNAR_MONTH = 29.530588853; // Length of synodic month (new Moon to new Moon)
    const KNOWN_NEW_MOON = new Date('2000-01-06').getTime(); // Known new moon date

    const timestamp = date.getTime();
    const elapsed = timestamp - KNOWN_NEW_MOON;
    const days = elapsed / (1000 * 60 * 60 * 24);
    const phase = ((days % LUNAR_MONTH) / LUNAR_MONTH) * 8;

    const phases = [
        'New Moon',
        'Waxing Crescent',
        'First Quarter',
        'Waxing Gibbous',
        'Full Moon',
        'Waning Gibbous',
        'Last Quarter',
        'Waning Crescent'
    ];

    return phases[Math.floor(phase)];
}

export function calculateNumerologyNumber(birthDate: Date): number {
    const dateString = birthDate.toISOString().split('T')[0].replace(/-/g, '');
    const sum = dateString.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    // Keep reducing until we get a single digit
    let result = sum;
    while (result > 9) {
        result = result.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }

    return result;
}

export function getElementalEnergy(zodiacSign: string): string {
    const sign = zodiacSigns.find(s => s.name === zodiacSign);
    return sign ? sign.element : 'Unknown';
}

export function getDailyAffirmation(): string {
    return affirmations[Math.floor(Math.random() * affirmations.length)];
}

export function getLuckyNumber(birthDate: Date): number {
    const numerology = calculateNumerologyNumber(birthDate);
    return ((numerology * DateTime.now().day) % 9) + 1;
}

export function getLuckyColor(element: string): string {
    const colorMap = {
        'Fire': ['Red', 'Orange', 'Gold'],
        'Earth': ['Green', 'Brown', 'Copper'],
        'Air': ['Blue', 'White', 'Silver'],
        'Water': ['Blue', 'Turquoise', 'Purple']
    };

    const colors = colorMap[element as keyof typeof colorMap] || ['White'];
    return colors[Math.floor(Math.random() * colors.length)];
}

export function getChakraFocus(element: string): string {
    const chakra = chakras.find(c => c.element === element) || chakras[0];
    return chakra.name;
}

function getFavorableTime(element: string): string {
    const now = DateTime.now();
    const hour = now.hour;

    // Different elements have different peak times
    const timings = {
        'Fire': hour >= 10 && hour < 14 ? 'Now' : '10 AM - 2 PM',
        'Earth': hour >= 6 && hour < 10 ? 'Now' : '6 AM - 10 AM',
        'Air': hour >= 14 && hour < 18 ? 'Now' : '2 PM - 6 PM',
        'Water': (hour >= 18 || hour < 6) ? 'Now' : '6 PM - 6 AM'
    };

    return timings[element as keyof typeof timings] || '6 AM - 10 AM';
}

function getRandomFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

function calculatePersonalYear(birthDate: Date): number {
    const currentYear = DateTime.now().year;
    const birthMonth = birthDate.getMonth() + 1;
    const birthDay = birthDate.getDate();

    // Calculate personal year number
    const yearSum = `${currentYear}${birthMonth}${birthDay}`.split('')
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    let personalYear = yearSum;
    while (personalYear > 9) {
        personalYear = personalYear.toString().split('')
            .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }

    return personalYear;
}

function calculatePersonalDay(birthDate: Date): number {
    const today = DateTime.now();
    const daySum = `${today.year}${today.month}${today.day}${birthDate.getMonth() + 1}${birthDate.getDate()}`
        .split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    let personalDay = daySum;
    while (personalDay > 9) {
        personalDay = personalDay.toString().split('')
            .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }

    return personalDay;
}

function calculateChallengeNumber(birthDate: Date): number {
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    const year = birthDate.getFullYear();

    // Calculate using month and day
    let challenge = Math.abs(month - day);

    // Add year influence
    const yearSum = year.toString().split('')
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    challenge += yearSum;
    while (challenge > 9) {
        challenge = challenge.toString().split('')
            .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }

    return challenge;
}

function getCosmicCycle(moonPhase: string, personalDay: number): string {
    // Combine moon phase and personal day to determine cosmic cycle
    const moonIndex = Object.keys(moonMessages).indexOf(moonPhase);
    const cycleIndex = (moonIndex + personalDay) % cosmicCycles.length;
    return cosmicCycles[cycleIndex];
}

function calculateEnergyPeak(element: string, personalDay: number): string {
    const baseHours = {
        'Fire': ['6:00 AM', '12:00 PM', '6:00 PM'],
        'Earth': ['7:00 AM', '1:00 PM', '7:00 PM'],
        'Air': ['8:00 AM', '2:00 PM', '8:00 PM'],
        'Water': ['9:00 AM', '3:00 PM', '9:00 PM']
    };

    const hours = baseHours[element as keyof typeof baseHours];
    return hours[personalDay % 3];
}

export function generateAstroData(birthDate: string): AstroData {
    const date = new Date(birthDate);
    const zodiacSign = calculateZodiacSign(date);
    const element = getElementalEnergy(zodiacSign);
    const moonPhase = calculateMoonPhase(date);
    const dayOfWeek = date.getDay();
    const personalDay = calculatePersonalDay(date);

    return {
        zodiacSign,
        moonPhase,
        numerologyNumber: calculateNumerologyNumber(date),
        luckyNumber: getLuckyNumber(date),
        luckyColor: getLuckyColor(element),
        rulingPlanet: planets[zodiacSign as keyof typeof planets],
        elementalEnergy: element,
        gemstone: getRandomFromArray(gemstones[element as keyof typeof gemstones]),
        favorableTime: getFavorableTime(element),
        mantra: getRandomFromArray(mantras[element as keyof typeof mantras]),
        elementalActivity: getRandomFromArray(elementalActivities[element as keyof typeof elementalActivities]),
        moonMessage: getRandomFromArray(moonMessages[element as keyof typeof moonMessages]),
        dailyRitual: getRandomFromArray(dailyRituals),
        weeklyFocus: weeklyFocusAreas[dayOfWeek],
        dailyTip: getRandomFromArray(dailyTips),
        meditationFocus: getRandomFromArray(meditationFocusAreas),
        affirmation: getDailyAffirmation(),
        lifePathNumber: calculateNumerologyNumber(date),
        spiritualLesson: getRandomFromArray(spiritualLessons),
        directionalEnergy: getRandomFromArray(directionalEnergies),
        sacredSpace: getRandomFromArray(sacredSpaces),
    };
} 