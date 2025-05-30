import ProductCatalog from "@/components/trading/product-catalog";

export default function TradingPage() {
    return (
        <section>
            <div className="relative h-[80vw] sm:h-[50vw] md:h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/fotos/trading.webp)', }}>
                <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] w-full text-center bg-[var(--color-background)] p-4 font-bold text-[var(--color-primary)]">Trading</h1>
                </div>
            </div>

            <ProductCatalog />
        </section>
    );
}