"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDownRight } from "lucide-react"


export function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b-2 border-concrete-gray">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover opacity-80"
                >
                    <source src="/videos/hero-cinematic.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
            </div>

            <div className="z-10 text-center space-y-4 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="font-heading text-[18vw] md:text-[15vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 select-none drop-shadow-2xl"
                >
                    PURE <br /> SPEED
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-12 left-0 right-0 container flex flex-col md:flex-row justify-between items-center md:items-end z-20 gap-4"
            >
                <div className="text-sm font-tech text-gray-400 max-w-[200px] text-center md:text-left hidden md:block">
          /// SYSTEM READY<br />
          /// AWAITING INPUT
                </div>

                <Button variant="brutalist" size="lg" className="group w-full md:w-auto">
                    ENTER SHOWROOM <ArrowDownRight className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                </Button>
            </motion.div>
        </section>
    )
}
