"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/brand/Hero";
import Link from "next/link";
import { getAllBrands } from "@/lib/brand-data";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-brutal-black text-pure-white selection:bg-racing-red selection:text-white font-sans">
            <Navbar />
            <Hero />

            {/* Brand Grid Section */}
            <section id="brands" className="relative z-10 bg-brutal-black py-24 border-b-2 border-concrete-gray">
                <div className="container">
                    <h2 className="font-heading text-6xl mb-12 text-center text-concrete-gray tracking-wider">
            /// SELECTION
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-concrete-gray gap-[2px] border-2 border-concrete-gray">
                        {getAllBrands().map((brand) => (
                            <Link
                                href={`/brand/${brand.slug}`}
                                key={brand.slug}
                                onClick={() => {
                                    if (brand.audio) {
                                        const audio = new Audio(brand.audio);
                                        audio.volume = 0.6;
                                        audio.play().catch(e => console.log("Audio play failed:", e));
                                    }
                                }}
                                    }
                                }}
                                onMouseEnter={() => {
                                    const audio = new Audio("/sounds/click.mp3");
                                    audio.volume = 0.2;
                                    audio.play().catch(e => console.log("Audio play failed:", e));
                                }}
                                className="group relative h-[300px] md:h-[400px] bg-brutal-black p-6 md:p-8 flex flex-col justify-between hover:bg-racing-red transition-colors duration-0 cursor-pointer overflow-hidden"
                            >
                                <div className="font-heading text-3xl md:text-4xl z-10 group-hover:text-black transition-colors duration-300 break-words">{brand.name}</div>
                                <div className="font-tech text-[10px] md:text-xs opacity-50 z-10 group-hover:text-black group-hover:opacity-100 transition-all duration-300">
                  /// VIEW COLLECTION
                                </div>

                                {/* Real Image Asset */}
                                <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                    <Image
                                        src={brand.image}
                                        alt={brand.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-12 flex flex-col items-center justify-center gap-4 font-tech text-sm opacity-50 bg-brutal-black text-white">
                <div>© 2026 PREMIUM AUTOMOTIVE SHOWCASE /// ALL RIGHTS RESERVED</div>
                <a
                    href="https://github.com/Nirmit-Angane/Automotive_showcase_website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-racing-red transition-colors duration-300"
                >
                    /// SOURCE CODE: GITHUB_REPO
                </a>
            </footer>
        </main >
    );
}
