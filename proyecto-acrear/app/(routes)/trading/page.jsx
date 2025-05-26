import ProductCatalog from "@/components/trading/product-catalog";
import Image from "next/image";

export default function TradingPage() {
    return (
        <section>
            <div className="relative md:h-[30vw] bg-cover bg-center" style={{ backgroundImage: 'url(/fotos/trading.webp)', }}>
                <div className="absolute inset-0 flex items-center justify-center">
                <h1 className=" md:text-[4rem] w-full text-center bg-[var(--color-background)] p-4 font-bold text-[var(--color-primary)]">PRODUCTOS</h1>
                </div>
            </div>

            <ProductCatalog />
        </section>
    );
}