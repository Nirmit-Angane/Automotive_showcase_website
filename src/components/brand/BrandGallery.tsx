"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface BrandGalleryProps {
    brandSlug: string
    brandColor: string
}

const galleryItems = [
    { id: "engine", label: "/// ENGINE BAY", suffix: "engine" },
    { id: "interior", label: "/// COCKPIT", suffix: "interior" },
    { id: "wheel", label: "/// BRAKES", suffix: "wheel" },
    { id: "rear", label: "/// REAR VIEW", suffix: "rear" },
]

export function BrandGallery({ brandSlug, brandColor }: BrandGalleryProps) {
    return (
        <section className="bg-brutal-black py-24 border-y-2 border-concrete-gray">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-heading text-5xl md:text-6xl mb-12 text-center text-concrete-gray tracking-wider"
                >
                    /// TECHNICAL GALLERY
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-concrete-gray border-2 border-concrete-gray">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-video bg-brutal-black overflow-hidden cursor-pointer"
                        >
                            {/* Image */}
                            <Image
                                src={`/images/gallery/${brandSlug}-${item.suffix}.png`}
                                alt={`${brandSlug} ${item.label}`}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                            {/* Label */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                <div
                                    className="font-tech text-xs md:text-sm tracking-widest transition-colors duration-300"
                                    style={{ color: brandColor }}
                                >
                                    {item.label}
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div
                                className="absolute inset-0 border-2 border-transparent group-hover:border-current transition-colors duration-300 pointer-events-none"
                                style={{ borderColor: brandColor }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
