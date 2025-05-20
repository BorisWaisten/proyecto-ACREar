import ProductCatalog from "@/components/trading/product-catalog";

export default function TradingPage() {
    return (
        <section>
            <div className="relative md:h-[30vw] bg-cover bg-center" style={{ backgroundImage: 'url(/fotos/trading.jpg)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                <h1 className=" md:text-3xl w-full text-center bg-[var(--color-background)] p-4 font-bold text-[var(--color-primary)]">PRODUCTOS</h1>
                </div>
            </div>

            <ProductCatalog />
        </section>
    );
}