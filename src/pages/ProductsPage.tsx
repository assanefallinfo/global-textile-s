
import React from 'react';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

const ProductsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-20 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-14">
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Nos <span className="text-gold">Collections</span>
              </h1>
              <div className="w-24 h-1 bg-gold mb-6"></div>
              <p className="text-center max-w-3xl text-navy/80">
                Découvrez notre gamme exclusive de tissus de luxe pour toutes vos cérémonies
              </p>
            </div>
          </div>
        </div>
        <Products showHeading={false} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
