
import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-20 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-14">
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                À <span className="text-gold">Propos</span>
              </h1>
              <div className="w-24 h-1 bg-gold mb-6"></div>
              <p className="text-center max-w-3xl text-navy/80">
                Découvrez l'histoire et les valeurs de Global Textile, votre spécialiste du tissu de luxe à Dakar
              </p>
            </div>
          </div>
        </div>
        <About showHeading={false} />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
