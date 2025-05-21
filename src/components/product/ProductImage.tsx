
import React from 'react';
import ProductCarousel from './ProductCarousel';

interface ProductImageProps {
  image: string;
}

const ProductImage = ({ image }: ProductImageProps) => {
  const images = image ? [image] : [];
  
  return <ProductCarousel images={images} alt="Image du produit" />;
};

export default ProductImage;
