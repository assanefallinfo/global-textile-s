
import React from 'react';

interface AboutProps {
  showHeading?: boolean;
}

const About = ({ showHeading = true }: AboutProps) => {
  return (
    <section id="à-propos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className="flex flex-col items-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              À propos de <span className="text-gold">nous</span>
            </h2>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p className="text-center max-w-3xl text-navy/80">
              Bienvenue chez Global Textile, votre spécialiste du tissu brodé haut de gamme à Dakar
            </p>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-cream p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6 text-navy/80">
              Depuis notre boutique située au cœur des Parcelles Assainies, nous vous offrons une large gamme de tissus raffinés, soigneusement sélectionnés pour sublimer vos tenues traditionnelles et modernes.
            </p>
            <p className="text-lg mb-6 text-navy/80">
              Chez nous, qualité, élégance et service client sont nos priorités. Que ce soit pour une grande occasion, un événement spécial ou simplement pour vous faire plaisir, vous trouverez chez Global Textile le tissu qui vous ressemble.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-navy mb-1">Qualité Premium</h3>
                  <p className="text-navy/70">Tissus sélectionnés avec soin</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-navy mb-1">Service Rapide</h3>
                  <p className="text-navy/70">Livraison dans tout le Sénégal</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/b791de06-5573-49c2-a1cc-f967b060280b.png" 
                alt="Homme en tenue dorée traditionnelle" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden mt-6">
              <img 
                src="/lovable-uploads/f7cdcb38-9b08-48c6-8c56-a2315231515f.png" 
                alt="Homme en tenue noire traditionnelle" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/85225bb1-482f-469e-92d6-3ea4c0d9f429.png" 
                alt="Homme en tenue blanche traditionnelle" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden mt-6">
              <img 
                src="/lovable-uploads/35ffdd26-28aa-4c1c-98bf-b483c82017df.png" 
                alt="Homme dans la boutique tenant un tissu rose" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
