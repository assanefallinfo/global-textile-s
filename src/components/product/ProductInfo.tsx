
import React from 'react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';

interface ProductInfoProps {
  product: Product;
  longDescription: string;
  onDevisClick: () => void;
}

const ProductInfo = ({ product, longDescription, onDevisClick }: ProductInfoProps) => {
  return (
    <div>
      <span className="text-xs font-medium text-gold uppercase tracking-wider">
        {product.category}
      </span>
      <h1 className="text-3xl font-serif font-medium text-navy mt-2 mb-4">
        {product.name.replace("ARTICLES: ", "")}
      </h1>
      {product.manufacturer && (
        <div className="text-sm text-navy/70 mb-4 flex items-center">
          <span className="font-medium">Fabricant:</span> 
          <span className="ml-2">{product.manufacturer}</span>
        </div>
      )}
      <div className="prose text-navy/80 mb-6">
        <p className="mb-4">{product.description}</p>
        <p>{longDescription}</p>
      </div>
      
      <div className="mt-8">
        <Button 
          onClick={onDevisClick} 
          className="bg-gold hover:bg-gold/90"
        >
          Demander un devis
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
