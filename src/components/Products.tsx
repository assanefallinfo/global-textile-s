
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Data
import products from '@/data/productData';

// Components
import CategoryFilter from '@/components/product/CategoryFilter';
import ProductCard from '@/components/product/ProductCard';
import ProductCTA from '@/components/product/ProductCTA';
import ProductHeading from '@/components/product/ProductHeading';

// Types
import { Product } from '@/types/product';

interface ProductsProps {
  showHeading?: boolean;
}

const Products = ({ showHeading = true }: ProductsProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("Tout");
  const navigate = useNavigate();
  
  // Tous les produits seront affichés sans filtrage
  const filteredProducts = products;
  
  const handleProductClick = (productId: number) => {
    navigate(`/produits/${productId}`);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section id="produits" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <ProductHeading showHeading={showHeading} />
        
        {/* Filtre simplifié avec seulement "ARTICLES" */}
        <CategoryFilter 
          categories={["Tout"]} 
          activeCategory="Tout" 
          onCategoryChange={setActiveCategory} 
        />
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={handleProductClick} 
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <ProductCTA onContactClick={handleContactClick} />
      </div>
    </section>
  );
};

export default Products;
