import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-px gap-y-12 md:gap-y-20 bg-gray-100/50 p-px">
      {products.map((product) => (
        <div key={product.id} className="group relative bg-[#FCFBF8] p-4 md:p-8 flex flex-col items-center">
          
          {/* New Label */}
          {product.tags.includes('New Arrival') && (
            <span className="absolute top-4 left-0 w-full text-center text-[9px] tracking-[0.2em] font-medium text-gray-400 uppercase">
              Yeni Gelen
            </span>
          )}

          {/* Image */}
          <div className="w-full aspect-[4/5] overflow-hidden mb-6 relative">
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className="w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            />
            {product.images[1] && (
               <img 
               src={product.images[1]} 
               alt={product.title} 
               className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105 transform"
             />
            )}
          </div>

          {/* Info */}
          <div className="text-center mt-auto w-full">
            <h3 className="text-xs tracking-[0.1em] text-gray-900 mb-2 font-medium uppercase group-hover:underline decoration-gray-300 underline-offset-4 transition-all">
              {product.title}
            </h3>
            <p className="text-xs text-gray-500 font-serif italic">
              {product.price.toLocaleString('tr-TR')} TL
            </p>
          </div>

          {/* Invisible Overlay Link */}
          <a href="#" className="absolute inset-0 z-10" aria-label={`View ${product.title}`}></a>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
