
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

// Product data
const products = [
  {
    id: 1,
    name: "Tissus brodés de luxe",
    description: "Nos tissus brodés haut de gamme pour vos cérémonies spéciales.",
    category: "Brodé",
  },
  {
    id: 2,
    name: "Bazin riche teint",
    description: "Bazin de qualité supérieure avec des couleurs vibrantes et durables.",
    category: "Bazin",
  },
  {
    id: 3,
    name: "Bazin riche uni",
    description: "Élégance simple et raffinée avec notre bazin uni de qualité.",
    category: "Bazin",
  },
  {
    id: 4,
    name: "Voiles brodés",
    description: "Des voiles délicats avec des broderies exquises pour une touche d'élégance.",
    category: "Voile",
  },
  {
    id: 5,
    name: "Dentelles premium",
    description: "Dentelles raffinées pour sublimer vos créations les plus élégantes.",
    category: "Dentelle",
  },
  {
    id: 6,
    name: "Tissus pour mariage",
    description: "Collections spéciales pour rendre votre jour J inoubliable.",
    category: "Cérémonie",
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tout");
  const categories = ["Tout", ...Array.from(new Set(products.map(product => product.category)))];
  
  const filteredProducts = activeCategory === "Tout" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="produits" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Nos <span className="text-gold">Produits</span>
          </h2>
          <div className="w-24 h-1 bg-gold mb-6"></div>
          <p className="text-center max-w-3xl text-navy/80">
            Découvrez notre collection exclusive de tissus, idéale pour toutes vos créations
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm md:text-base transition-all whitespace-nowrap",
                  activeCategory === category
                    ? "bg-gold text-white shadow-md"
                    : "bg-white text-navy hover:bg-gold/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md product-card transition-all duration-300"
            >
              <div className="h-60 bg-gold/10 flex items-center justify-center">
                <p className="font-serif text-navy text-center p-6">
                  Image de {product.name}
                </p>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-gold uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-xl font-serif font-medium text-navy mt-2 mb-3">
                  {product.name}
                </h3>
                <p className="text-navy/70 mb-4">
                  {product.description}
                </p>
                <button className="text-gold font-medium flex items-center hover:text-gold/80 transition-colors">
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-gold text-white rounded-md hover:bg-gold/90 transition-colors shadow-md"
          >
            Contactez-nous pour plus d'informations
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
