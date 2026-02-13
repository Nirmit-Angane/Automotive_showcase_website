import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas-neue",
});

const space = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

const chakra = Chakra_Petch({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-chakra-petch",
});

export const metadata: Metadata = {
    title: "PREMIUM AUTOMOTIVE SHOWCASE",
    description: "Brutalist Motorsport Experience featuring Ferrari, Lamborghini, McLaren, Porsche",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                bebas.variable,
                space.variable,
                chakra.variable
            )}>
                {children}
            </body>
        </html>
    );
}
