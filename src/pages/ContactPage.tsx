
import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-20 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-14">
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Contactez <span className="text-gold">Nous</span>
              </h1>
              <div className="w-24 h-1 bg-gold mb-6"></div>
              <p className="text-center max-w-3xl text-navy/80">
                Besoin d'informations ou d'un devis? N'hésitez pas à nous contacter!
              </p>
            </div>
          </div>
        </div>
        <Contact showHeading={false} />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
