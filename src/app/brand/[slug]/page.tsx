import { notFound } from "next/navigation"
import { getAllBrands, getBrand } from "@/lib/brand-data"
import { BrandHero } from "@/components/brand/BrandHero"
import { SpecsTable } from "@/components/brand/SpecsTable"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Navbar } from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
    const brands = getAllBrands()
    return brands.map((brand) => ({
        slug: brand.slug,
    }))
}

export default function BrandPage({ params }: { params: { slug: string } }) {
    const brand = getBrand(params.slug)

    if (!brand) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-brutal-black text-pure-white selection:bg-racing-red selection:text-white font-sans">
            <Navbar />

            <BrandHero brand={brand} />

            {/* Description & Specs Section */}
            <section className="container py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Narrative */}
                    <div className="space-y-8">
                        <ScrollReveal mode="slide">
                            <h2 className="font-heading text-5xl lg:text-7xl leading-none text-white">
                                THE SOUL OF <br />
                                <span style={{ color: brand.color }}>{brand.name}</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal mode="fade" delay={0.2}>
                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-sans max-w-[40ch]">
                                {brand.description}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal mode="fade" delay={0.4}>
                            <div className="flex gap-4 pt-8">
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                                    CONFIGURE MODEL
                                </Button>
                                <Link href="/#brands">
                                    <Button variant="ghost" className="text-gray-500 hover:text-white">
                                        <ArrowLeft className="mr-2 h-4 w-4" /> BACK TO SHOWCASE
                                    </Button>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: Technical Data */}
                    <ScrollReveal mode="wipe" delay={0.3} className="w-full flex justify-end">
                        <SpecsTable specs={brand.specs} color={brand.color} />
                    </ScrollReveal>
                </div>
            </section>

            {/* Placeholder Gallery Section */}
            <section className="h-[50vh] bg-concrete-gray/10 border-y-2 border-concrete-gray flex items-center justify-center">
                <p className="font-tech text-xl text-gray-600">/// VISUAL_DATA_MISSING_PENDING_GENERATION</p>
            </section>
        </main>
    )
}
