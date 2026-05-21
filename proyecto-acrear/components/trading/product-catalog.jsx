'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import clsx from 'clsx';

function ProductImage({ product, n, className, width = 400, height = 300 }) {
  const [ext, setExt] = useState('png');
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    setExt('png');
    setHasError(false);
  }, [product, n]);
  
  const handleError = () => {
    if (ext === 'png') {
      setExt('jpg');
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">Sin imagen</span>
      </div>
    );
  }
  
  return (
    <img
      src={`/fotos/${product}/${product}${n}.${ext}`}
      alt={`${product} ${n}`}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  );
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
};

export default function ProductCatalog({trading}) {
  const products  = [...trading.products]
  const [activeProduct, setActiveProduct] = useState(products[0].key);

  const handleSelect = (key) => {
    setActiveProduct((prev) => (prev === key ? null : key));
  };

  return (
    <section className=" py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] text-center mb-12">
        {trading.title}
      </h2>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {products.map((p) => (
          <button
            key={p.key}
            onClick={() => handleSelect(p.key)}
            className={clsx(
              'w-[3.5rem] h-[3.5rem] md:w-28 md:h-28 rounded-full flex items-center justify-center font-semibold transition-all duration-300 text-white',
              activeProduct === p.key
                ? 'bg-[var(--color-primary)] scale-110'
                : 'bg-[var(--color-accent)] hover:bg-[var(--color-primary)]'
            )}
          >
            <span className="text-center text-[0.35rem] md:text-xs">{p.label}</span>
          </button>
        ))}
      </div>

      {/* Mobile Carousel */}
      {activeProduct && (
        <div className="sm:hidden mb-10">
          <Slider {...sliderSettings}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="px-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-48 flex items-center justify-center transition-transform transform hover:scale-105">
                  <ProductImage
                    key={`${activeProduct}-${n}`}
                    product={activeProduct}
                    n={n}
                    className="object-cover h-48 w-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Desktop Grid */}
      {activeProduct && (
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 animate-fade-in">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform"
            >
              <ProductImage
                key={`${activeProduct}-${n}`}
                product={activeProduct}
                n={n}
                className="object-cover h-48 md:w-full md:h-64"
              />
            </div>
          ))}
        </div>
      )}

      {/* Catálogo completo */}
      <div className="text-center mt-12">
        <p className="text-[var(--color-primary)] font-semibold text-lg mb-4">
          {trading.cta.text}
        </p>
        <a
          href="/catalogo-acrearg.pdf"
          download
          className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-secondary)] transition-colors"
        >
          {trading.cta.btn}
        </a>
      </div>
    </section>
  );
}
