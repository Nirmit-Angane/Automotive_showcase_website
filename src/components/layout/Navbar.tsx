import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-concrete-gray bg-brutal-black/95 backdrop-blur supports-[backdrop-filter]:bg-brutal-black/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="font-heading text-2xl tracking-tight text-racing-red hover:text-white transition-colors">
                        PREMIUM <span className="text-white">///</span> SHOWCASE
                    </Link>
                </div>

                <nav className="hidden md:flex gap-8 font-sans text-sm font-medium tracking-wide">
                    <Link href="/#brands" className="hover:text-racing-red transition-colors">BRANDS</Link>
                    <Link href="/#specs" className="hover:text-racing-red transition-colors">SPECS</Link>
                    <Link href="/#gallery" className="hover:text-racing-red transition-colors">GALLERY</Link>
                    <Link href="/#contact" className="hover:text-racing-red transition-colors">INQUIRE</Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* Placeholder for future auth or cart */}
                    <div className="h-2 w-2 bg-racing-red animate-pulse rounded-full" />
                </div>
            </div>
        </header>
    )
}
