
import React from 'react';

interface ProductImageProps {
  image: string;
}

const ProductImage = ({ image }: ProductImageProps) => {
  return (
    <div className="bg-gold/5 rounded-lg flex items-center justify-center h-80 md:h-96 overflow-hidden">
      {image ? (
        <img 
          src={image} 
          alt="Image du produit"
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <div className="text-center p-6">
          <p className="font-serif text-navy">
            Image non disponible
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
