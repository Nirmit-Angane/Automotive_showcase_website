import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
    brandDetails?: {
        name: string;
        color: string;
    };
    className?: string;
}

export function PlaceholderImage({ brandDetails, className }: PlaceholderImageProps) {
    const color = brandDetails?.color || '#333';
    const name = brandDetails?.name || 'SYSTEM';

    return (
        <div className={cn("relative w-full h-full overflow-hidden bg-zinc-900", className)}>
            {/* Dynamic Gradient Background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    background: `
            linear-gradient(135deg, ${color} 0%, transparent 100%),
            repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)
          `
                }}
            />

            {/* Technical Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="font-heading text-6xl opacity-10 uppercase tracking-tighter" style={{ color }}>
                    {name}
                </div>
                <div className="font-tech text-xs bg-black/80 px-2 py-1 border border-white/20 mt-4 text-white/50 backdrop-blur-sm">
          /// IMAGE_GENERATION_PENDING_QUOTA_LIMIT
                </div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
    );
}
