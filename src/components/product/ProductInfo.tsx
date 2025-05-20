
import React from 'react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductInfoProps {
  product: Product;
  longDescription: string;
  onDevisClick: () => void;
}

const ProductInfo = ({ product, longDescription, onDevisClick }: ProductInfoProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-gold uppercase tracking-wider">
          {product.category}
        </span>
        
        {product.manufacturer && (
          <Badge className="bg-navy/10 text-navy hover:bg-navy/20 flex items-center gap-1">
            <Tag className="h-3 w-3" />
            {product.manufacturer}
          </Badge>
        )}
      </div>
      
      <h3 className="text-3xl font-serif font-medium text-navy mt-2 mb-4">
        Article
      </h3>
      
      <p className="text-navy/70 mb-6">
        Article
      </p>
      
      {longDescription && (
        <div className="text-navy/70 mb-6 space-y-4">
          <h4 className="text-lg font-medium text-navy">Détails du produit</h4>
          <div className="bg-cream/50 p-4 rounded-md border border-cream">
            Article
          </div>
        </div>
      )}
      
      {product.manufacturer && (
        <div className="mt-6 mb-8 flex items-start gap-2">
          <span className="font-medium text-navy min-w-24">Fabricant:</span> 
          <div>
            <span className="text-navy/80">{product.manufacturer}</span>
            {product.manufacturer.includes('Getzner') && (
              <p className="text-sm text-navy/60 mt-1">
                Getzner est une marque autrichienne réputée pour la qualité exceptionnelle de ses tissus, 
                utilisés dans la haute couture et les cérémonies prestigieuses à travers le monde.
              </p>
            )}
          </div>
        </div>
      )}
      
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
