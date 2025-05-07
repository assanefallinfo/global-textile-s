
import React from 'react';

interface ProductCTAProps {
  onContactClick: () => void;
}

const ProductCTA = ({ onContactClick }: ProductCTAProps) => {
  return (
    <div className="mt-16 text-center">
      <a 
        onClick={onContactClick}
        className="inline-flex items-center px-6 py-3 bg-gold text-white rounded-md hover:bg-gold/90 transition-colors shadow-md cursor-pointer"
      >
        Contactez-nous pour plus d'informations
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  );
};

export default ProductCTA;
