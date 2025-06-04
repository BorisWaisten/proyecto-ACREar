'use client';

import ProductCatalog from "@/components/trading/product-catalog";
import { tradingData } from "@/data/section/trading";
import { useLanguage } from "@/context/language-context";
import AnimatedBackground from '@/components/animations/AnimatedBackground';

export default function TradingPage() {
    const { lang } = useLanguage();
    
    return (
        <section>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/fotos/trading.webp)', }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center justify-center">
                    <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] w-full text-center p-4 font-bold text-white">Trading</h1>
                </div>
            </div>

            <AnimatedBackground>
                <ProductCatalog trading={tradingData[lang]}/>
            </AnimatedBackground>
        </section>
    );
}