
import React from 'react';

interface ProductHeadingProps {
  showHeading: boolean;
}

const ProductHeading = ({ showHeading }: ProductHeadingProps) => {
  if (!showHeading) return null;
  
  return (
    <div className="flex flex-col items-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
        Nos <span className="text-gold">ARTICLES</span>
      </h2>
      <div className="w-24 h-1 bg-gold mb-6"></div>
      <p className="text-center max-w-3xl text-navy/80">
        Découvrez notre collection exclusive de tissus, idéale pour toutes vos créations
      </p>
    </div>
  );
};

export default ProductHeading;
