
import React from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen pt-20 hero-pattern relative flex flex-col justify-center">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight animate-fade-in">
            <span className="text-gold">L'Excellence</span> du Design au Sénégal
          </h1>
          <p className="mt-6 text-lg text-navy/80 max-w-md animate-fade-in">
            Découvrez notre collection exclusive de tissus haut de gamme pour sublimer vos créations et cérémonies.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in">
            <a 
              href="#produits" 
              className="px-6 py-3 bg-gold text-white rounded-md hover:bg-gold/90 transition-colors shadow-md font-medium"
            >
              Voir nos produits
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-navy text-navy rounded-md hover:bg-navy/5 transition-colors font-medium"
            >
              Nous contacter
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative animate-fade-in">
          <div className="w-full aspect-square bg-gold/10 rounded-full absolute -top-4 -right-4"></div>
          <div className="w-full aspect-square bg-navy/10 rounded-full absolute -bottom-4 -left-4"></div>
          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
            <div className="bg-gradient-to-br from-gold/30 to-navy/30 aspect-[4/3] flex items-center justify-center">
              <p className="text-xl font-serif text-navy text-center p-8">
                Momo Design - Élégance et qualité
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#à-propos" 
          className="flex flex-col items-center text-navy/60 hover:text-navy transition-colors"
        >
          <span className="text-sm mb-2">Découvrir</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 animate-bounce" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
