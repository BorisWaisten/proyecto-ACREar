'use client';

import ProductCatalog from "@/components/trading/product-catalog";
import { tradingData } from "@/data/section/trading";
import { useLanguage } from "@/context/language-context";

export default function TradingPage() {
    const { lang } = useLanguage();
    
    return (
        <section>
            <div className="relative h-[80vw] sm:h-[50vw] md:h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/fotos/trading.webp)', }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center justify-center">
                    <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] w-full text-center bg-[var(--color-background)] p-4 font-bold text-[var(--color-primary)]">Trading</h1>
                </div>
            </div>

            <ProductCatalog trading={tradingData[lang]}/>
        </section>
    );
}