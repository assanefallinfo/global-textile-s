
import React from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
      <p className="text-navy font-medium mr-2">Suivez-nous:</p>
      
      <a 
        href="https://www.instagram.com/global_textile221?igsh=MWxianB0eG4wODdsNg=="
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gold/10 hover:bg-gold/20 text-navy px-4 py-2 rounded-full transition-all"
      >
        <Instagram className="h-4 w-4" />
        <span className="hidden sm:inline">Instagram</span>
      </a>
      
      <a 
        href="https://www.facebook.com/Globaltextileofficielle"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gold/10 hover:bg-gold/20 text-navy px-4 py-2 rounded-full transition-all"
      >
        <Facebook className="h-4 w-4" />
        <span className="hidden sm:inline">Facebook</span>
      </a>
      
      <a 
        href="https://api.whatsapp.com/send?phone=%2B221779677888"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gold/10 hover:bg-gold/20 text-navy px-4 py-2 rounded-full transition-all"
      >
        <Phone className="h-4 w-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
};

export default SocialLinks;
