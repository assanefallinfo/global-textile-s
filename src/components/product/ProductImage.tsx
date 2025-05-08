
import React from 'react';

interface ProductImageProps {
  image: string;
  name: string;
}

const ProductImage = ({ image, name }: ProductImageProps) => {
  return (
    <div className="bg-gold/5 rounded-lg flex items-center justify-center h-80 md:h-96 overflow-hidden">
      {image ? (
        <img 
          src={image} 
          alt={`Image de ${name}`}
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <div className="text-center p-6">
          <p className="font-serif text-navy">
            Image de {name}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
