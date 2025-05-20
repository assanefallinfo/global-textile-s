
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';
import { Product } from '@/types/product';

interface RelatedProductsProps {
  currentProductId: number;
  currentProductCategory: string;
  products: Product[];
}

const RelatedProducts = ({ currentProductId, currentProductCategory, products }: RelatedProductsProps) => {
  const navigate = useNavigate();
  
  const relatedProducts = products
    .filter(p => p.category === currentProductCategory && p.id !== currentProductId)
    .slice(0, 3);
  
  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-serif font-medium text-navy mb-6">
        Articles similaires
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map(relatedProduct => (
          <Card
            key={relatedProduct.id}
            className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => navigate(`/produits/${relatedProduct.id}`)}
          >
            <div className="h-40 bg-gold/5 flex items-center justify-center overflow-hidden">
              {relatedProduct.image ? (
                <img 
                  src={relatedProduct.image} 
                  alt="Article"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full p-4">
                  <Image className="h-8 w-8 text-navy/30 mb-1" />
                  <p className="font-serif text-navy/60 text-center text-sm">
                    Image non disponible
                  </p>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <span className="text-xs font-medium text-gold uppercase tracking-wider">
                {relatedProduct.category}
              </span>
              <h3 className="font-serif text-navy mt-2 mb-2">
                Article
              </h3>
              <div className="mt-3">
                <Button
                  variant="link"
                  className="text-gold p-0 h-auto font-medium hover:text-gold/80 transition-colors"
                  onClick={() => navigate(`/produits/${relatedProduct.id}`)}
                >
                  En savoir plus
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
