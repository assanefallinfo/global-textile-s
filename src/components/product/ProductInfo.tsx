
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
      <div className="flex flex-col gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gold uppercase tracking-wider">
            Article
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-navy uppercase tracking-wider">
            Numéro de série: {product.id.toString().padStart(4, '0')}
          </span>
        </div>
      </div>
      
      <h3 className="text-3xl font-serif font-medium text-navy mt-2 mb-4">
        {product.name || "Article"}
      </h3>
      
      <p className="text-navy/70 mb-6">
        {product.description || "Article"}
      </p>
      
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
