"use client"

import { BrandData } from "@/lib/brand-data"
import { motion } from "framer-motion"
import Image from "next/image"

interface BrandHeroProps {
    brand: BrandData
}

export function BrandHero({ brand }: BrandHeroProps) {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b-2 border-concrete-gray">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div
                    className="absolute inset-0 mix-blend-overlay opacity-50"
                    style={{ background: `linear-gradient(to bottom, ${brand.color} 0%, transparent 100%)` }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="z-10 container flex flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-heading text-[12vw] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 uppercase drop-shadow-2xl"
                >
                    {brand.name}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 font-tech text-xl tracking-widest uppercase drop-shadow-lg"
                    style={{ color: brand.color }}
                >
                    {brand.tagline}
                </motion.div>
            </div>

            <div className="absolute bottom-12 right-12 font-tech text-xs opacity-50 text-right hidden md:block">
        /// SYSTEM DATA <br />
        /// {brand.name}_V1.0
            </div>
        </section>
    )
}
