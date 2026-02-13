import { BrandData } from "@/lib/brand-data"

interface SpecsTableProps {
    specs: BrandData['specs']
    color: string
}

export function SpecsTable({ specs, color }: SpecsTableProps) {
    return (
        <div className="w-full max-w-2xl border-2 border-concrete-gray bg-black/50 backdrop-blur-sm p-8">
            <h3 className="font-heading text-3xl mb-6 text-white border-b border-concrete-gray pb-2">
                TECHNICAL /// DATA
            </h3>

            <div className="space-y-4 font-tech text-lg">
                {Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center group py-2 border-b border-white/10 hover:border-white transition-colors">
                        <span className="uppercase text-gray-400 group-hover:text-white transition-colors">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span
                            className="font-bold text-white group-hover:bg-white group-hover:text-black px-2 transition-all"
                            style={{ textShadow: `0 0 10px ${color}` }}
                        >
                            {value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
