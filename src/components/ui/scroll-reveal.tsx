"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    mode?: "fade" | "slide" | "wipe"
    delay?: number
}

export function ScrollReveal({
    children,
    className,
    mode = "fade",
    delay = 0
}: ScrollRevealProps) {

    const variants = {
        fade: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        },
        slide: {
            hidden: { x: -50, opacity: 0 },
            visible: { x: 0, opacity: 1 }
        },
        wipe: {
            hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
            visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.22, 1, 0.36, 1] // Custom quint-like ease
            }}
            variants={variants[mode]}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
