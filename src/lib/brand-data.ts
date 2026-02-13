export type BrandData = {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    color: string;
    image: string; // Added image path
    audio: string;
    specs: Record<string, string>;
};

export const brands: Record<string, BrandData> = {
    ferrari: {
        slug: "ferrari",
        name: "FERRARI",
        tagline: "The Soul of Maranello",
        description: "Racing DNA distilled into pure street performance.",
        color: "#DC0000",
        specs: {
            ENGINE: "V12 NATURALLY ASPIRATED",
            POWER: "830 HP",
            "0-60": "2.85 SEC",
        },
        image: "/images/ferrari.png",
        audio: "/sounds/ferrari-engine.mp3",
    },
    lamborghini: {
        slug: "lamborghini",
        name: "LAMBORGHINI",
        tagline: "Raging Bull",
        description: "Unapologetic aggression and raw power.",
        color: "#FFD700",
        specs: {
            ENGINE: "V12 HYBRID",
            POWER: "1001 HP",
            "0-60": "2.5 SEC",
        },
        image: "/images/lamborghini.png",
        audio: "/sounds/lamborghini-engine.mp3",
    },
    mclaren: {
        slug: "mclaren",
        name: "MCLAREN",
        tagline: "Fearlessly Forward",
        description: "Obsessive engineering meets alien aerodynamics.",
        color: "#FF8000",
        specs: {
            ENGINE: "V8 TWIN-TURBO",
            POWER: "765 HP",
            "0-60": "2.7 SEC",
        },
        image: "/images/mclaren.png",
        audio: "/sounds/mclaren-engine.mp3",
    },
    porsche: {
        slug: "porsche",
        name: "PORSCHE",
        tagline: "Timeless Machine",
        description: "Precision engineered for the perfect drive.",
        color: "#964B00",
        specs: {
            ENGINE: "FLAT-6 TWIN-TURBO",
            POWER: "640 HP",
            "0-60": "2.6 SEC",
        },
        image: "/images/porsche.png",
        audio: "/sounds/porsche-engine.mp3",
    },
};

export function getBrand(slug: string): BrandData | undefined {
    return brands[slug];
}

export function getAllBrands(): BrandData[] {
    return Object.values(brands);
}
