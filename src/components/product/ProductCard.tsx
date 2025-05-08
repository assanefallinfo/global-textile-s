
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  manufacturer?: string;
}

interface ProductCardProps {
  product: Product;
  onClick: (productId: number) => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Card
      className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => onClick(product.id)}
    >
      <div className="h-60 bg-gold/5 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <p className="font-serif text-navy text-center p-6">
            Image de {product.name}
          </p>
        )}
      </div>
      <CardContent className="p-6">
        <span className="text-xs font-medium text-gold uppercase tracking-wider">
          ARTICLE
        </span>
        <h3 className="text-xl font-serif font-medium text-navy mt-2 mb-3">
          {product.name}
        </h3>
        <p className="text-navy/70 mb-4">
          {product.description}
        </p>
        {product.manufacturer && (
          <div className="text-xs text-navy/60 mb-2">
            Fabricant: {product.manufacturer}
          </div>
        )}
        <button 
          className="text-gold font-medium flex items-center hover:text-gold/80 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClick(product.id);
          }}
        >
          En savoir plus
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
